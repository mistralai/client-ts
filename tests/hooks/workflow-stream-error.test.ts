import { describe, expect, it } from "vitest";

import type { AfterSuccessContext } from "../../src/hooks/types.js";
import {
  StreamDisconnectedError,
  WorkflowStreamErrorHook,
} from "../../src/hooks/workflow_stream_error.js";

const STREAM_OPERATION_IDS = [
  "get_stream_events_v1_workflows_events_stream_get",
  "stream_v1_workflows_executions__execution_id__stream_get",
  "stream_deployment_logs",
  "stream_workflow_execution_logs",
];
const STREAM_OPERATION_ID = STREAM_OPERATION_IDS[0]!;
const NON_STREAM_OPERATION_ID = "stream_chat";

const GOOD_FRAME = 'event: workflow.event\ndata: {"attributes": {}}\n\n';
const ERROR_FRAME =
  'event: error\ndata: {"error": "boom", "reason": "read_error"}\n\n';

const encoder = new TextEncoder();

function hookCtx(operationID: string): AfterSuccessContext {
  return { operationID } as AfterSuccessContext;
}

function sseResponse(
  chunks: string[],
  contentType = "text/event-stream",
): Response {
  const body = new ReadableStream<Uint8Array>({
    start(controller) {
      for (const chunk of chunks) {
        controller.enqueue(encoder.encode(chunk));
      }
      controller.close();
    },
  });
  return new Response(body, {
    status: 200,
    headers: { "content-type": contentType },
  });
}

async function drain(response: Response): Promise<string> {
  const reader = response.body!.getReader();
  const decoder = new TextDecoder();
  let out = "";
  for (;;) {
    const { done, value } = await reader.read();
    if (done) return out;
    out += decoder.decode(value, { stream: true });
  }
}

function wrap(chunks: string[], operationID = STREAM_OPERATION_ID): Response {
  const hook = new WorkflowStreamErrorHook();
  return hook.afterSuccess(hookCtx(operationID), sseResponse(chunks)) as Response;
}

async function expectDisconnect(
  response: Response,
): Promise<StreamDisconnectedError> {
  try {
    await drain(response);
  } catch (err) {
    expect(err).toBeInstanceOf(StreamDisconnectedError);
    return err as StreamDisconnectedError;
  }
  throw new Error("expected StreamDisconnectedError, stream completed");
}

describe("WorkflowStreamErrorHook", () => {
  it("throws on an error frame after forwarding prior events", async () => {
    const response = wrap([GOOD_FRAME, ERROR_FRAME]);
    const reader = response.body!.getReader();
    const decoder = new TextDecoder();

    const first = await reader.read();
    expect(decoder.decode(first.value)).toContain("workflow.event");

    await expect(reader.read()).rejects.toThrow(StreamDisconnectedError);
  });

  it("forwards a prior event delivered in the same chunk as the error", async () => {
    const response = wrap([GOOD_FRAME + ERROR_FRAME]);
    const reader = response.body!.getReader();
    const decoder = new TextDecoder();

    const first = await reader.read();
    expect(decoder.decode(first.value)).toBe(GOOD_FRAME);

    await expect(reader.read()).rejects.toThrow(StreamDisconnectedError);
  });

  it("detects an error frame split across chunks", async () => {
    const err = await expectDisconnect(wrap([
      "event: er",
      'ror\ndata: {"error": "x", "reason": "internal_error"}\n\n',
    ]));
    expect(err.reason).toBe("internal_error");
    expect(err.error).toBe("x");
  });

  it("throws on an error frame with no trailing boundary", async () => {
    const err = await expectDisconnect(wrap([
      'event: error\ndata: {"error": "boom", "reason": "read_error"}',
    ]));
    expect(err.reason).toBe("read_error");
    expect(err.error).toBe("boom");
  });

  it("joins an error payload split across data lines", async () => {
    const err = await expectDisconnect(wrap([
      "event: error\r\n"
      + 'data: {"error": "connection\r\n'
      + 'data: lost", "reason": "read_error"}\r\n\r\n',
    ]));
    expect(err.reason).toBe("read_error");
    expect(err.error).toBe("connection\nlost");
  });

  it("defaults the reason when missing or invalid", async () => {
    const missing = await expectDisconnect(wrap([
      'event: error\ndata: {"error": "no reason given"}\n\n',
    ]));
    expect(missing.reason).toBe("stream_error");
    expect(missing.error).toBe("no reason given");

    const invalid = await expectDisconnect(wrap([
      'event: error\ndata: {"error": "bad", "reason": "nonsense"}\n\n',
    ]));
    expect(invalid.reason).toBe("stream_error");
  });

  it("falls back to the raw payload when it is not JSON", async () => {
    const err = await expectDisconnect(wrap([
      "event: error\ndata: not json at all\n\n",
    ]));
    expect(err.reason).toBe("stream_error");
    expect(err.error).toBe("not json at all");
  });

  it.each(STREAM_OPERATION_IDS)("throws for %s", async (operationID) => {
    const err = await expectDisconnect(wrap([ERROR_FRAME], operationID));
    expect(err.reason).toBe("read_error");
    expect(err.error).toBe("boom");
  });

  it("passes a normal stream through byte-for-byte", async () => {
    const body = await drain(wrap([GOOD_FRAME, GOOD_FRAME]));
    expect(body).toBe(GOOD_FRAME + GOOD_FRAME);
  });

  it("returns the response untouched for non-stream operations", () => {
    const hook = new WorkflowStreamErrorHook();
    const response = sseResponse([ERROR_FRAME]);
    expect(hook.afterSuccess(hookCtx(NON_STREAM_OPERATION_ID), response)).toBe(
      response,
    );
  });

  it("returns the response untouched for non-SSE content types", () => {
    const hook = new WorkflowStreamErrorHook();
    const response = sseResponse([ERROR_FRAME], "application/json");
    expect(hook.afterSuccess(hookCtx(STREAM_OPERATION_ID), response)).toBe(
      response,
    );
  });
});
