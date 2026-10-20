import { expect, test, vi } from "vitest";

import {
  AGENT_JOIN_TIMEOUT_MS,
  connectErrorMessage,
  isAgentOutputTrack,
  isAgentParticipant,
  waitForAgentWithTimeout,
} from "../../../src/extra/voice-agents/transport/transport.js";

const AGENT_KIND = 3;
const SOURCE_MICROPHONE = 1;
const SOURCE_SCREENSHARE_AUDIO = 4;

test.each([
  ["kind alone", { kind: AGENT_KIND }, true],
  [
    "the server-issued agent permission alone",
    { kind: 1, info: { permission: { agent: true } } },
    true,
  ],
  ["neither", { kind: 1, info: { permission: { agent: false } } }, false],
])("an agent is recognised by %s: %s", (_label, participant, expected) => {
  expect(isAgentParticipant(participant, AGENT_KIND)).toBe(expected);
});

test.each([
  ["agent speech", "roomio_audio", SOURCE_SCREENSHARE_AUDIO, true],
  ["a tool-call filler", "background_audio", SOURCE_SCREENSHARE_AUDIO, true],
  ["an unnamed microphone track", "", SOURCE_MICROPHONE, true],
  ["a second publisher's screen share", "tab", SOURCE_SCREENSHARE_AUDIO, false],
])("%s is mixed into the output: %s", (_label, name, source, expected) => {
  expect(
    isAgentOutputTrack({ name }, { name, source }, SOURCE_MICROPHONE),
  ).toBe(expected);
});

test.each([
  [
    "an expired participant token",
    "could not connect to room: client error: 401 Unauthorized - token is expired",
    /its participant token expired\. Create a new session and connect before its expires_at\./,
  ],
  [
    "a room that is gone",
    "could not connect to room: client error: 404 Not Found",
    /has ended: its room was closed, timed out or deleted\./,
  ],
  [
    "a rejected token",
    "could not connect to room: client error: 401 Unauthorized - bad signature",
    /rejected its participant token: /,
  ],
  [
    "anything else",
    "could not connect to room: dns failure",
    /Failed to connect to voice session session-1: could not connect to room: dns failure/,
  ],
])("%s is explained to the caller", (_label, detail, expected) => {
  expect(connectErrorMessage("session-1", detail)).toMatch(expected);
});

test("a status reported out of band maps as well as one parsed from the message", () => {
  expect(connectErrorMessage("session-1", "token is expired", 401)).toMatch(
    /its participant token expired/,
  );
});

test("the agent join timeout is reported in seconds", async () => {
  vi.useFakeTimers();
  try {
    const pending = waitForAgentWithTimeout(new Promise<void>(() => {}));
    const rejected = expect(pending).rejects.toThrow(
      "Agent did not join within 30s",
    );
    await vi.advanceTimersByTimeAsync(AGENT_JOIN_TIMEOUT_MS);
    await rejected;
  } finally {
    vi.useRealTimers();
  }
});
