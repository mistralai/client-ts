import { Buffer } from "node:buffer";
import WebSocket from "ws";
import { SDK_METADATA } from "../../lib/config.js";
import { ClientSDK } from "../../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../../lib/security.js";
import { bearerHeader, readServiceAccountToken } from "../../hooks/service_account_auth.js";
import {
  RealtimeSpeechError$inboundSchema,
  type RealtimeSpeechError,
} from "../../models/components/realtimespeecherror.js";
import type { RealtimeSpeechSession } from "../../models/components/realtimespeechsession.js";
import {
  RealtimeSpeechSessionCreated$inboundSchema,
  type RealtimeSpeechSessionCreated,
} from "../../models/components/realtimespeechsessioncreated.js";
import {
  RealtimeSpeechSessionUpdated$inboundSchema,
  type RealtimeSpeechSessionUpdated,
} from "../../models/components/realtimespeechsessionupdated.js";
import {
  RealtimeSpeechSessionUpdatePayload$outboundSchema,
} from "../../models/components/realtimespeechsessionupdatepayload.js";
import type { RealtimeSpeechStreamingMode } from "../../models/components/realtimespeechstreamingmode.js";
import type { SpeechOutputFormat } from "../../models/components/speechoutputformat.js";
import {
  SpeechStreamAudioDelta$inboundSchema,
  type SpeechStreamAudioDelta,
} from "../../models/components/speechstreamaudiodelta.js";
import {
  SpeechStreamDone$inboundSchema,
  type SpeechStreamDone,
} from "../../models/components/speechstreamdone.js";
import type { UnknownRealtimeEvent } from "./connection.js";
import { RealtimeSpeechException, RealtimeSpeechWSError } from "./errors.js";

const WS_OPEN = 1;
const WS_CLOSING = 2;
const WS_CLOSED = 3;
const OK_CLOSE_CODES = new Set([1000, 1001, 1005]);

export type KnownRealtimeSpeechEvent =
  | RealtimeSpeechSessionCreated
  | RealtimeSpeechSessionUpdated
  | RealtimeSpeechError
  | SpeechStreamAudioDelta
  | SpeechStreamDone;

export type RealtimeSpeechEvent = KnownRealtimeSpeechEvent | UnknownRealtimeEvent;

type QueueItem =
  | { kind: "message"; data: unknown }
  | { kind: "close"; code?: number | undefined; reason?: string | undefined }
  | { kind: "error"; error: Error };

export type RealtimeSpeechSessionOptions = {
  voiceId?: string | undefined;
  refAudio?: string | undefined;
  responseFormat?: SpeechOutputFormat | undefined;
  streamingMode?: RealtimeSpeechStreamingMode | undefined;
  expressiveness?: number | undefined;
};

export type RealtimeSpeechConnectOptions = Readonly<
  RealtimeSpeechSessionOptions & {
    serverUrl?: string | undefined;
    timeoutMs?: number | undefined;
    httpHeaders?: Record<string, string> | undefined;
  }
>;

const EVENT_SCHEMAS: Record<
  string,
  {
    safeParse: (
      value: unknown,
    ) => { success: true; data: KnownRealtimeSpeechEvent } | { success: false; error: Error };
  }
> = {
  "session.created": RealtimeSpeechSessionCreated$inboundSchema,
  "session.updated": RealtimeSpeechSessionUpdated$inboundSchema,
  "error": RealtimeSpeechError$inboundSchema,
  "speech.audio.delta": SpeechStreamAudioDelta$inboundSchema,
  "speech.audio.done": SpeechStreamDone$inboundSchema,
};

/** @internal */
export function isUnknownRealtimeSpeechEvent(
  event: RealtimeSpeechEvent,
): event is UnknownRealtimeEvent {
  return "raw" in event;
}

/** @internal */
export function parseRealtimeSpeechEvent(payload: unknown): RealtimeSpeechEvent {
  if (typeof payload !== "object" || payload === null || Array.isArray(payload)) {
    return unknownEvent("unknown", payload, new Error("Expected a JSON object."));
  }

  const msgType = (payload as Record<string, unknown>)["type"];
  if (typeof msgType !== "string") {
    return unknownEvent("unknown", payload, new Error("Missing `type`."));
  }

  const schema = Object.hasOwn(EVENT_SCHEMAS, msgType) ? EVENT_SCHEMAS[msgType] : undefined;
  if (!schema) {
    return unknownEvent(msgType, payload);
  }

  const result = schema.safeParse(payload);
  if (result.success) {
    return result.data;
  }
  return unknownEvent(
    msgType,
    payload,
    new Error(`Invalid websocket message payload for ${msgType}.`, { cause: result.error }),
  );
}

export function audioBytes(event: SpeechStreamAudioDelta): Uint8Array {
  return new Uint8Array(Buffer.from(event.audioData, "base64"));
}

export class RealtimeSpeechConnection implements AsyncIterable<RealtimeSpeechEvent> {
  private readonly websocket: WebSocket;
  private closed = false;
  private closedByClient = false;
  private currentSession: RealtimeSpeechSession;
  private initialEvents: RealtimeSpeechEvent[];
  private readonly queue: QueueItem[] = [];
  private resolver: ((item: QueueItem) => void) | null = null;
  private iterating = false;

  constructor(
    websocket: WebSocket,
    session: RealtimeSpeechSession,
    initialEvents: RealtimeSpeechEvent[] = [],
  ) {
    this.websocket = websocket;
    this.currentSession = session;
    this.initialEvents = [...initialEvents];
    websocket.addEventListener("message", this.handleMessage);
    websocket.addEventListener("close", this.handleClose);
    websocket.addEventListener("error", this.handleError);
  }

  get requestId(): string {
    return this.currentSession.requestId;
  }

  get session(): RealtimeSpeechSession {
    return this.currentSession;
  }

  get isClosed(): boolean {
    return (
      this.closed
      || this.websocket.readyState === WS_CLOSING
      || this.websocket.readyState === WS_CLOSED
    );
  }

  [Symbol.asyncIterator](): AsyncIterator<RealtimeSpeechEvent> {
    return this.events();
  }

  async *events(): AsyncGenerator<RealtimeSpeechEvent> {
    if (this.iterating) {
      throw new Error("Connection events are already being iterated");
    }
    this.iterating = true;
    try {
      yield* this.readEvents();
    } finally {
      this.iterating = false;
    }
  }

  private async *readEvents(): AsyncGenerator<RealtimeSpeechEvent> {
    const queued = this.initialEvents;
    this.initialEvents = [];
    for (const event of queued) {
      this.applySessionEvent(event);
      yield event;
    }

    try {
      while (true) {
        if (this.queue.length === 0 && this.websocket.readyState === WS_CLOSED) {
          break;
        }
        const item = this.queue.length > 0
          ? this.queue.shift()!
          : await new Promise<QueueItem>((resolve) => {
            this.resolver = resolve;
          });

        if (item.kind === "close") {
          // Unknown voices etc. are rejected with a close frame, not an error event.
          if (item.code !== undefined && !OK_CLOSE_CODES.has(item.code)) {
            throw new RealtimeSpeechException(
              item.reason || "Connection closed by the server",
              { code: item.code },
            );
          }
          break;
        }

        if (item.kind === "error") {
          yield unknownEvent("unknown", item.error, item.error);
          continue;
        }

        const event = parseRealtimeSpeechEventFromData(item.data);
        this.applySessionEvent(event);
        yield event;
      }
    } finally {
      this.resolver = null;
    }
  }

  async sendText(text: string): Promise<void> {
    if (this.isClosed) {
      throw new Error("Connection is closed");
    }
    await this.sendJson({ type: "input_text.append", text });
  }

  async flush(text?: string): Promise<void> {
    if (this.isClosed) {
      throw new Error("Connection is closed");
    }
    await this.sendJson(
      text === undefined ? { type: "input_text.flush" } : { type: "input_text.flush", text },
    );
  }

  async end(): Promise<void> {
    if (this.isClosed) {
      return;
    }
    await this.sendJson({ type: "input_text.end" });
  }

  async updateSession(options: RealtimeSpeechSessionOptions): Promise<void> {
    if (this.isClosed) {
      throw new Error("Connection is closed");
    }

    const fields = {
      voice: options.voiceId,
      refAudio: options.refAudio,
      responseFormat: options.responseFormat,
      streamingMode: options.streamingMode,
      expressiveness: options.expressiveness,
    };
    if (Object.values(fields).every((value) => value == null)) {
      throw new Error("At least one session field must be provided");
    }
    const session = RealtimeSpeechSessionUpdatePayload$outboundSchema.parse(fields);

    await this.sendJson({ type: "session.update", session });
  }

  async close(code: number = 1000, reason: string = ""): Promise<void> {
    if (!this.closed) {
      this.closed = true;
      this.closedByClient = this.websocket.readyState === WS_OPEN;
    }

    if (this.websocket.readyState === WS_CLOSED) {
      return;
    }

    await new Promise<void>((resolve) => {
      const finalize = () => {
        this.websocket.removeEventListener("close", finalize);
        resolve();
      };
      this.websocket.addEventListener("close", finalize);
      if (this.websocket.readyState !== WS_CLOSING) {
        this.websocket.close(code, reason);
      }
    });
  }

  private async sendJson(payload: unknown): Promise<void> {
    const message = JSON.stringify(payload);
    await new Promise<void>((resolve, reject) => {
      this.websocket.send(message, (err: Error | undefined) => {
        if (err) {
          reject(err);
          return;
        }
        resolve();
      });
    });
  }

  private readonly handleMessage = (event: WebSocket.MessageEvent): void => {
    this.push({ kind: "message", data: event.data });
  };

  private readonly handleClose = (event: WebSocket.CloseEvent): void => {
    this.closed = true;
    this.websocket.removeEventListener("message", this.handleMessage);
    this.websocket.removeEventListener("close", this.handleClose);
    this.websocket.removeEventListener("error", this.handleError);
    this.push(
      this.closedByClient
        ? { kind: "close" }
        : { kind: "close", code: event.code, reason: event.reason },
    );
  };

  private readonly handleError = (event: unknown): void => {
    this.push({ kind: "error", error: normalizeWsError(event) });
  };

  private push(item: QueueItem): void {
    if (this.resolver) {
      const resolve = this.resolver;
      this.resolver = null;
      resolve(item);
      return;
    }
    this.queue.push(item);
  }

  private applySessionEvent(event: RealtimeSpeechEvent): void {
    if (!isUnknownRealtimeSpeechEvent(event) && "session" in event) {
      this.currentSession = event.session;
    }
  }
}

export class RealtimeSpeech extends ClientSDK {
  async connect(
    model: string,
    options: RealtimeSpeechConnectOptions = {},
  ): Promise<RealtimeSpeechConnection> {
    const securityInput = await extractSecurity(this._options.apiKey);
    const resolvedSecurity = resolveGlobalSecurity(
      securityInput == null ? {} : { apiKey: securityInput },
    );

    const headers: Record<string, string> = {};

    headers["User-Agent"] = this._options.userAgent ?? SDK_METADATA.userAgent;

    if (resolvedSecurity?.headers) {
      Object.assign(headers, resolvedSecurity.headers);
    }

    // The handshake never runs the SDK's before-request hooks, so apply service-account auth here.
    const callerAuthorization = Object.keys(options.httpHeaders ?? {}).some(
      (name) => name.toLowerCase() === "authorization",
    );
    if (this._options.apiKey == null && !callerAuthorization) {
      const token = await readServiceAccountToken();
      if (token !== null) {
        headers["Authorization"] = bearerHeader(token);
      }
    }

    if (options.httpHeaders) {
      Object.assign(headers, options.httpHeaders);
    }

    const url = this.getWsUrl(model, {
      serverUrl: options.serverUrl,
      queryParams: resolvedSecurity?.queryParams ?? {},
    });

    let websocket: WebSocket | undefined;
    try {
      websocket = new WebSocket(url, { headers });
      const { session, initialEvents } = await recvSession(
        websocket,
        options.timeoutMs ?? this._options.timeoutMs,
      );
      const connection = new RealtimeSpeechConnection(websocket, session, initialEvents);

      const sessionOptions: RealtimeSpeechSessionOptions = {
        voiceId: options.voiceId,
        refAudio: options.refAudio,
        responseFormat: options.responseFormat,
        streamingMode: options.streamingMode,
        expressiveness: options.expressiveness,
      };
      if (Object.values(sessionOptions).some((value) => value != null)) {
        await connection.updateSession(sessionOptions);
      }

      return connection;
    } catch (err) {
      if (err instanceof RealtimeSpeechException) {
        throw err;
      }

      if (websocket) {
        closeQuietly(websocket);
      }

      throw new RealtimeSpeechException(
        `Failed to connect to speech service: ${String(err)}`,
        { cause: err },
      );
    }
  }

  async *speakStream(
    textStream: AsyncIterable<string>,
    model: string,
    options: RealtimeSpeechConnectOptions = {},
  ): AsyncIterable<RealtimeSpeechEvent> {
    const connection = await this.connect(model, options);

    let stopRequested = false;
    let sendError: unknown;
    const textIterator = textStream[Symbol.asyncIterator]();
    void (async () => {
      try {
        while (true) {
          const next = await textIterator.next();
          if (next.done || stopRequested || connection.isClosed) {
            break;
          }
          await connection.sendText(next.value);
        }
        if (!stopRequested) {
          await connection.end();
        }
      } catch (err) {
        if (!stopRequested && !connection.isClosed) {
          sendError = err;
        }
        await connection.close();
      }
    })();

    try {
      for await (const event of connection) {
        yield event;

        if (event.type === "speech.audio.done" || event.type === "error") {
          break;
        }
      }
    } finally {
      stopRequested = true;
      await connection.close();
      void textIterator.return?.()?.catch(() => undefined);
    }

    if (sendError !== undefined) {
      throw sendError;
    }
  }

  private getWsUrl(
    model: string,
    options: { serverUrl?: string | undefined; queryParams: Record<string, string> },
  ): string {
    const baseUrl = options.serverUrl ?? this._baseURL?.toString();
    if (!baseUrl) {
      throw new RealtimeSpeechException("No server URL configured.");
    }

    const base = normalizeBaseUrl(baseUrl);
    const wsUrl = new URL("v1/audio/speech/realtime", base);

    const params = new URLSearchParams(base.search);
    params.set("model", model);
    for (const [key, value] of Object.entries(options.queryParams)) {
      if (value) {
        params.set(key, value);
      }
    }
    wsUrl.search = params.toString();

    return wsUrl.toString();
  }
}

async function recvSession(
  websocket: WebSocket,
  timeoutMs?: number,
): Promise<{ session: RealtimeSpeechSession; initialEvents: RealtimeSpeechEvent[] }> {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;
  const initialEvents: RealtimeSpeechEvent[] = [];

  return new Promise((resolve, reject) => {
    const cleanup = () => {
      websocket.removeEventListener("message", handleMessage);
      websocket.removeEventListener("close", handleClose);
      websocket.removeEventListener("error", handleError);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };

    const fail = (error: Error) => {
      cleanup();
      closeQuietly(websocket);
      reject(error);
    };

    const handleMessage = (event: WebSocket.MessageEvent) => {
      const parsed = parseRealtimeSpeechEventFromData(event.data);
      initialEvents.push(parsed);

      if (parsed.type === "error") {
        if (isUnknownRealtimeSpeechEvent(parsed)) {
          fail(new RealtimeSpeechWSError(
            parsed.error?.message ?? "Realtime speech error during handshake.",
            { rawPayload: parsed.raw, cause: parsed.error },
          ));
          return;
        }

        const payload = parsed as RealtimeSpeechError;
        const errorMessage = typeof payload.error.message === "string"
          ? payload.error.message
          : JSON.stringify(payload.error.message);
        fail(new RealtimeSpeechWSError(errorMessage, { payload, code: payload.error.code }));
        return;
      }

      if (
        !isUnknownRealtimeSpeechEvent(parsed)
        && parsed.type === "session.created"
        && "session" in parsed
      ) {
        cleanup();
        resolve({ session: parsed.session, initialEvents });
      }
    };

    const handleClose = (event: WebSocket.CloseEvent) => {
      fail(new RealtimeSpeechException(
        event.reason || "Unexpected websocket handshake close.",
        { code: event.code },
      ));
    };

    const handleError = (event: unknown) => {
      const cause = normalizeWsError(event);
      fail(new RealtimeSpeechException(
        `Failed to connect to speech service: ${cause.message}`,
        { cause },
      ));
    };

    websocket.addEventListener("message", handleMessage);
    websocket.addEventListener("close", handleClose);
    websocket.addEventListener("error", handleError);

    if (timeoutMs && timeoutMs > 0) {
      timeoutId = setTimeout(() => {
        fail(new RealtimeSpeechException("Timeout waiting for session creation."));
      }, timeoutMs);
    }
  });
}

function parseRealtimeSpeechEventFromData(data: unknown): RealtimeSpeechEvent {
  let text: string;
  try {
    text = messageDataToString(data);
  } catch (err) {
    return unknownEvent("unknown", data, toError(err, "Failed to read websocket message"));
  }
  let payload: unknown;
  try {
    payload = JSON.parse(text);
  } catch (err) {
    return unknownEvent("unknown", text, toError(err, "Failed to parse websocket JSON"));
  }
  return parseRealtimeSpeechEvent(payload);
}

function unknownEvent(type: string, raw: unknown, error?: Error): UnknownRealtimeEvent {
  return { type, raw, error };
}

function toError(err: unknown, message: string): Error {
  return err instanceof Error ? err : new Error(message, { cause: err });
}

function normalizeWsError(event: unknown): Error {
  if (event instanceof Error) {
    return event;
  }

  if (
    typeof event === "object"
    && event !== null
    && "error" in event
    && (event as { error?: unknown }).error instanceof Error
  ) {
    return (event as { error: Error }).error;
  }

  return new Error("WebSocket connection error");
}

function messageDataToString(data: unknown): string {
  if (typeof data === "string") {
    return data;
  }

  if (Buffer.isBuffer(data)) {
    return data.toString("utf8");
  }

  if (Array.isArray(data) && data.every((item) => Buffer.isBuffer(item))) {
    return Buffer.concat(data).toString("utf8");
  }

  if (data instanceof ArrayBuffer) {
    return Buffer.from(data).toString("utf8");
  }

  if (ArrayBuffer.isView(data)) {
    return Buffer.from(data.buffer, data.byteOffset, data.byteLength).toString("utf8");
  }

  throw new Error("Unsupported websocket message format");
}

function closeQuietly(websocket: WebSocket): void {
  websocket.addEventListener("error", () => undefined);
  try {
    websocket.close();
  } catch (closeError) {
    void closeError;
  }
}

function normalizeBaseUrl(baseUrl: string): URL {
  const url = new URL(baseUrl);
  url.pathname = url.pathname.replace(/\/+$/, "") + "/";
  return url;
}
