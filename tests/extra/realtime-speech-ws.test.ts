import { createServer, type Server } from "node:http";
import type { AddressInfo } from "node:net";
import { WebSocketServer, type WebSocket as ServerSocket } from "ws";
import {
  RealtimeSpeech,
  RealtimeSpeechException,
} from "../../src/extra/realtime/index.js";

// Uses a real ws server: the mock delivers events synchronously and hides ordering bugs.

const SESSION = {
  request_id: "ws-1",
  model: "m",
  voice: "v",
  is_ref_audio: false,
  streaming_mode: "responsive",
  response_format: "wav",
  expressiveness: 2,
};
const DELTA = { type: "speech.audio.delta", audio_data: "AAAAAA==" };
const DONE = {
  type: "speech.audio.done",
  usage: { prompt_tokens: 1, completion_tokens: 1, total_tokens: 2 },
};

type Message = { type: string; [key: string]: unknown };

let server: WebSocketServer;
let port: number;
let onOpen: (socket: ServerSocket) => void;
let onMessage: (socket: ServerSocket, message: Message) => void;
let received: string[];
let uncaught: unknown[];
const recordUncaught = (err: unknown) => uncaught.push(err);

beforeEach(async () => {
  received = [];
  uncaught = [];
  process.on("uncaughtException", recordUncaught);
  onOpen = (socket) => socket.send(JSON.stringify({ type: "session.created", session: SESSION }));
  onMessage = (socket, message) => {
    if (message.type === "input_text.end") {
      socket.send(JSON.stringify(DELTA));
      socket.send(JSON.stringify(DONE));
    }
  };
  server = new WebSocketServer({ port: 0 });
  await new Promise<void>((resolve) => server.once("listening", () => resolve()));
  port = (server.address() as AddressInfo).port;
  server.on("connection", (socket) => {
    onOpen(socket);
    socket.on("message", (data) => {
      const message = JSON.parse(String(data)) as Message;
      received.push(message.type);
      onMessage(socket, message);
    });
  });
});

afterEach(async () => {
  process.off("uncaughtException", recordUncaught);
  for (const socket of server.clients) {
    socket.terminate();
  }
  await new Promise<void>((resolve) => server.close(() => resolve()));
});

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

function client(): RealtimeSpeech {
  return new RealtimeSpeech({ apiKey: "k", serverURL: `http://127.0.0.1:${port}` });
}

async function* textOf(...chunks: string[]): AsyncIterable<string> {
  for (const chunk of chunks) {
    yield chunk;
  }
}

async function collectSlowly(stream: AsyncIterable<{ type?: string | undefined }>): Promise<string[]> {
  const types: string[] = [];
  for await (const event of stream) {
    types.push(event.type ?? "?");
    if (event.type === "speech.audio.done") {
      break;
    }
    await sleep(20);
  }
  return types;
}

function withTimeout<T>(promise: Promise<T>, ms = 2000): Promise<T | "timed out"> {
  return Promise.race([promise, sleep(ms).then(() => "timed out" as const)]);
}

it("delivers every event to a consumer that awaits between events", async () => {
  const types = await withTimeout(collectSlowly(client().speakStream(textOf("Hi."), "m")));

  expect(types).toEqual(["session.created", "speech.audio.delta", "speech.audio.done"]);
  expect(received).toEqual(["input_text.append", "input_text.end"]);
});

it("keeps events sent before iteration starts", async () => {
  const connection = await client().connect("m");
  await connection.sendText("Hi.");
  await connection.end();
  await sleep(50);

  const types = await withTimeout(collectSlowly(connection));
  expect(types).toEqual(["session.created", "speech.audio.delta", "speech.audio.done"]);
  await connection.close();
});

it.each([
  [1000, undefined],
  [1001, undefined],
  [1008, "Voice 'nope' not found."],
  [1011, "boom"],
])("handles a server close with code %i", async (code, message) => {
  onMessage = (socket) => socket.close(code, message ?? "");

  const outcome = await withTimeout(
    collectSlowly(client().speakStream(textOf("Hi."), "m")).then(
      () => "ended",
      (err: unknown) => err,
    ),
  );

  if (message === undefined) {
    expect(outcome).toBe("ended");
  } else {
    expect(outcome).toBeInstanceOf(RealtimeSpeechException);
    expect(outcome).toMatchObject({ message, code });
  }
});

it("does not wait on a stalled text source after the server is done", async () => {
  async function* stalled(): AsyncIterable<string> {
    yield "Hi.";
    await new Promise(() => undefined);
  }
  onMessage = (socket) => socket.send(JSON.stringify(DONE));

  const types = await withTimeout(collectSlowly(client().speakStream(stalled(), "m")));

  expect(types).toEqual(["session.created", "speech.audio.done"]);
});

it("raises a text stream error to a consumer that awaits", async () => {
  async function* failing(): AsyncIterable<string> {
    yield "Hi.";
    throw new Error("LLM failed");
  }
  onMessage = () => undefined;

  const outcome = await withTimeout(
    collectSlowly(client().speakStream(failing(), "m")).then(
      () => "ended",
      (err: Error) => err.message,
    ),
  );
  expect(outcome).toBe("LLM failed");
});

it("rejects a handshake timeout without an uncaught error", async () => {
  const silent: Server = createServer(() => undefined);
  await new Promise<void>((resolve) => silent.listen(0, "127.0.0.1", () => resolve()));
  const silentPort = (silent.address() as AddressInfo).port;

  const error = await new RealtimeSpeech({ apiKey: "k", serverURL: `http://127.0.0.1:${silentPort}` })
    .connect("m", { timeoutMs: 50 })
    .catch((err: unknown) => err);
  await sleep(50);
  silent.closeAllConnections();
  silent.close();

  expect(error).toBeInstanceOf(RealtimeSpeechException);
  expect(uncaught).toEqual([]);
});

it("keeps the serverUrl query string", async () => {
  let url: string | undefined;
  server.on("headers", (_headers, request) => {
    url = request.url;
  });

  const connection = await client().connect("m", {
    serverUrl: `http://127.0.0.1:${port}/proxy?token=abc`,
  });
  await connection.close();

  expect(url).toBe("/proxy/v1/audio/speech/realtime?token=abc&model=m");
});
