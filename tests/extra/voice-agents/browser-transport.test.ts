import { DisconnectReason } from "livekit-client";
import { expect, test } from "vitest";

import type { VoiceAgentErrorEvent } from "../../../src/extra/voice-agents/events.js";
import { BrowserTransport } from "../../../src/extra/voice-agents/transport/browser.js";
import type { AudioSessionCreateResponse } from "../../../src/models/components/index.js";

const session: AudioSessionCreateResponse = {
  id: "session-1",
  participantToken: "token",
  serverUrl: "wss://media.example",
  createdAt: new Date(0),
  expiresAt: new Date(60_000),
};

interface BrowserInternals {
  _pendingAgentDisconnect: VoiceAgentErrorEvent | null;
  _onParticipantDisconnected(
    participant: { isAgent: boolean },
    reason?: DisconnectReason,
  ): void;
}

test("the agent's disconnect reason is mapped rather than hardcoded", () => {
  const transport = new BrowserTransport(session, { emit: async () => {} });
  const internals = transport as unknown as BrowserInternals;

  internals._onParticipantDisconnected(
    { isAgent: true },
    DisconnectReason.ROOM_DELETED,
  );

  expect(internals._pendingAgentDisconnect).toMatchObject({
    code: "agent_disconnected",
    message: "Voice agent disconnected unexpectedly: session_ended",
    payload: { reason: "session_ended" },
  });
});

test("close drops the room reference and its listeners", async () => {
  const transport = new BrowserTransport(session, { emit: async () => {} });
  const internals = transport as unknown as {
    _room: unknown;
    _removeRoomListeners: (() => void) | null;
  };
  let listenersRemoved = false;
  internals._room = { disconnect: async () => {} };
  internals._removeRoomListeners = () => {
    listenersRemoved = true;
  };

  await transport.close();

  expect(listenersRemoved).toBe(true);
  expect(internals._room).toBeNull();
  expect(internals._removeRoomListeners).toBeNull();
});
