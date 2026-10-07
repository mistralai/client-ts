import { afterEach, describe, expect, it, vi } from "vitest";

import {
  type ConnectorAuthTaskState,
  executeWithConnectorAuth,
} from "../../src/extra/workflows/index.js";
import { HTTPClient, Mistral } from "../../src/index.js";

const EXECUTION_ID = "exec-1";
const EXECUTE_PATH = "/v1/workflows/my-workflow/execute";
const STREAM_PATH = "/v1/workflows/events/stream";
const EXECUTION_PATH = `/v1/workflows/executions/${EXECUTION_ID}`;

const encoder = new TextEncoder();

function execution(status: string) {
  return {
    workflow_name: "my-workflow",
    execution_id: EXECUTION_ID,
    root_execution_id: EXECUTION_ID,
    status,
    start_time: "2026-01-01T00:00:00Z",
    end_time: status === "RUNNING" ? null : "2026-01-01T00:01:00Z",
    result: status === "COMPLETED" ? "done" : null,
  };
}

function event(
  brokerSequence: number,
  eventType: string,
  attributes: Record<string, unknown>,
  workflowExecId = EXECUTION_ID,
) {
  return {
    stream: "workflow",
    workflow_context: {
      namespace: "ns",
      workflow_name: "my-workflow",
      workflow_exec_id: workflowExecId,
    },
    broker_sequence: brokerSequence,
    data: {
      event_id: `event-${brokerSequence}`,
      event_timestamp: 0,
      root_workflow_exec_id: EXECUTION_ID,
      parent_workflow_exec_id: workflowExecId === EXECUTION_ID
        ? null
        : EXECUTION_ID,
      continued_run_id: null,
      first_execution_run_id: null,
      chain_run_id: null,
      schedule_id: null,
      workflow_exec_id: workflowExecId,
      workflow_run_id: "run-1",
      workflow_name: "my-workflow",
      event_type: eventType,
      attributes,
    },
  };
}

function customTaskStarted(
  brokerSequence: number,
  customTaskType: string,
  value: unknown,
) {
  return event(brokerSequence, "CUSTOM_TASK_STARTED", {
    custom_task_id: `task-${brokerSequence}`,
    custom_task_type: customTaskType,
    payload: { type: "json", value },
  });
}

/** A `connector_auth` task event, with the payload the worker emits. */
function authRequired(brokerSequence: number, connectorName: string) {
  return customTaskStarted(brokerSequence, "connector_auth", {
    connector_name: connectorName,
    connector_id: `${connectorName}-id`,
    status: "waiting_for_auth",
    credentials_name: "work-account",
    auth_url: `https://auth.example.test/${connectorName}`,
  });
}

function completed(brokerSequence: number, workflowExecId = EXECUTION_ID) {
  return event(brokerSequence, "WORKFLOW_EXECUTION_COMPLETED", {
    task_id: "task",
    result: { type: "json", value: "done" },
  }, workflowExecId);
}

function failed(brokerSequence: number, workflowExecId: string) {
  return event(brokerSequence, "WORKFLOW_EXECUTION_FAILED", {
    task_id: "task",
    failure: { message: "boom" },
  }, workflowExecId);
}

const frame = (data: unknown) =>
  `event: workflow.event\ndata: ${JSON.stringify(data)}\n\n`;
const ERROR_FRAME =
  'event: error\ndata: {"error": "boom", "reason": "read_error"}\n\n';

/** An SSE response sending `frames`, then failing with `error` if given. */
function sse(frames: string[], error?: Error): Response {
  let sent = false;
  const body = new ReadableStream<Uint8Array>({
    // Errors on the read after the frames: erroring right away would discard
    // the frames still queued.
    pull(controller) {
      if (sent) {
        if (error) controller.error(error);
        else controller.close();
        return;
      }
      sent = true;
      for (const f of frames) controller.enqueue(encoder.encode(f));
    },
  });
  return new Response(body, {
    headers: { "content-type": "text/event-stream" },
  });
}

/**
 * A client answering the execute call, each event stream request with the
 * next entry of `streams`, and each status check with the next entry of
 * `statuses`.
 */
function clientWith(options: {
  streams: Array<() => Response>;
  statuses?: Array<ReturnType<typeof execution>>;
}) {
  const statuses = options.statuses ?? [execution("COMPLETED")];
  const requests: Request[] = [];
  const client = new Mistral({
    apiKey: "test-key",
    serverURL: "http://localhost",
    httpClient: new HTTPClient({
      async fetcher(input) {
        const request = input as Request;
        requests.push(request.clone());
        const path = new URL(request.url).pathname;
        if (path === EXECUTE_PATH) {
          return Response.json(execution("RUNNING"));
        }
        if (path === STREAM_PATH) {
          const next = options.streams.shift();
          if (next === undefined) throw new Error("unexpected stream request");
          return next();
        }
        if (path === EXECUTION_PATH) {
          const next = statuses.shift();
          if (next === undefined) throw new Error("unexpected status check");
          return Response.json(next);
        }
        throw new Error(`unexpected request to ${path}`);
      },
    }),
  });
  const requestsTo = (path: string) =>
    requests.filter((r) => new URL(r.url).pathname === path);
  return { client, requestsTo };
}

afterEach(() => {
  vi.useRealTimers();
  vi.restoreAllMocks();
});

describe("executeWithConnectorAuth", () => {
  it("invokes onAuthRequired for each connector auth request", async () => {
    const { client, requestsTo } = clientWith({
      streams: [() =>
        sse([
          frame(authRequired(0, "gmail")),
          frame(customTaskStarted(1, "other_task", { connector_name: "x" })),
          frame(customTaskStarted(2, "connector_auth", ["not", "an", "object"])),
          frame(authRequired(3, "notion")),
          frame(completed(4)),
          frame(authRequired(5, "slack")),
        ])
      ],
    });
    const states: ConnectorAuthTaskState[] = [];

    const result = await executeWithConnectorAuth(client, {
      workflowIdentifier: "my-workflow",
      input: { query: "summarize my emails" },
      connectors: [{ connectorName: "gmail", credentialsName: "work-account" }],
      onAuthRequired: async (state) => {
        states.push(state);
      },
    });

    expect(result.status).toBe("COMPLETED");
    expect(result.result).toBe("done");
    expect(states).toEqual([
      {
        connectorName: "gmail",
        connectorId: "gmail-id",
        credentialsName: "work-account",
        authUrl: "https://auth.example.test/gmail",
      },
      expect.objectContaining({ connectorName: "notion" }),
    ]);

    expect(await requestsTo(EXECUTE_PATH)[0]?.json()).toMatchObject({
      input: { query: "summarize my emails" },
      extensions: {
        mistralai: {
          connectors: {
            bindings: [
              { connector_name: "gmail", credentials_name: "work-account" },
            ],
          },
        },
      },
    });
    const stream = new URL(requestsTo(STREAM_PATH)[0]!.url).searchParams;
    expect(stream.get("root_workflow_exec_id")).toBe(EXECUTION_ID);
    expect(stream.get("workflow_exec_id")).toBe("*");
    expect(stream.get("parent_workflow_exec_id")).toBe("*");
    expect(stream.get("start_seq")).toBe("0");
    expect(requestsTo(EXECUTION_PATH)).toHaveLength(1);
  });

  it("keeps streaming when child workflows end", async () => {
    const { client, requestsTo } = clientWith({
      streams: [() =>
        sse([
          frame(completed(0, "child-1")),
          frame(failed(1, "child-2")),
          frame(authRequired(2, "gmail")),
          frame(completed(3)),
        ])
      ],
    });
    const onAuthRequired = vi.fn();

    await executeWithConnectorAuth(client, {
      workflowIdentifier: "my-workflow",
      onAuthRequired,
    });

    expect(onAuthRequired).toHaveBeenCalledWith(
      expect.objectContaining({ connectorName: "gmail" }),
    );
    expect(requestsTo(STREAM_PATH)).toHaveLength(1);
  });

  it("doesn't bound the event stream with the SDK timeout", async () => {
    const timeout = vi.spyOn(AbortSignal, "timeout");
    const { client, requestsTo } = clientWith({
      streams: [() => sse([frame(completed(0))])],
    });

    await executeWithConnectorAuth(client, { workflowIdentifier: "my-workflow" });

    // The execute call and the status check get the default timeout; the
    // stream, which must outlive it while the user authenticates, doesn't.
    expect(requestsTo(STREAM_PATH)).toHaveLength(1);
    expect(timeout.mock.calls).toEqual([[300_000], [300_000]]);
  });

  it("sends no extensions without connectors", async () => {
    const { client, requestsTo } = clientWith({
      streams: [() => sse([frame(completed(0))])],
    });

    await executeWithConnectorAuth(client, { workflowIdentifier: "my-workflow" });

    const body = await requestsTo(EXECUTE_PATH)[0]?.json();
    expect(body).not.toHaveProperty("extensions");
  });

  it.each([
    ["a stream error event", () => sse([frame(authRequired(4, "gmail")), ERROR_FRAME])],
    [
      "a dropped connection",
      () => sse([frame(authRequired(4, "gmail"))], new TypeError("terminated")),
    ],
  ])(
    "reconnects after %s, resuming after the last event",
    async (_, droppedStream) => {
      vi.useFakeTimers({ toFake: ["setTimeout"] });
      const { client, requestsTo } = clientWith({
        streams: [droppedStream, () => sse([frame(completed(5))])],
      });
      const onAuthRequired = vi.fn();

      const execution = executeWithConnectorAuth(client, {
        workflowIdentifier: "my-workflow",
        onAuthRequired,
      });
      // The first reconnect backs off for 1 second.
      await vi.advanceTimersByTimeAsync(999);
      expect(requestsTo(STREAM_PATH)).toHaveLength(1);
      await vi.advanceTimersByTimeAsync(1);
      await execution;

      expect(onAuthRequired).toHaveBeenCalledTimes(1);
      const streams = requestsTo(STREAM_PATH);
      expect(streams).toHaveLength(2);
      expect(new URL(streams[1]!.url).searchParams.get("start_seq")).toBe("5");
    },
  );

  it("reconnects at most 10 times, then polls for the result", async () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
    const { client, requestsTo } = clientWith({
      streams: Array.from({ length: 10 }, () => () => sse([])),
      statuses: [execution("RUNNING"), execution("COMPLETED")],
    });

    const result = await executeWithConnectorAuth(client, {
      workflowIdentifier: "my-workflow",
      pollingInterval: 0.001,
    });

    expect(result.status).toBe("COMPLETED");
    expect(requestsTo(STREAM_PATH)).toHaveLength(10);
    expect(requestsTo(EXECUTION_PATH)).toHaveLength(2);
    expect(warn).toHaveBeenCalledWith(
      `Exhausted 10 reconnect attempts for event stream (execution_id=${EXECUTION_ID})`,
    );
  });

  it("propagates errors thrown by onAuthRequired", async () => {
    const { client, requestsTo } = clientWith({
      streams: [() => sse([frame(authRequired(0, "gmail")), frame(completed(1))])],
    });
    const error = new TypeError("bug in the callback");

    await expect(executeWithConnectorAuth(client, {
      workflowIdentifier: "my-workflow",
      onAuthRequired: () => {
        throw error;
      },
    })).rejects.toBe(error);

    expect(requestsTo(STREAM_PATH)).toHaveLength(1);
    expect(requestsTo(EXECUTION_PATH)).toHaveLength(0);
  });
});
