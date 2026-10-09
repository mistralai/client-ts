/**
 * Port of the Python client's `WorkflowEncodingHook`
 * (`mistralai.client._hooks.workflow_encoding_hook`).
 *
 * Once a client is configured with `configureWorkflowEncoding()`, this hook
 * encodes workflow inputs before they are sent (encryption, compression,
 * blob storage offloading) and decodes workflow results and event payloads
 * (including SSE streams) when they are received.
 */

import { generateTwoPartId } from "../extra/workflows/encoding/ids.js";
import type { PayloadEncoder } from "../extra/workflows/encoding/payload-encoder.js";
import { isPlainObject } from "../lib/primitives.js";
import {
  AfterSuccessContext,
  AfterSuccessHook,
  BeforeRequestContext,
  BeforeRequestHook,
} from "./types.js";

const EXECUTE_WORKFLOW_OPERATION_ID =
  "execute_workflow_v1_workflows__workflow_identifier__execute_post";
const EXECUTE_WORKFLOW_REGISTRATION_OPERATION_ID =
  "execute_workflow_registration_v1_workflows_registrations__workflow_registration_id__execute_post";
const SCHEDULE_WORKFLOW_OPERATION_ID =
  "schedule_workflow_v1_workflows_schedules_post";
const UPDATE_SCHEDULE_OPERATION_ID =
  "update_schedule_v1_workflows_schedules__schedule_id__patch";

const EXECUTE_OPERATIONS = new Set([
  EXECUTE_WORKFLOW_OPERATION_ID,
  EXECUTE_WORKFLOW_REGISTRATION_OPERATION_ID,
]);

// Schedule operations carry the input in the `schedule` definition rather
// than at the top level of the body.
const SCHEDULE_OPERATIONS = new Set([
  SCHEDULE_WORKFLOW_OPERATION_ID,
  UPDATE_SCHEDULE_OPERATION_ID,
]);

const OPERATIONS_ENCODE_INPUT = new Set([
  EXECUTE_WORKFLOW_OPERATION_ID,
  EXECUTE_WORKFLOW_REGISTRATION_OPERATION_ID,
  "signal_workflow_execution_v1_workflows_executions__execution_id__signals_post",
  "query_workflow_execution_v1_workflows_executions__execution_id__queries_post",
  "update_workflow_execution_v1_workflows_executions__execution_id__updates_post",
  SCHEDULE_WORKFLOW_OPERATION_ID,
  UPDATE_SCHEDULE_OPERATION_ID,
]);

const OPERATIONS_DECODE_RESULT = new Set([
  EXECUTE_WORKFLOW_OPERATION_ID,
  EXECUTE_WORKFLOW_REGISTRATION_OPERATION_ID,
  "get_workflow_execution_v1_workflows_executions__execution_id__get",
  "query_workflow_execution_v1_workflows_executions__execution_id__queries_post",
  "update_workflow_execution_v1_workflows_executions__execution_id__updates_post",
]);

const OPERATIONS_DECODE_EVENTS = new Set([
  "get_workflow_events_v1_workflows_events_list_get",
]);

const OPERATIONS_DECODE_EVENTS_STREAM = new Set([
  "get_stream_events_v1_workflows_events_stream_get",
  "stream_v1_workflows_executions__execution_id__stream_get",
]);

const SCHEDULE_CORRELATION_ID_PLACEHOLDER = "__scheduled_workflow__";

/** Whether a value is a JSONPayload or JSONPatchPayload: `{type, value}`. */
function isPayloadType(value: unknown): value is Record<string, unknown> {
  return isPlainObject(value)
    && (value["type"] === "json" || value["type"] === "json_patch")
    && "value" in value;
}

function extractExecutionIdFromUrl(url: string): string | undefined {
  return /\/executions\/([^/]+)/.exec(url)?.[1];
}

function extractWorkflowIdentifierFromExecuteUrl(
  url: string,
): string | undefined {
  return /\/(?:workflows|registrations)\/([^/]+)\/execute/.exec(url)?.[1];
}

async function decryptEventAttributes(
  attributes: Record<string, unknown>,
  payloadEncoder: PayloadEncoder,
): Promise<void> {
  for (const [fieldName, fieldValue] of Object.entries(attributes)) {
    if (!isPayloadType(fieldValue)) continue;
    const encodingOptions = fieldValue["encoding_options"];
    if (!Array.isArray(encodingOptions) || encodingOptions.length === 0) {
      continue;
    }
    // Errors come from the encoder unchanged: this hook may be a different
    // copy of the SDK's modules than the one the app imports error classes
    // from (see WorkflowEncodingHook).
    attributes[fieldName] = await payloadEncoder.decodeEventPayload(fieldValue);
  }
}

async function decryptSseLine(
  line: string,
  payloadEncoder: PayloadEncoder,
): Promise<string> {
  if (!line.startsWith("data:")) return line;
  const dataPart = line.slice(5).trim();
  if (!dataPart) return line;

  let eventWrapper: unknown;
  try {
    eventWrapper = JSON.parse(dataPart);
  } catch {
    return line; // Not JSON, so not an event carrying payloads.
  }
  if (!isPlainObject(eventWrapper)) return line;
  const data = eventWrapper["data"];
  if (!isPlainObject(data) || !isPlainObject(data["attributes"])) return line;

  // Unlike the Python hook, which logs and passes the line through, a payload
  // that can't be decoded fails the stream: the app would otherwise receive
  // ciphertext as event data.
  await decryptEventAttributes(data["attributes"], payloadEncoder);
  return `data: ${JSON.stringify(eventWrapper)}`;
}

/** Headers for a rebuilt body: the SDK reads it already decompressed. */
function rebuiltBodyHeaders(headers: Headers): Headers {
  const result = new Headers(headers);
  result.delete("content-encoding");
  result.delete("content-length");
  return result;
}

function jsonResponse(response: Response, body: unknown): Response {
  return new Response(JSON.stringify(body), {
    status: response.status,
    statusText: response.statusText,
    headers: rebuiltBodyHeaders(response.headers),
  });
}

function decryptingSseResponse(
  response: Response,
  payloadEncoder: PayloadEncoder,
): Response {
  const decoder = new TextDecoder();
  const encoder = new TextEncoder();
  let buffer = "";

  const transform = new TransformStream<Uint8Array, Uint8Array>({
    async transform(chunk, controller) {
      buffer += decoder.decode(chunk, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop() ?? "";
      for (const line of lines) {
        const decrypted = await decryptSseLine(line, payloadEncoder);
        controller.enqueue(encoder.encode(`${decrypted}\n`));
      }
    },
    async flush(controller) {
      buffer += decoder.decode();
      if (buffer) {
        controller.enqueue(
          encoder.encode(await decryptSseLine(buffer, payloadEncoder)),
        );
      }
    },
  });

  return new Response(response.body?.pipeThrough(transform) ?? null, {
    status: response.status,
    statusText: response.statusText,
    headers: rebuiltBodyHeaders(response.headers),
  });
}

export class WorkflowEncodingHook implements BeforeRequestHook, AfterSuccessHook {
  /**
   * Identifies this hook without `instanceof`: bundlers can load the
   * `extra/workflows` entry and the main SDK entry as separate module graphs,
   * each with its own copy of this class.
   */
  readonly _mistralWorkflowEncodingHook = true;

  #config: { payloadEncoder: PayloadEncoder; namespace: string } | undefined;
  // Execution IDs generated per call. Retries run the hook again with the
  // same context, and must not start a second run under a new ID.
  readonly #executionIds = new WeakMap<BeforeRequestContext, string>();

  /**
   * Enables payload encoding for the client this hook is registered on.
   *
   * @param namespace - The workflow namespace, under which inputs are
   *   offloaded.
   */
  configure(payloadEncoder: PayloadEncoder, namespace: string): void {
    this.#config = { payloadEncoder, namespace };
  }

  async beforeRequest(
    hookCtx: BeforeRequestContext,
    request: Request,
  ): Promise<Request> {
    const config = this.#config;
    if (!config || !OPERATIONS_ENCODE_INPUT.has(hookCtx.operationID)) {
      return request;
    }
    const contentType = request.headers.get("content-type") ?? "";
    if (!contentType.includes("application/json")) return request;

    const body: unknown = await request.clone().json();
    if (!isPlainObject(body)) return request;
    const inputHolder = SCHEDULE_OPERATIONS.has(hookCtx.operationID)
      ? body["schedule"]
      : body;
    if (!isPlainObject(inputHolder) || inputHolder["input"] == null) {
      return request;
    }

    let executionId = (body["execution_id"] as string | null | undefined)
      || extractExecutionIdFromUrl(request.url);

    if (!executionId && EXECUTE_OPERATIONS.has(hookCtx.operationID)) {
      executionId = this.#executionIds.get(hookCtx)
        ?? await generateTwoPartId(
          extractWorkflowIdentifierFromExecuteUrl(request.url),
        );
      this.#executionIds.set(hookCtx, executionId);
      body["execution_id"] = executionId;
    }
    if (!executionId && SCHEDULE_OPERATIONS.has(hookCtx.operationID)) {
      executionId = SCHEDULE_CORRELATION_ID_PLACEHOLDER;
    }
    if (!executionId) {
      throw new Error(
        `WorkflowEncoding: Could not extract execution_id for ${hookCtx.operationID}`,
      );
    }

    const encodedInput = await config.payloadEncoder.encodeNetworkInput(
      inputHolder["input"],
      { namespace: config.namespace, executionId },
    );
    // Execute operations take the encoded input in a separate field; signal,
    // query, update and schedule take it in `input` directly.
    if (EXECUTE_OPERATIONS.has(hookCtx.operationID)) {
      body["encoded_input"] = encodedInput;
      body["input"] = null;
    } else {
      inputHolder["input"] = encodedInput;
    }

    const headers = new Headers(request.headers);
    headers.delete("content-length");
    return new Request(request, {
      method: request.method,
      headers,
      body: JSON.stringify(body),
    });
  }

  async afterSuccess(
    hookCtx: AfterSuccessContext,
    response: Response,
  ): Promise<Response> {
    const payloadEncoder = this.#config?.payloadEncoder;
    if (!payloadEncoder) return response;

    const contentType = response.headers.get("content-type") ?? "";

    if (OPERATIONS_DECODE_EVENTS_STREAM.has(hookCtx.operationID)) {
      if (contentType.includes("text/event-stream") && response.body) {
        return decryptingSseResponse(response, payloadEncoder);
      }
      return response;
    }

    if (!contentType.includes("application/json")) return response;

    if (OPERATIONS_DECODE_RESULT.has(hookCtx.operationID)) {
      const body: unknown = await response.clone().json();
      if (!isPlainObject(body)) return response;
      const result = body["result"];
      if (result == null || !payloadEncoder.checkIsPayloadEncoded(result)) {
        return response;
      }
      const decoded = await payloadEncoder.decodeNetworkResult(result);
      if (decoded instanceof Uint8Array) {
        throw new Error("WorkflowEncoding: decoded result is not valid JSON");
      }
      // The SDK parses the rebuilt body with JSON.parse, so NaN and Infinity,
      // which Python allows in results, reach the app as null.
      body["result"] = decoded;
      return jsonResponse(response, body);
    }

    if (OPERATIONS_DECODE_EVENTS.has(hookCtx.operationID)) {
      const body: unknown = await response.clone().json();
      if (!isPlainObject(body) || !Array.isArray(body["events"])) return response;
      for (const event of body["events"]) {
        if (isPlainObject(event) && isPlainObject(event["attributes"])) {
          await decryptEventAttributes(event["attributes"], payloadEncoder);
        }
      }
      return jsonResponse(response, body);
    }

    return response;
  }
}
