/**
 * Helper for executing workflows that require connector OAuth authentication,
 * like the Python client's `execute_with_connector_auth_async`.
 *
 * When a workflow uses connectors that need OAuth, it emits `connector_auth`
 * custom task events. `executeWithConnectorAuth` automates the handshake:
 *
 * 1. Start the workflow execution.
 * 2. Stream events, watching for `connector_auth` custom task events.
 * 3. When one arrives, invoke a user-supplied callback with the auth URL.
 * 4. The worker polls for credentials server-side and resumes automatically.
 * 5. Return the final execution once the workflow completes.
 */

import * as z from "zod/v4";

import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import type { RequestOptions } from "../../lib/sdks.js";
import type * as components from "../../models/components/index.js";
import { ConnectionError } from "../../models/errors/httpclienterrors.js";
import type { Mistral } from "../../sdk/sdk.js";
import { StreamDisconnectedError } from "../../hooks/workflow_stream_error.js";
import { type ConnectorSlot, workflowExtensions } from "./connector-slot.js";
import { sleep, waitForWorkflowCompletion } from "./execution.js";

const CONNECTOR_AUTH_TASK_TYPE = "connector_auth";
const TERMINAL_EVENT_TYPES: ReadonlySet<string> = new Set([
  "WORKFLOW_EXECUTION_COMPLETED",
  "WORKFLOW_EXECUTION_FAILED",
  "WORKFLOW_EXECUTION_CANCELED",
]);
const MAX_RECONNECT_ATTEMPTS = 10;
const DEFAULT_POLLING_INTERVAL = 2;

/** State emitted by a `connector_auth` custom task when it needs OAuth. */
export type ConnectorAuthTaskState = {
  /** Identifier of the connector requiring authentication. */
  connectorName: string;
  /** Server-side connector ID. */
  connectorId: string;
  /** Optional named credential set used for this connector. */
  credentialsName?: string | null | undefined;
  /** URL the user should visit to complete authentication. */
  authUrl?: string | null | undefined;
  /** Optional human-readable context about the auth request. */
  message?: string | null | undefined;
};

const ConnectorAuthTaskState$inboundSchema: z.ZodType<
  ConnectorAuthTaskState,
  unknown
> = z.object({
  connector_name: z.string(),
  connector_id: z.string(),
  credentials_name: z.nullable(z.string()).optional(),
  auth_url: z.nullable(z.string()).optional(),
  message: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "connector_name": "connectorName",
    "connector_id": "connectorId",
    "credentials_name": "credentialsName",
    "auth_url": "authUrl",
  });
});

export type ExecuteWithConnectorAuthRequest = {
  /** Name or ID of the workflow to execute. */
  workflowIdentifier: string;
  /** Input payload for the workflow. */
  input?: any | null | undefined;
  /**
   * Invoked when a connector needs the user to authenticate, with the OAuth
   * URL in `authUrl`. The workflow resumes automatically once the user has
   * authenticated.
   */
  onAuthRequired?:
    | ((state: ConnectorAuthTaskState) => void | Promise<void>)
    | undefined;
  /** Optional custom execution ID. */
  executionId?: string | null | undefined;
  /** Deprecated. Use `deploymentName` instead. */
  taskQueue?: string | null | undefined;
  /** Name of the deployment to route this execution to. */
  deploymentName?: string | null | undefined;
  /** The connectors the workflow needs, and the credentials to use for them. */
  connectors?: readonly ConnectorSlot[] | undefined;
  /**
   * Seconds between status checks after the event stream ends, like the
   * Python client. Defaults to 2.
   */
  pollingInterval?: number | undefined;
  /** Maximum number of status checks. Unlimited when omitted. */
  maxPollingAttempts?: number | undefined;
};

/**
 * Executes a workflow, invoking `onAuthRequired` whenever one of its
 * connectors needs the user to authenticate, and returns the completed
 * execution.
 *
 * @example
 * ```ts
 * const execution = await executeWithConnectorAuth(client, {
 *   workflowIdentifier: "my-workflow",
 *   input: { query: "summarize my emails" },
 *   connectors: [{ connectorName: "gmail" }],
 *   onAuthRequired: (state) => {
 *     console.log(`Please authenticate: ${state.authUrl}`);
 *   },
 * });
 * ```
 *
 * @throws `WorkflowExecutionError` when the execution ends with a status other than `COMPLETED`.
 * @throws `WorkflowPollingTimeoutError` when `maxPollingAttempts` is reached while still running.
 */
export async function executeWithConnectorAuth(
  client: Mistral,
  request: ExecuteWithConnectorAuthRequest,
  options?: RequestOptions,
): Promise<components.WorkflowExecutionResponse> {
  const {
    workflowIdentifier,
    input,
    onAuthRequired,
    executionId,
    taskQueue,
    deploymentName,
    connectors = [],
    pollingInterval = DEFAULT_POLLING_INTERVAL,
    maxPollingAttempts,
  } = request;

  const execution = await client.workflows.executeWorkflow({
    workflowIdentifier,
    workflowExecutionRequest: {
      input,
      executionId,
      taskQueue,
      deploymentName,
      ...(connectors.length > 0
        && { extensions: workflowExtensions(connectors) }),
    },
  }, options);
  const execId = execution.executionId;

  await streamAndHandleAuth(client, execId, onAuthRequired, options);

  return waitForWorkflowCompletion(
    client.workflows,
    execId,
    { pollingInterval, maxAttempts: maxPollingAttempts },
    options,
  );
}

/**
 * Streams the execution's events, invoking `onAuthRequired` for each
 * connector auth request, until the workflow ends. Reconnects with
 * exponential back-off when the connection drops.
 */
async function streamAndHandleAuth(
  client: Mistral,
  execId: string,
  onAuthRequired: ExecuteWithConnectorAuthRequest["onAuthRequired"],
  options: RequestOptions | undefined,
): Promise<void> {
  let lastSeq = 0;

  for (let attempt = 0; attempt < MAX_RECONNECT_ATTEMPTS; attempt++) {
    const connection = { dropped: false };
    const openStream = () =>
      client.workflows.events.getStreamEvents({
        rootWorkflowExecId: execId,
        workflowExecId: "*",
        parentWorkflowExecId: "*",
        startSeq: lastSeq,
      }, {
        ...options,
        // The SDK's timeout bounds the whole request, body included, and
        // defaults to 5 minutes: it would cut the stream while the user is
        // still authenticating, which the worker waits up to 10 minutes for.
        // The server sends keepalives, like client-python which only has a
        // read timeout. A non-positive timeoutMs disables it.
        timeoutMs: -1,
      });

    for await (const payload of untilDropped(openStream, connection)) {
      lastSeq = payload.brokerSequence + 1;
      const event = payload.data;

      // The stream also carries child workflows' events, whose own end must
      // not stop it: a later child may still request connector auth.
      if (
        TERMINAL_EVENT_TYPES.has(event.eventType)
        && event.workflowExecId === execId
      ) {
        return;
      }
      if (event.eventType !== "CUSTOM_TASK_STARTED") continue;
      if (event.attributes.customTaskType !== CONNECTOR_AUTH_TASK_TYPE) {
        continue;
      }

      const value = event.attributes.payload?.value;
      if (typeof value !== "object" || value === null || Array.isArray(value)) {
        continue;
      }

      const state = safeParse(
        value,
        (x) => ConnectorAuthTaskState$inboundSchema.parse(x),
        "Failed to parse 'ConnectorAuthTaskState' from 'connector_auth' payload",
      );
      if (!state.ok) throw state.error;

      // The worker polls for credentials server-side: no signal or update
      // needed from the client.
      await onAuthRequired?.(state.value);
    }

    // Without a terminal event, the stream either dropped or ended: retry.
    if (connection.dropped) {
      client._options.debugLogger?.log(
        `Event stream connection lost, reconnecting (execution_id=${execId}, attempt=${attempt})`,
      );
      await sleep(Math.min(2 ** attempt, 30), options);
    }
  }

  console.warn(
    `Exhausted ${MAX_RECONNECT_ATTEMPTS} reconnect attempts for event stream (execution_id=${execId})`,
  );
}

/**
 * Opens the event stream and yields its event payloads until the server
 * reports a stream error or the connection drops, which sets
 * `connection.dropped`.
 *
 * Only failures to open or read the stream are caught here: errors thrown by
 * the caller's loop body, such as from `onAuthRequired`, propagate.
 */
async function* untilDropped(
  openStream: () => Promise<AsyncIterable<{
    data?:
      | components.StreamEventSsePayload
      | components.WorkflowStreamError
      | undefined;
  }>>,
  connection: { dropped: boolean },
): AsyncGenerator<components.StreamEventSsePayload> {
  try {
    for await (const { data } of await openStream()) {
      if (data === undefined) continue;
      if (!("brokerSequence" in data)) {
        // A typed stream error after HTTP 200: the stream failed mid-tail.
        connection.dropped = true;
        return;
      }
      yield data;
    }
  } catch (error) {
    // The SDK throws ConnectionError when the connection fails while opening
    // the stream, the stream error hook throws StreamDisconnectedError for
    // error events, and fetch rejects body reads with a TypeError when the
    // connection drops.
    if (
      !(error instanceof ConnectionError
        || error instanceof StreamDisconnectedError
        || error instanceof TypeError)
    ) {
      throw error;
    }
    connection.dropped = true;
  }
}
