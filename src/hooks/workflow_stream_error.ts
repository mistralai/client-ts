import { AfterSuccessContext, AfterSuccessHook, Awaitable } from "./types.js";

const STREAM_OPERATIONS_WITH_ERROR_EVENT = new Set([
  "get_stream_events_v1_workflows_events_stream_get",
  "stream_v1_workflows_executions__execution_id__stream_get",
  "stream_deployment_logs",
  "stream_workflow_execution_logs",
]);

const ERROR_EVENT = "error";

export type StreamDisconnectReason =
  | "read_error"
  | "stream_error"
  | "internal_error";

const VALID_REASONS: StreamDisconnectReason[] = [
  "read_error",
  "stream_error",
  "internal_error",
];
const DEFAULT_REASON: StreamDisconnectReason = "stream_error";

export class StreamDisconnectedError extends Error {
  readonly reason: StreamDisconnectReason;
  readonly error: string;

  constructor(options: { reason: StreamDisconnectReason; error: string }) {
    super("Workflow stream disconnected by server");
    this.name = "StreamDisconnectedError";
    this.reason = options.reason;
    this.error = options.error;
  }
}

const CR = 13;
const LF = 10;
const BOUNDARIES = [
  [CR, LF, CR, LF], // \r\n\r\n
  [CR, LF, CR], // \r\n\r
  [CR, LF, LF], // \r\n\n
  [CR, CR, LF], // \r\r\n
  [LF, CR, LF], // \n\r\n
  [CR, CR], // \r\r
  [LF, CR], // \n\r
  [LF, LF], // \n\n
];

function findBoundary(
  buf: Uint8Array,
): { index: number; length: number } | null {
  const len = buf.length;
  for (let i = 0; i < len; i++) {
    if (buf[i] !== CR && buf[i] !== LF) continue;
    for (const boundary of BOUNDARIES) {
      if (i + boundary.length > len) continue;
      let match = true;
      for (let j = 0; j < boundary.length; j++) {
        if (buf[i + j] !== boundary[j]) {
          match = false;
          break;
        }
      }
      if (match) return { index: i, length: boundary.length };
    }
  }
  return null;
}

function concatBuffer(a: Uint8Array, b: Uint8Array): Uint8Array {
  const c = new Uint8Array(a.length + b.length);
  c.set(a, 0);
  c.set(b, a.length);
  return c;
}

function parseErrorPayload(data: string): {
  error: string;
  reason: StreamDisconnectReason;
} {
  const raw = data.trim();
  let payload: Record<string, unknown> = {};
  // Second candidate: SSE joins multi-line `data:` fields with "\n", so a value
  // spanning several lines holds literal newlines that strict JSON rejects.
  // Unparseable payloads still terminate the stream; the raw text is surfaced.
  for (const candidate of [raw, raw.replace(/\r?\n/g, "\\n")]) {
    try {
      const parsed: unknown = JSON.parse(candidate);
      if (
        typeof parsed === "object" && parsed !== null && !Array.isArray(parsed)
      ) {
        payload = parsed as Record<string, unknown>;
        break;
      }
    } catch {
      continue;
    }
  }

  const error = "error" in payload ? String(payload["error"]) : raw;
  const reason = payload["reason"];
  return {
    error,
    reason: VALID_REASONS.includes(reason as StreamDisconnectReason)
      ? (reason as StreamDisconnectReason)
      : DEFAULT_REASON,
  };
}

function errorFromFrame(block: Uint8Array): StreamDisconnectedError | null {
  const text = new TextDecoder().decode(block);
  let eventName: string | undefined;
  const dataLines: string[] = [];

  for (const line of text.split(/\r\n|\r|\n/)) {
    if (!line || line.startsWith(":")) continue;
    const i = line.indexOf(":");
    let field = line;
    let value = "";
    if (i > 0) {
      field = line.slice(0, i);
      value = line[i + 1] === " " ? line.slice(i + 2) : line.slice(i + 1);
    }
    if (field === "event") eventName = value;
    else if (field === "data") dataLines.push(value);
  }

  if (eventName !== ERROR_EVENT) return null;

  return new StreamDisconnectedError(parseErrorPayload(dataLines.join("\n")));
}

// The error is recorded rather than thrown so the caller can flush the frames
// that preceded it first: `ReadableStreamDefaultController.error()` discards
// anything still queued.
class FrameScanner {
  private buffer: Uint8Array = new Uint8Array();
  error: StreamDisconnectedError | null = null;

  feed(chunk: Uint8Array): Uint8Array[] {
    if (this.error) return [];
    this.buffer = concatBuffer(this.buffer, chunk);
    const frames: Uint8Array[] = [];
    for (;;) {
      const match = findBoundary(this.buffer);
      if (!match) return frames;
      const block = this.buffer.slice(0, match.index);
      const frame = this.buffer.slice(0, match.index + match.length);
      this.buffer = this.buffer.slice(match.index + match.length);
      this.error = errorFromFrame(block);
      if (this.error) return frames;
      frames.push(frame);
    }
  }

  flush(): Uint8Array[] {
    if (this.error || !this.buffer.length) return [];
    const block = this.buffer;
    this.buffer = new Uint8Array();
    this.error = errorFromFrame(block);
    return this.error ? [] : [block];
  }
}

function createErrorDetectingResponse(response: Response): Response {
  const reader = response.body!.getReader();
  const scanner = new FrameScanner();

  const stream = new ReadableStream<Uint8Array>({
    async pull(controller) {
      const fail = async (err: unknown) => {
        controller.error(err);
        try {
          await reader.cancel(err);
        } catch {
          // Ignore cancellation errors from already-failed streams.
        }
      };

      if (scanner.error) return fail(scanner.error);

      try {
        // Keep reading until at least one complete frame is available: a chunk
        // that ends mid-frame produces nothing, and returning without
        // enqueueing would leave the consumer's read pending forever.
        for (;;) {
          const result = await reader.read();
          const frames = result.done
            ? scanner.flush()
            : scanner.feed(result.value);
          for (const frame of frames) {
            controller.enqueue(frame);
          }
          // Frames read alongside the error frame are delivered first; the
          // error surfaces on the next pull, once they have been consumed.
          if (frames.length) return;
          if (scanner.error) return fail(scanner.error);
          if (result.done) {
            controller.close();
            return;
          }
        }
      } catch (err) {
        await fail(err);
      }
    },
    async cancel(reason) {
      await reader.cancel(reason);
    },
  }, { highWaterMark: 0 });

  return new Response(stream, {
    status: response.status,
    statusText: response.statusText,
    headers: response.headers,
  });
}

export class WorkflowStreamErrorHook implements AfterSuccessHook {
  afterSuccess(
    hookCtx: AfterSuccessContext,
    response: Response,
  ): Awaitable<Response> {
    if (!STREAM_OPERATIONS_WITH_ERROR_EVENT.has(hookCtx.operationID)) {
      return response;
    }
    const contentType = response.headers.get("content-type") ?? "";
    if (!contentType.toLowerCase().includes("text/event-stream")) {
      return response;
    }
    if (!response.body || response.bodyUsed) {
      return response;
    }
    return createErrorDetectingResponse(response);
  }
}
