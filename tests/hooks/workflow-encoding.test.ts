import { beforeEach, describe, expect, it, vi } from "vitest";

import {
  configureWorkflowEncoding,
  encryptedStrField,
  generateTwoPartId,
  PayloadEncoder,
  WorkflowEncodingConfig,
  WorkflowPayloadEncryptionError,
} from "../../src/extra/workflows/index.js";
import type { AfterSuccessContext } from "../../src/hooks/types.js";
import { WorkflowEncodingHook } from "../../src/hooks/workflow_encoding.js";
import { HTTPClient, Mistral } from "../../src/index.js";
import { InMemoryBlobStorage } from "../extra/in-memory-blob-storage.js";

const storage = vi.hoisted(() => ({ current: undefined as unknown }));

vi.mock("../../src/extra/workflows/encoding/storage/s3.js", () => ({
  S3BlobStorage: { open: async () => storage.current },
}));

const KEY = "11".repeat(32);
const FULL: WorkflowEncodingConfig = {
  payloadEncryption: { mode: "full", mainKey: KEY },
};
const OFFLOADING: WorkflowEncodingConfig = {
  payloadOffloading: {
    minSizeBytes: 1,
    storageConfig: { storageProvider: "s3", bucketName: "bucket" },
  },
};
const NAMESPACE = "test-namespace";
const WHOAMI_PATH = "/v1/workflows/workers/whoami";

type Handler = (request: Request) => Response | Promise<Response>;

/**
 * A client whose requests go to `handler`, except for the namespace lookup
 * done by `configureWorkflowEncoding`, which is answered here and counted in
 * `whoamiCalls` rather than recorded in `requests`.
 */
function clientWith(
  handler: Handler,
): { client: Mistral; requests: Request[]; whoamiCalls: () => number } {
  const requests: Request[] = [];
  let whoamiCalls = 0;
  const client = new Mistral({
    apiKey: "test-key",
    serverURL: "http://localhost",
    httpClient: new HTTPClient({
      async fetcher(input) {
        const request = input as Request;
        if (new URL(request.url).pathname === WHOAMI_PATH) {
          whoamiCalls++;
          return jsonResponse({ scheduler_url: "scheduler", namespace: NAMESPACE });
        }
        requests.push(request.clone());
        return handler(request);
      },
    }),
  });
  return { client, requests, whoamiCalls: () => whoamiCalls };
}

let blobStorage: InMemoryBlobStorage;

beforeEach(() => {
  blobStorage = new InMemoryBlobStorage();
  storage.current = blobStorage;
});

function jsonResponse(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });
}

function executionResponse(result: unknown): Response {
  return jsonResponse({
    workflow_name: "my-workflow",
    execution_id: "exec-1",
    root_execution_id: "exec-1",
    status: "COMPLETED",
    start_time: "2026-01-01T00:00:00Z",
    end_time: null,
    result,
  });
}

const STREAM_CONTEXT = {
  operationID: "get_stream_events_v1_workflows_events_stream_get",
} as AfterSuccessContext;

function sseResponse(body: string | ReadableStream<Uint8Array>): Response {
  return new Response(body, { headers: { "content-type": "text/event-stream" } });
}

/** An SSE frame whose event carries `payload` encrypted with `encoder`. */
async function encryptedEventFrame(
  encoder: PayloadEncoder,
  payload: unknown,
): Promise<string> {
  const { data } = await encoder.encodePayloadContent(JSON.stringify(payload));
  const event = {
    stream: "s",
    timestamp: 0,
    data: {
      event_type: "CUSTOM_TASK_IN_PROGRESS",
      attributes: {
        payload: {
          type: "json",
          value: Buffer.from(data).toString("base64"),
          encoding_options: ["encrypted"],
        },
      },
    },
  };
  return `event: workflow.event\ndata: ${JSON.stringify(event)}\n\n`;
}

const FAST_RETRIES = {
  retries: {
    strategy: "backoff" as const,
    backoff: { initialInterval: 1, maxInterval: 1, exponent: 1, maxElapsedTime: 5000 },
    retryConnectionErrors: false,
  },
};

/**
 * Loads a second, independent copy of the hook module, as a bundler does when
 * the extra/workflows entry and the main SDK entry are separate module graphs.
 */
async function otherCopyOfHookModule() {
  vi.resetModules();
  const copy = await import("../../src/hooks/workflow_encoding.js");
  expect(copy.WorkflowEncodingHook).not.toBe(WorkflowEncodingHook);
  return copy;
}

describe("WorkflowEncodingHook", () => {
  it("encodes execute inputs and decodes results", async () => {
    const encoder = new PayloadEncoder(FULL);
    const encodedResult = await encoder.encodeNetworkInput({ answer: 42 });
    const { client, requests } = clientWith(() =>
      executionResponse(encodedResult)
    );
    await configureWorkflowEncoding(client, FULL);

    const response = await client.workflows.executeWorkflow({
      workflowIdentifier: "my-workflow",
      workflowExecutionRequest: { input: { secret: "s3cr3t" } },
    });

    const sent = await requests[0]!.json();
    expect(sent.input).toBeNull();
    expect(sent.encoded_input.encoding_options).toEqual(["encrypted"]);
    await expect(encoder.decodeNetworkResult(sent.encoded_input)).resolves
      .toEqual({ secret: "s3cr3t" });
    // Like Python, the execution ID is derived from the workflow identifier.
    const firstPart = (await generateTwoPartId("my-workflow")).slice(0, 32);
    expect(sent.execution_id.slice(0, 32)).toBe(firstPart);
    expect(response).toMatchObject({ result: { answer: 42 } });
  });

  it("keeps a caller-provided execution ID", async () => {
    const { client, requests } = clientWith(() => executionResponse(null));
    await configureWorkflowEncoding(client, FULL);

    await client.workflows.executeWorkflow({
      workflowIdentifier: "my-workflow",
      workflowExecutionRequest: { executionId: "mine", input: { a: 1 } },
    });

    expect((await requests[0]!.json()).execution_id).toBe("mine");
  });

  it("encodes signal inputs in place", async () => {
    const { client, requests } = clientWith(() =>
      jsonResponse({ message: "ok" }, 202)
    );
    const config: WorkflowEncodingConfig = {
      payloadEncryption: { mode: "partial", mainKey: KEY },
    };
    await configureWorkflowEncoding(client, config);

    await client.workflows.executions.signalWorkflowExecution({
      executionId: "exec-1",
      signalInvocationBody: {
        name: "approve",
        input: { by: "bob", token: encryptedStrField("t0k3n") },
      },
    });

    const sent = await requests[0]!.json();
    expect(sent.input.encoding_options).toEqual(["encrypted-partial"]);
    const plaintext = Buffer.from(sent.input.b64payload, "base64").toString();
    expect(plaintext).toContain("\"by\": \"bob\"");
    expect(plaintext).not.toContain("t0k3n");
  });

  it("encodes schedule inputs inside the schedule definition", async () => {
    const encoder = new PayloadEncoder(FULL);
    const { client, requests } = clientWith(() =>
      jsonResponse({ schedule_id: "sched-1" }, 201)
    );
    await configureWorkflowEncoding(client, FULL);

    await client.workflows.schedules.scheduleWorkflow({
      workflowIdentifier: "my-workflow",
      schedule: {
        input: { secret: "s3cr3t" },
        cronExpressions: ["0 * * * *"],
      },
    });

    const sent = await requests[0]!.json();
    expect(sent).not.toHaveProperty("input");
    expect(sent.schedule.cron_expressions).toEqual(["0 * * * *"]);
    expect(sent.schedule.input.encoding_options).toEqual(["encrypted"]);
    expect(JSON.stringify(sent)).not.toContain("s3cr3t");
    await expect(encoder.decodeNetworkResult(sent.schedule.input)).resolves
      .toEqual({ secret: "s3cr3t" });
  });

  it("encodes schedule inputs on update", async () => {
    const encoder = new PayloadEncoder(FULL);
    const { client, requests } = clientWith(() =>
      jsonResponse({ schedule_id: "sched-1" })
    );
    await configureWorkflowEncoding(client, FULL);

    await client.workflows.schedules.updateSchedule({
      scheduleId: "sched-1",
      workflowScheduleUpdateRequest: {
        schedule: { input: { secret: "s3cr3t" } },
      },
    });

    const sent = await requests[0]!.json();
    expect(sent.schedule.input.encoding_options).toEqual(["encrypted"]);
    expect(JSON.stringify(sent)).not.toContain("s3cr3t");
    await expect(encoder.decodeNetworkResult(sent.schedule.input)).resolves
      .toEqual({ secret: "s3cr3t" });
  });

  it("leaves schedule updates without an input unchanged", async () => {
    const { client, requests } = clientWith(() =>
      jsonResponse({ schedule_id: "sched-1" })
    );
    await configureWorkflowEncoding(client, FULL);

    await client.workflows.schedules.updateSchedule({
      scheduleId: "sched-1",
      workflowScheduleUpdateRequest: {
        schedule: { cronExpressions: ["0 * * * *"] },
      },
    });

    expect(await requests[0]!.json()).toEqual({
      schedule: { cron_expressions: ["0 * * * *"] },
    });
  });

  it("decodes event payloads in SSE streams", async () => {
    const encoder = new PayloadEncoder(FULL);
    const hook = new WorkflowEncodingHook();
    hook.configure(encoder, NAMESPACE);
    const frame = new TextEncoder().encode(
      await encryptedEventFrame(encoder, { progress: 0.5 }),
    );
    // Split mid-line to check that lines are reassembled across chunks.
    const body = new ReadableStream<Uint8Array>({
      start(controller) {
        controller.enqueue(frame.slice(0, 40));
        controller.enqueue(frame.slice(40));
        controller.close();
      },
    });

    const response = await hook.afterSuccess(STREAM_CONTEXT, sseResponse(body));

    const [eventLine, line, blank] = (await response.text()).split("\n");
    expect(eventLine).toBe("event: workflow.event");
    expect(blank).toBe("");
    const decoded = JSON.parse(line!.slice("data: ".length));
    expect(decoded.data.attributes.payload).toEqual({
      type: "json",
      value: { progress: 0.5 },
      encoding_options: [],
    });
  });

  it("fails the stream when an event payload can't be decrypted", async () => {
    const otherKey = new PayloadEncoder({
      payloadEncryption: { mode: "full", mainKey: "22".repeat(32) },
    });
    const hook = new WorkflowEncodingHook();
    hook.configure(new PayloadEncoder(FULL), NAMESPACE);

    const response = await hook.afterSuccess(
      STREAM_CONTEXT,
      sseResponse(await encryptedEventFrame(otherKey, { progress: 0.5 })),
    );

    await expect(response.text()).rejects.toThrow(WorkflowPayloadEncryptionError);
  });

  it("passes through data lines that aren't events", async () => {
    const hook = new WorkflowEncodingHook();
    hook.configure(new PayloadEncoder(FULL), NAMESPACE);
    const body = "data: not json\n\ndata: [1, 2]\n\ndata: {\"data\": 1}\n\n";

    const response = await hook.afterSuccess(STREAM_CONTEXT, sseResponse(body));

    await expect(response.text()).resolves.toBe(body);
  });

  it("keeps the generated execution ID when a request is retried", async () => {
    let attempts = 0;
    const { client, requests } = clientWith(() =>
      ++attempts === 1
        ? new Response("unavailable", { status: 503 })
        : executionResponse(null)
    );
    await configureWorkflowEncoding(client, FULL);

    await client.workflows.executeWorkflow({
      workflowIdentifier: "my-workflow",
      workflowExecutionRequest: { input: { a: 1 } },
    }, FAST_RETRIES);

    const bodies = await Promise.all(requests.map((r) => r.json()));
    expect(bodies).toHaveLength(2);
    expect(bodies[1].execution_id).toBe(bodies[0].execution_id);
  });

  it("generates a new execution ID for each call", async () => {
    const { client, requests } = clientWith(() => executionResponse(null));
    await configureWorkflowEncoding(client, FULL);
    const request = {
      workflowIdentifier: "my-workflow",
      workflowExecutionRequest: { input: { a: 1 } },
    };

    await client.workflows.executeWorkflow(request);
    await client.workflows.executeWorkflow(request);

    const [first, second] = await Promise.all(requests.map((r) => r.json()));
    expect(second.execution_id).not.toBe(first.execution_id);
  });

  it("returns NaN and Infinity in results as null", async () => {
    const encoder = new PayloadEncoder(FULL);
    // What pydantic_core.to_json writes for float("inf").
    const { data, encodingOptions } = await encoder.encodePayloadContent(
      "{\"score\":Infinity}",
    );
    const { client } = clientWith(() =>
      executionResponse({
        b64payload: Buffer.from(data).toString("base64"),
        encoding_options: encodingOptions,
      })
    );
    await configureWorkflowEncoding(client, FULL);

    // The SDK parses the rebuilt body with JSON.parse, which has no Infinity.
    const response = await client.workflows.executions.getWorkflowExecution({
      executionId: "exec-1",
    });

    expect(response.result).toEqual({ score: null });
  });

  it("refuses to configure an invalid mode", async () => {
    const { client, requests } = clientWith(() => executionResponse(null));
    const config = { payloadEncryption: { mode: "FULL", mainKey: KEY } } as never;

    await expect(
      configureWorkflowEncoding(client, config),
    ).rejects.toThrow(/payloadEncryption\.mode/);
    expect(requests).toEqual([]);
  });

  it("finds the hook when it comes from another copy of the SDK's modules", async () => {
    const { WorkflowEncodingHook: OtherCopy } = await otherCopyOfHookModule();
    const { client, requests } = clientWith(() => executionResponse(null));
    const hooks = client._options.hooks!;
    for (const registered of [hooks.beforeRequestHooks, hooks.afterSuccessHooks]) {
      const index = registered.findIndex((h) => h instanceof WorkflowEncodingHook);
      registered.splice(index, 1, new OtherCopy());
    }

    await configureWorkflowEncoding(client, FULL);
    await client.workflows.executeWorkflow({
      workflowIdentifier: "my-workflow",
      workflowExecutionRequest: { input: { a: 1 } },
    });

    const sent = await requests[0]!.json();
    expect(sent.encoded_input.encoding_options).toEqual(["encrypted"]);
  });

  it("raises the app's error class from another copy of the hook", async () => {
    const { WorkflowEncodingHook: OtherCopy } = await otherCopyOfHookModule();
    const otherKey = new PayloadEncoder({
      payloadEncryption: { mode: "full", mainKey: "22".repeat(32) },
    });
    const hook = new OtherCopy();
    hook.configure(new PayloadEncoder(FULL), NAMESPACE);

    const response = await hook.afterSuccess(
      STREAM_CONTEXT,
      sseResponse(await encryptedEventFrame(otherKey, { progress: 0.5 })),
    );

    await expect(response.text()).rejects.toThrow(WorkflowPayloadEncryptionError);
  });

  it("does nothing until encoding is configured", async () => {
    const { client, requests } = clientWith(() => executionResponse(null));

    await client.workflows.executeWorkflow({
      workflowIdentifier: "my-workflow",
      workflowExecutionRequest: { input: { a: 1 } },
    });

    const sent = await requests[0]!.json();
    expect(sent.input).toEqual({ a: 1 });
    expect(sent.encoded_input).toBeUndefined();
  });

  it("fetches the workflow namespace, like Python", async () => {
    const { client, requests, whoamiCalls } = clientWith(() =>
      executionResponse(null)
    );

    await configureWorkflowEncoding(client, FULL);

    expect(whoamiCalls()).toBe(1);
    expect(requests).toEqual([]);
  });

  it("uses the given namespace without calling the API", async () => {
    const { client, requests, whoamiCalls } = clientWith(() =>
      executionResponse(null)
    );

    await configureWorkflowEncoding(client, OFFLOADING, { namespace: "mine" });
    await client.workflows.executeWorkflow({
      workflowIdentifier: "my-workflow",
      workflowExecutionRequest: { executionId: "exec-1", input: { a: 1 } },
    });

    expect(whoamiCalls()).toBe(0);
    expect([...blobStorage.blobs.keys()][0]).toMatch(
      /^temporal-payload\/mine\/exec-1\/sha256:[0-9a-f]{64}$/,
    );
    expect(requests).toHaveLength(1);
  });

  it("fails to configure when the namespace can't be fetched", async () => {
    const client = new Mistral({
      apiKey: "test-key",
      serverURL: "http://localhost",
      httpClient: new HTTPClient({
        async fetcher() {
          return jsonResponse({ detail: "forbidden" }, 403);
        },
      }),
    });

    await expect(configureWorkflowEncoding(client, FULL)).rejects.toThrow();
  });

  it("offloads inputs under the namespace and the generated execution ID", async () => {
    const { client, requests } = clientWith(() => executionResponse(null));
    await configureWorkflowEncoding(client, OFFLOADING);

    await client.workflows.executeWorkflow({
      workflowIdentifier: "my-workflow",
      workflowExecutionRequest: { input: { secret: "s3cr3t" } },
    });

    const sent = await requests[0]!.json();
    expect(sent.encoded_input.encoding_options).toEqual(["offloaded"]);
    const { key } = JSON.parse(
      Buffer.from(sent.encoded_input.b64payload, "base64").toString(),
    );
    expect(key).toMatch(
      new RegExp(`^temporal-payload/${NAMESPACE}/${sent.execution_id}/sha256:`),
    );
    expect(Buffer.from(blobStorage.blobs.get(key)!).toString()).toBe(
      "{\"secret\":\"s3cr3t\"}",
    );
  });

  it("decodes results offloaded by the worker", async () => {
    const worker = new PayloadEncoder(OFFLOADING);
    const result = await worker.encodeNetworkInput({ answer: 42 }, {
      namespace: NAMESPACE,
      executionId: "exec-1",
    });
    const { client } = clientWith(() => executionResponse(result));
    await configureWorkflowEncoding(client, OFFLOADING);

    const response = await client.workflows.executions.getWorkflowExecution({
      executionId: "exec-1",
    });

    expect(response.result).toEqual({ answer: 42 });
  });
});
