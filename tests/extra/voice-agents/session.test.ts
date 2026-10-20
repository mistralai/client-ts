import { afterEach, expect, test, vi } from "vitest";

import type { AudioInterface } from "../../../src/extra/voice-agents/audio/audio.js";
import type { DisconnectedEvent } from "../../../src/extra/voice-agents/events.js";
import { VoiceAgentSession } from "../../../src/extra/voice-agents/session.js";
import type { VoiceTransport } from "../../../src/extra/voice-agents/transport/transport.js";
import type { AudioSessionCreateResponse } from "../../../src/models/components/index.js";

const connection: AudioSessionCreateResponse = {
  id: "session-1",
  participantToken: "token",
  serverUrl: "wss://media.example",
  createdAt: new Date(0),
  expiresAt: new Date(60_000),
};

class StubTransport implements VoiceTransport {
  async start(): Promise<void> {}
  async sendAudio(): Promise<void> {}
  async setInputEnabled(): Promise<void> {}
  async sendSessionUpdate(): Promise<string> {
    return "{}";
  }
  _addFunctionHandlers(): void {}
  async close(): Promise<void> {}
}

class DeviceOwningTransport extends StubTransport {
  readonly ownsAudioDevices = true;
}

const silentAudioInterface: AudioInterface = {
  async start() {},
  async *inputAudio() {},
  async outputAudio() {},
  async stop() {},
};

function buildSession(
  options: {
    audioInterface?: AudioInterface | undefined;
    ownsAudioDevices?: boolean;
  } = {},
) {
  const deleteSession = vi.fn(async () => {});
  const createTransport = vi.fn(async () =>
    options.ownsAudioDevices === true
      ? new DeviceOwningTransport()
      : new StubTransport(),
  );
  const session = new VoiceAgentSession({
    session: connection,
    createTransport,
    deleteSession,
    audioInterface: options.audioInterface,
  });
  return { session, deleteSession, createTransport };
}

afterEach(() => {
  vi.restoreAllMocks();
});

test("closing twice deletes the remote session once", async () => {
  const { session, deleteSession } = buildSession();
  const received: DisconnectedEvent[] = [];
  session.on("disconnected", (event) => {
    received.push(event);
  });

  await session.connect();
  await session.close("user_interrupt");
  await session.close();

  expect(deleteSession).toHaveBeenCalledOnce();
  expect(received).toEqual([
    { sessionId: "session-1", reason: "user_interrupt" },
  ]);
});

test("closing a session that never connected does not report a disconnect", async () => {
  const { session, deleteSession } = buildSession();
  const received: DisconnectedEvent[] = [];
  session.on("disconnected", (event) => {
    received.push(event);
  });

  await session.close("user_interrupt");

  expect(deleteSession).toHaveBeenCalledOnce();
  expect(received).toEqual([]);
});

test("connect() is refused once the session has closed", async () => {
  const { session, createTransport } = buildSession();
  await session.close();

  await expect(session.connect()).rejects.toThrow(/closed voice session/);
  expect(createTransport).not.toHaveBeenCalled();
});

test("unsubscribing stops a handler from receiving events", async () => {
  const { session } = buildSession();
  const handler = vi.fn();
  const unsubscribe = session.on("disconnected", handler);

  await session.connect();
  unsubscribe();
  await session.close();

  expect(handler).not.toHaveBeenCalled();
});

test("a throwing handler does not stop the other handlers or the close", async () => {
  const { session, deleteSession } = buildSession();
  vi.spyOn(console, "error").mockImplementation(() => {});
  const secondHandler = vi.fn();
  session.on("disconnected", () => {
    throw new Error("handler blew up");
  });
  session.on("disconnected", secondHandler);

  await session.connect();
  await expect(session.close()).resolves.toBeUndefined();

  expect(secondHandler).toHaveBeenCalledOnce();
  expect(deleteSession).toHaveBeenCalledOnce();
});

test("the transport is only built once connect() is called", async () => {
  vi.spyOn(console, "warn").mockImplementation(() => {});
  const { session, createTransport } = buildSession();

  expect(createTransport).not.toHaveBeenCalled();
  await session.connect();

  expect(createTransport).toHaveBeenCalledOnce();
});

test("connect() warns when the session can neither hear nor speak", async () => {
  const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
  const { session } = buildSession();

  await session.connect();

  expect(warn).toHaveBeenCalledOnce();
  expect(warn.mock.calls[0]?.[0]).toMatch(
    /can neither hear nor speak.*DefaultAudioInterface.*sendAudio/s,
  );
});

const quietSessions: [string, () => VoiceAgentSession][] = [
  [
    "an audio handler is subscribed",
    () => {
      const { session } = buildSession();
      session.on("audio", () => {});
      return session;
    },
  ],
  [
    "an audio interface is attached",
    () => buildSession({ audioInterface: silentAudioInterface }).session,
  ],
  [
    "the transport owns the audio devices",
    () => buildSession({ ownsAudioDevices: true }).session,
  ],
];

test.each(quietSessions)("connect() stays quiet when %s", async (_, build) => {
  const warn = vi.spyOn(console, "warn").mockImplementation(() => {});

  await build().connect();

  expect(warn).not.toHaveBeenCalled();
});

test("sending audio before connect() reports the session is not connected", async () => {
  const { session } = buildSession();

  await expect(session.sendAudio(new Uint8Array(2))).rejects.toThrow(
    /not connected/,
  );
});

test("a session that is never connected is still deleted at scope exit", async () => {
  const deleteSession = vi.fn(async () => {});
  {
    await using session = new VoiceAgentSession({
      session: connection,
      createTransport: async () => new StubTransport(),
      deleteSession,
    });
    expect(session.id).toBe("session-1");
  }

  expect(deleteSession).toHaveBeenCalledOnce();
});

test("connect() failing deletes the remote session", async () => {
  const deleteSession = vi.fn(async () => {});
  const session = new VoiceAgentSession({
    session: connection,
    createTransport: async () => {
      throw new Error("livekit refused the token");
    },
    deleteSession,
  });
  session.on("error", () => {});

  await expect(session.connect()).rejects.toThrow(/livekit refused the token/);

  expect(deleteSession).toHaveBeenCalledOnce();
});
