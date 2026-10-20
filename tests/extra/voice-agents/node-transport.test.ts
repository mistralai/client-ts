import type { AudioFrame } from "@livekit/rtc-node";
import { expect, test } from "vitest";

import type {
  VoiceEvent,
  VoiceEventName,
} from "../../../src/extra/voice-agents/events.js";
import { FunctionHandler } from "../../../src/extra/voice-agents/tools.js";
import { NodeTransport } from "../../../src/extra/voice-agents/transport/node.js";
import type { AudioSessionCreateResponse } from "../../../src/models/components/index.js";

const session: AudioSessionCreateResponse = {
  id: "session-1",
  participantToken: "token",
  serverUrl: "wss://media.example",
  createdAt: new Date(0),
  expiresAt: new Date(60_000),
};

interface NodeInternals {
  _room: unknown;
  _audioSource: unknown;
  _inputTrack: unknown;
  _publication: unknown;
  _removeRoomListeners: (() => void) | null;
  _registerFunctionHandlers(): void;
}

function buildTransport(functionHandlers: FunctionHandler[] = []) {
  const events: { name: VoiceEventName; payload: VoiceEvent }[] = [];
  const transport = new NodeTransport(session, {
    emit: async (name, payload) => {
      events.push({ name, payload });
    },
    functionHandlers,
  });
  const internals = transport as unknown as NodeInternals;

  let rpc!: (data: { payload: string }) => Promise<string>;
  internals._room = {
    localParticipant: {
      registerRpcMethod: (_method: string, handler: typeof rpc) => {
        rpc = handler;
      },
    },
  };
  internals._registerFunctionHandlers();

  return {
    transport,
    internals,
    events,
    invoke: (payload: unknown) => rpc({ payload: JSON.stringify(payload) }),
  };
}

test("a throwing handler reports only its message to the model", async () => {
  const { invoke } = buildTransport([
    new FunctionHandler({
      name: "lookup",
      handler: () => {
        throw new Error("upstream is down");
      },
    }),
  ]);

  await expect(invoke({ name: "lookup", arguments: {} })).rejects.toMatchObject(
    { code: 1, message: "function `lookup` failed: upstream is down" },
  );
});

test("a malformed call is rejected rather than coerced into a tool name", async () => {
  const { events, invoke } = buildTransport();

  await expect(
    invoke({ arguments: { city: "Paris" } }),
  ).rejects.toMatchObject({
    code: 2400,
    message: expect.stringMatching(/^Malformed function call payload: name: /),
  });

  expect(events).toEqual([]);
});

test("a well-formed call for an unregistered tool is reported as unhandled", async () => {
  const { events, invoke } = buildTransport();

  await expect(
    invoke({ name: "weather", arguments: { city: "Paris" } }),
  ).rejects.toMatchObject({
    code: 2404,
    message: "No handler for function `weather`",
  });

  expect(events).toEqual([
    {
      name: "unhandled_tool",
      payload: { name: "weather", arguments: { city: "Paris" } },
    },
  ]);
});

test("close releases the room, the audio source and the room listeners", async () => {
  const { transport, internals } = buildTransport();
  const closed: string[] = [];
  internals._room = {
    disconnect: async () => {
      closed.push("room");
    },
  };
  internals._audioSource = {
    close: async () => {
      closed.push("audioSource");
    },
  };
  internals._inputTrack = {};
  internals._publication = {};
  internals._removeRoomListeners = () => {
    closed.push("listeners");
  };

  await transport.close();

  expect(closed).toEqual(["room", "listeners", "audioSource"]);
  expect([
    internals._room,
    internals._audioSource,
    internals._inputTrack,
    internals._publication,
    internals._removeRoomListeners,
  ]).toEqual([null, null, null, null, null]);
});

test("sendAudio accepts a pooled Buffer at an odd offset and an odd length", async () => {
  const { transport, internals } = buildTransport();
  const frames: AudioFrame[] = [];
  internals._audioSource = {
    captureFrame: async (frame: AudioFrame) => {
      frames.push(frame);
    },
  };

  const pool = Buffer.alloc(10);
  pool.writeInt16LE(1234, 1);
  pool.writeInt16LE(-5678, 3);
  const slice = pool.subarray(1, 8);
  expect(slice.byteOffset % 2).toBe(1);

  await transport.sendAudio(slice);

  expect(frames[0]?.samplesPerChannel).toBe(3);
  expect(Array.from(frames[0]?.data ?? [])).toEqual([1234, -5678, 0]);
});
