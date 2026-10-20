import { describe, expect, test } from "vitest";

import { transportDisconnectReason } from "../../../src/extra/voice-agents/transport/transport.js";

// Mirrors the numeric protobuf enum both transports pass in.
const DisconnectReason = {
  UNKNOWN_REASON: 0,
  CLIENT_INITIATED: 1,
  DUPLICATE_IDENTITY: 2,
  SERVER_SHUTDOWN: 3,
  PARTICIPANT_REMOVED: 4,
  ROOM_DELETED: 5,
  STATE_MISMATCH: 6,
  JOIN_FAILURE: 7,
  MIGRATION: 8,
  SIGNAL_CLOSE: 9,
  ROOM_CLOSED: 10,
  USER_UNAVAILABLE: 11,
  USER_REJECTED: 12,
  SIP_TRUNK_FAILURE: 13,
  CONNECTION_TIMEOUT: 14,
  MEDIA_FAILURE: 15,
  AGENT_ERROR: 16,
} as const;

describe("transportDisconnectReason", () => {
  it.each([
    [DisconnectReason.CLIENT_INITIATED, "client_closed"],
    [DisconnectReason.USER_REJECTED, "client_closed"],
    [DisconnectReason.SERVER_SHUTDOWN, "server_closed"],
    [DisconnectReason.DUPLICATE_IDENTITY, "server_closed"],
    [DisconnectReason.ROOM_DELETED, "session_ended"],
    [DisconnectReason.AGENT_ERROR, "agent_error"],
    [DisconnectReason.CONNECTION_TIMEOUT, "timeout"],
    [DisconnectReason.SIP_TRUNK_FAILURE, "network_failure"],
    [DisconnectReason.STATE_MISMATCH, "network_failure"],
  ])("maps %i to %s", (reason, expected) => {
    expect(transportDisconnectReason(reason, DisconnectReason)).toBe(expected);
  });

  // The whole point: an upstream value we have never seen must not reach a
  // customer, so it collapses rather than leaking a name to branch on.
  it.each([
    ["the upstream unknown", DisconnectReason.UNKNOWN_REASON],
    ["a value added upstream later", 9999],
    ["no reason at all", undefined],
  ])("reports %s as unknown", (_label, reason) => {
    expect(transportDisconnectReason(reason, DisconnectReason)).toBe("unknown");
  });

  test("never returns a lowercased upstream enum name", () => {
    const leaked = Object.keys(DisconnectReason).map((name) =>
      name.toLowerCase(),
    );
    const mapped = Object.values(DisconnectReason).map((reason) =>
      transportDisconnectReason(reason, DisconnectReason),
    );

    expect(mapped.filter((reason) => leaked.includes(reason))).toEqual([
      "agent_error",
    ]);
  });
});
