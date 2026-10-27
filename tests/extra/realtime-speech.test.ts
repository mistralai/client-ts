import type WebSocket from "ws";
import * as wsMock from "ws";
import { RealtimeSpeechSessionUpdatePayload$inboundSchema } from "../../src/models/components/realtimespeechsessionupdatepayload.js";
import { RealtimeTranscriptionSessionUpdatePayload$inboundSchema } from "../../src/models/components/realtimetranscriptionsessionupdatepayload.js";

vi.mock("ws", () => {
  class MockWebSocket {
    readyState = 1;
    url: string | undefined;
    options: unknown;
    sent: string[] = [];
    closeArgs: { code?: number; reason?: string } | null = null;
    failTextSendWith: Error | undefined;
    private listeners = new Map<string, Set<(event: any) => void>>();

    addEventListener(event: string, handler: (event: any) => void): void {
      if (!this.listeners.has(event)) {
        this.listeners.set(event, new Set());
      }
      this.listeners.get(event)?.add(handler);
    }

    removeEventListener(event: string, handler: (event: any) => void): void {
      this.listeners.get(event)?.delete(handler);
    }

    send(data: string, cb?: (err?: Error) => void): void {
      if (this.failTextSendWith && JSON.parse(data).type === "input_text.append") {
        cb?.(this.failTextSendWith);
        return;
      }
      this.sent.push(data);
      cb?.();
    }

    close(code?: number, reason?: string): void {
      if (this.readyState === 3) {
        return;
      }
      this.closeArgs = { code, reason };
      this.readyState = 3;
      this.emit("close", { code, reason });
    }

    serverClose(code: number, reason: string): void {
      this.readyState = 3;
      this.emit("close", { code, reason });
    }

    emit(event: string, data: any): void {
      for (const handler of [...(this.listeners.get(event) ?? [])]) {
        handler(data);
      }
    }

    emitMessage(payload: unknown): void {
      const data = typeof payload === "string" ? payload : JSON.stringify(payload);
      this.emit("message", { data });
    }
  }

  let lastSocket: MockWebSocket | undefined;

  class WebSocket extends MockWebSocket {
    constructor(url?: string, options?: unknown) {
      super();
      this.url = url;
      this.options = options;
      lastSocket = this;
    }
  }

  return {
    default: WebSocket,
    MockWebSocket,
    getLastSocket: () => lastSocket,
  };
});

type MockWebSocketInstance = {
  readyState: number;
  url: string | undefined;
  options: any;
  sent: string[];
  closeArgs: { code?: number; reason?: string } | null;
  failTextSendWith: Error | undefined;
  send(data: string, cb?: (err?: Error) => void): void;
  close(code?: number, reason?: string): void;
  serverClose(code: number, reason: string): void;
  emitMessage(payload: unknown): void;
};

type Realtime = typeof import("../../src/extra/realtime/index.js");
type Speech = typeof import("../../src/extra/realtime/speech.js");
let realtime: Realtime;
let speech: Speech;

beforeAll(async () => {
  realtime = await import("../../src/extra/realtime/index.js");
  speech = await import("../../src/extra/realtime/speech.js");
});

const MODEL = "voxtral-mini-tts-3";
const SESSION = {
  request_id: "ws-123",
  model: MODEL,
  voice: "voice_447",
  is_ref_audio: false,
  streaming_mode: "responsive",
  response_format: "wav",
  expressiveness: 2.0,
};
const SESSION_CREATED = { type: "session.created", session: SESSION };
const AUDIO_DELTA = { type: "speech.audio.delta", audio_data: "AAAAAA==" };
const AUDIO_DONE = {
  type: "speech.audio.done",
  usage: { prompt_tokens: 3, completion_tokens: 10, total_tokens: 13 },
};

function mockModule(): {
  MockWebSocket: new () => MockWebSocketInstance;
  getLastSocket: () => MockWebSocketInstance | undefined;
} {
  return wsMock as unknown as ReturnType<typeof mockModule>;
}

function sent(ws: MockWebSocketInstance): unknown[] {
  return ws.sent.map((message) => JSON.parse(message));
}

function newConnection(): {
  ws: MockWebSocketInstance;
  connection: InstanceType<Realtime["RealtimeSpeechConnection"]>;
} {
  const ws = new (mockModule().MockWebSocket)();
  const created = speech.parseRealtimeSpeechEvent(SESSION_CREATED);
  if (speech.isUnknownRealtimeSpeechEvent(created) || !("session" in created)) {
    throw new Error("bad fixture");
  }
  const connection = new realtime.RealtimeSpeechConnection(
    ws as unknown as WebSocket,
    created.session,
  );
  return { ws, connection };
}

function client() {
  return new realtime.RealtimeSpeech({ apiKey: "test", serverURL: "https://example.com" });
}

async function nextSocket(previous?: MockWebSocketInstance): Promise<MockWebSocketInstance> {
  for (let i = 0; i < 20; i += 1) {
    const ws = mockModule().getLastSocket();
    if (ws && ws !== previous) {
      await tick();
      return ws;
    }
    await tick();
  }
  throw new Error("WebSocket was not created");
}

function tick(): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, 0));
}

async function connectWith(
  options: Parameters<InstanceType<Realtime["RealtimeSpeech"]>["connect"]>[1] = {},
) {
  const previous = mockModule().getLastSocket();
  const connectPromise = client().connect(MODEL, options);
  const ws = await nextSocket(previous);
  ws.emitMessage(SESSION_CREATED);
  return { ws, connection: await connectPromise };
}

async function* textOf(...chunks: string[]): AsyncIterable<string> {
  for (const chunk of chunks) {
    yield chunk;
  }
}

describe("parseRealtimeSpeechEvent", () => {
  it.each([
    [SESSION_CREATED, "session.created"],
    [{ type: "session.updated", session: SESSION }, "session.updated"],
    [{ type: "error", error: { message: "bad", code: 400 } }, "error"],
    [AUDIO_DELTA, "speech.audio.delta"],
    [AUDIO_DONE, "speech.audio.done"],
  ])("parses %j into a typed event", (payload, type) => {
    const event = speech.parseRealtimeSpeechEvent(payload);
    expect(speech.isUnknownRealtimeSpeechEvent(event)).toBe(false);
    expect(event.type).toBe(type);
  });

  it.each([
    [{ type: "speech.surprise" }, "speech.surprise"],
    [{ type: "constructor" }, "constructor"],
    [{ type: "toString" }, "toString"],
    [{ type: "speech.audio.delta" }, "speech.audio.delta"],
    [["not", "an", "object"], "unknown"],
    [{ no: "type" }, "unknown"],
  ])("returns an unknown event for %j", (payload, type) => {
    const event = speech.parseRealtimeSpeechEvent(payload);
    expect(speech.isUnknownRealtimeSpeechEvent(event)).toBe(true);
    expect(event).toMatchObject({ type, raw: payload });
  });

  it("decodes audio deltas", () => {
    const event = speech.parseRealtimeSpeechEvent(AUDIO_DELTA);
    if (event.type !== "speech.audio.delta" || !("audioData" in event)) {
      throw new Error("expected an audio delta");
    }
    expect(realtime.audioBytes(event)).toEqual(new Uint8Array([0, 0, 0, 0]));
  });
});

describe("RealtimeSpeechConnection", () => {
  it("sends text, flush and end messages", async () => {
    const { ws, connection } = newConnection();

    await connection.sendText("Hello, ");
    await connection.flush();
    await connection.flush("last words.");
    await connection.end();

    expect(sent(ws)).toEqual([
      { type: "input_text.append", text: "Hello, " },
      { type: "input_text.flush" },
      { type: "input_text.flush", text: "last words." },
      { type: "input_text.end" },
    ]);
  });

  it("sends only the set session fields, in snake_case", async () => {
    const { ws, connection } = newConnection();

    await connection.updateSession({
      voiceId: "my-voice",
      responseFormat: "pcm",
      streamingMode: "long_form",
      expressiveness: 1.5,
    });

    expect(sent(ws)).toEqual([
      {
        type: "session.update",
        session: {
          voice: "my-voice",
          response_format: "pcm",
          streaming_mode: "long_form",
          expressiveness: 1.5,
        },
      },
    ]);
  });

  it("rejects an empty update", async () => {
    const { ws, connection } = newConnection();

    await expect(connection.updateSession({})).rejects.toThrow(
      "At least one session field must be provided",
    );
    expect(ws.sent).toEqual([]);
  });

  it("ends iteration quietly when the client closes with a custom code", async () => {
    const { connection } = newConnection();
    const iterator = connection[Symbol.asyncIterator]();

    const next = iterator.next();
    await connection.close(4000, "stop");

    await expect(next).resolves.toMatchObject({ done: true });
    await expect(connection[Symbol.asyncIterator]().next()).resolves.toMatchObject({ done: true });
  });

  it("rejects a second concurrent iterator", async () => {
    const { ws, connection } = newConnection();
    const first = connection.events();
    const pending = first.next();

    await expect(connection.events().next()).rejects.toThrow("already being iterated");

    ws.close();
    await pending;
  });

  it("keeps messages that arrive before iteration starts", async () => {
    const { ws, connection } = newConnection();
    ws.emitMessage({ type: "error", error: { message: "bad expressiveness", code: 3051 } });
    ws.serverClose(1000, "");

    const events = [];
    for await (const event of connection) {
      events.push(event);
    }
    expect(events.map((event) => event.type)).toEqual(["error"]);
  });

  it("tracks session.updated events", async () => {
    const { ws, connection } = newConnection();
    const iterator = connection[Symbol.asyncIterator]();

    const next = iterator.next();
    ws.emitMessage({ type: "session.updated", session: { ...SESSION, voice: "voice_478" } });
    expect((await next).value.type).toBe("session.updated");
    expect(connection.session.voice).toBe("voice_478");

    const done = iterator.next();
    ws.close();
    await done;
  });
});

describe("RealtimeSpeech.connect", () => {
  it("opens the realtime speech URL and sends one session.update", async () => {
    const { ws, connection } = await connectWith({ voiceId: "my-voice", responseFormat: "pcm" });

    expect(ws.url).toBe("https://example.com/v1/audio/speech/realtime?model=voxtral-mini-tts-3");
    expect(ws.options.headers["Authorization"]).toBe("Bearer test");
    expect(sent(ws)).toEqual([
      { type: "session.update", session: { voice: "my-voice", response_format: "pcm" } },
    ]);
    expect(connection.requestId).toBe("ws-123");
    await connection.close();
  });

  it.each<[string, Record<string, unknown>]>([
    ["only connection options", { timeoutMs: 5000, httpHeaders: { "x-test": "1" } }],
    ["unknown options", { timeoutMs: 5000, voice: "snake", ref_audio: "x" }],
  ])("sends no session.update with %s", async (_label, options) => {
    const { ws, connection } = await connectWith(options);
    expect(ws.sent).toEqual([]);
    await connection.close();
  });

  it("throws RealtimeSpeechWSError on a handshake error", async () => {
    const previous = mockModule().getLastSocket();
    const connectPromise = client().connect(MODEL);
    const ws = await nextSocket(previous);
    ws.emitMessage({ type: "error", error: { message: "bad request", code: 1500 } });

    const error = await connectPromise.catch((err: unknown) => err);
    expect(error).toBeInstanceOf(realtime.RealtimeSpeechWSError);
    expect(error).toMatchObject({ message: "bad request", code: 1500 });
    expect(ws.readyState).toBe(3);
  });
});

describe("RealtimeSpeech.speakStream", () => {
  async function run(
    text: AsyncIterable<string>,
    onSocket: (ws: MockWebSocketInstance) => void | Promise<void>,
    options: Parameters<InstanceType<Realtime["RealtimeSpeech"]>["connect"]>[1] = {},
  ) {
    const previous = mockModule().getLastSocket();
    const events: Array<{ type?: string | undefined }> = [];
    const consumed = (async () => {
      for await (const event of client().speakStream(text, MODEL, options)) {
        events.push(event);
      }
    })();
    consumed.catch(() => undefined);
    const ws = await nextSocket(previous);
    ws.emitMessage(SESSION_CREATED);
    await tick();
    await onSocket(ws);
    return { ws, events, consumed };
  }

  it("sends text, ends the input, and stops on speech.audio.done", async () => {
    const { ws, events, consumed } = await run(
      textOf("Hello, ", "world."),
      (socket) => {
        socket.emitMessage(AUDIO_DELTA);
        socket.emitMessage(AUDIO_DONE);
        socket.emitMessage(AUDIO_DELTA);
      },
      { voiceId: "my-voice" },
    );
    await consumed;

    expect(events.map((event) => event.type)).toEqual([
      "session.created",
      "speech.audio.delta",
      "speech.audio.done",
    ]);
    expect(sent(ws)).toEqual([
      { type: "session.update", session: { voice: "my-voice" } },
      { type: "input_text.append", text: "Hello, " },
      { type: "input_text.append", text: "world." },
      { type: "input_text.end" },
    ]);
    expect(ws.closeArgs?.code).toBe(1000);
  });

  it.each([false, true])(
    "raises the server close as RealtimeSpeechException (failing send: %s)",
    async (failTextSend) => {
      const { consumed } = await run(textOf("Hi."), (socket) => {
        if (failTextSend) {
          socket.failTextSendWith = new Error("socket closed");
        }
        socket.serverClose(1008, "Voice 'nope' not found.");
      });

      const error = await consumed.then(() => undefined, (err: unknown) => err);
      expect(error).toBeInstanceOf(realtime.RealtimeSpeechException);
      expect(error).toMatchObject({ message: "Voice 'nope' not found.", code: 1008 });
    },
  );

  it("ends quietly on a clean server close while sending", async () => {
    async function* slowText() {
      yield "Hi.";
      await new Promise((resolve) => setTimeout(resolve, 10));
      yield "More.";
    }
    const { events, consumed } = await run(slowText(), (socket) => {
      socket.failTextSendWith = new Error("socket closed");
      socket.serverClose(1000, "");
    });

    await expect(consumed).resolves.toBeUndefined();
    expect(events.map((event) => event.type)).toEqual(["session.created"]);
  });

  it("returns when the consumer stops while the text stream is waiting", async () => {
    let returned = false;
    const stalled: AsyncIterable<string> = {
      [Symbol.asyncIterator]: () => {
        let first = true;
        return {
          next: () => {
            if (first) {
              first = false;
              return Promise.resolve({ done: false, value: "Hi." });
            }
            return new Promise<IteratorResult<string>>(() => undefined);
          },
          return: () => {
            returned = true;
            return Promise.resolve({ done: true, value: undefined });
          },
        };
      },
    };
    const { ws, consumed } = await run(stalled, (socket) => socket.emitMessage(AUDIO_DONE));

    const outcome = await Promise.race([
      consumed.then(() => "returned"),
      new Promise((resolve) => setTimeout(() => resolve("hung"), 1000)),
    ]);
    expect(outcome).toBe("returned");
    expect(returned).toBe(true);
    expect(sent(ws).map((message) => (message as { type: string }).type)).toEqual([
      "input_text.append",
    ]);
  });

  it("raises a text stream error instead of waiting for events", async () => {
    async function* failingText(): AsyncIterable<string> {
      yield "Hi.";
      throw new Error("LLM stream failed");
    }
    const { ws, consumed } = await run(failingText(), () => undefined);

    const outcome = await Promise.race([
      consumed.then(() => "resolved", (err: Error) => err.message),
      new Promise((resolve) => setTimeout(() => resolve("hung"), 1000)),
    ]);
    expect(outcome).toBe("LLM stream failed");
    expect(ws.readyState).toBe(3);
  });
});

describe("session options match the generated payload", () => {
  // Fails when a regen adds or removes a session field the helper doesn't expose.
  function wireFields(schema: unknown): string[] {
    const zodSchema = schema as { in?: { shape: object }; shape?: object };
    return Object.keys((zodSchema.in ?? zodSchema).shape ?? {}).sort();
  }

  const ALL_SPEECH_OPTIONS = {
    voiceId: "v",
    refAudio: "UklGRg==",
    responseFormat: "pcm",
    streamingMode: "responsive",
    expressiveness: 1.5,
  } as const;

  it("covers every realtime speech session field in updateSession and connect", async () => {
    const expected = wireFields(RealtimeSpeechSessionUpdatePayload$inboundSchema);
    expect(expected.length).toBeGreaterThan(0);

    const { ws, connection } = newConnection();
    await connection.updateSession(ALL_SPEECH_OPTIONS);
    const viaUpdate = sent(ws)[0] as { session: object };
    expect(Object.keys(viaUpdate.session).sort()).toEqual(expected);

    const connected = await connectWith(ALL_SPEECH_OPTIONS);
    const viaConnect = sent(connected.ws)[0] as { session: object };
    expect(Object.keys(viaConnect.session).sort()).toEqual(expected);
    await connected.connection.close();
  });

  it("covers every realtime transcription session field", async () => {
    const ws = new (mockModule().MockWebSocket)();
    const connection = new realtime.RealtimeConnection(ws as unknown as WebSocket, {
      requestId: "ws-123",
      model: "voxtral-mini-transcribe-realtime-3",
      audioFormat: { encoding: "pcm_s16le", sampleRate: 16000 },
    });
    await connection.updateSession(
      { encoding: "pcm_s16le", sampleRate: 16000 },
      {
        targetStreamingDelayMs: 480,
        diarize: true,
        contextBias: ["Voxtral"],
        language: "en",
        speakerReferences: { alice: "UklGRg==" },
        turnDetection: {},
      },
    );

    const message = sent(ws)[0] as { session: object };
    expect(Object.keys(message.session).sort()).toEqual(
      wireFields(RealtimeTranscriptionSessionUpdatePayload$inboundSchema),
    );
  });
});
