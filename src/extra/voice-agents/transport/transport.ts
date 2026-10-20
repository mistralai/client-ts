import * as z from "zod/v4";

import type { AudioTurnConfig$Outbound } from "../../../models/components/index.js";
import { VoiceAgentConnectionError } from "../errors.js";
import type {
  TransportDisconnectReason,
  VoiceEvent,
  VoiceEventName,
} from "../events.js";
import type { FunctionHandler, WireTool } from "../tools.js";
import { errorMessage } from "../utils.js";

export const FUNCTION_TOOL_RPC_METHOD = "mistral.function_tool";
export const SESSION_UPDATE_RPC_METHOD = "mistral.session_update";
export const AGENT_JOIN_TIMEOUT_MS = 30_000;

export const FUNCTION_TOOL_INVALID_PAYLOAD_CODE = 2400;
export const FUNCTION_TOOL_NO_HANDLER_CODE = 2404;
export const FUNCTION_TOOL_HANDLER_FAILED_CODE = 1;

const AGENT_OUTPUT_TRACK_NAMES = new Set(["roomio_audio", "background_audio"]);

const TRANSPORT_DISCONNECT_REASONS: Record<string, TransportDisconnectReason> = {
  CLIENT_INITIATED: "client_closed",
  USER_REJECTED: "client_closed",
  SERVER_SHUTDOWN: "server_closed",
  PARTICIPANT_REMOVED: "server_closed",
  DUPLICATE_IDENTITY: "server_closed",
  MIGRATION: "server_closed",
  ROOM_DELETED: "session_ended",
  ROOM_CLOSED: "session_ended",
  AGENT_ERROR: "agent_error",
  CONNECTION_TIMEOUT: "timeout",
  USER_UNAVAILABLE: "timeout",
  SIGNAL_CLOSE: "network_failure",
  MEDIA_FAILURE: "network_failure",
  SIP_TRUNK_FAILURE: "network_failure",
  JOIN_FAILURE: "network_failure",
  STATE_MISMATCH: "network_failure",
};

export function transportDisconnectReason(
  reason: string | number | undefined,
  values: Record<string, string | number>,
): TransportDisconnectReason {
  if (reason == null) return "unknown";
  const entry = Object.entries(values).find(([, value]) => value === reason);
  const name = entry?.[0] ?? reason.toString();
  return TRANSPORT_DISCONNECT_REASONS[name.toUpperCase()] ?? "unknown";
}

export function isAgentParticipant(
  participant: {
    kind: number;
    info?: { permission?: object | undefined } | undefined;
  },
  agentKind: number,
): boolean {
  if (participant.kind === agentKind) return true;
  const permission = participant.info?.permission as
    | { agent?: boolean }
    | undefined;
  return permission?.agent === true;
}

export function isAgentOutputTrack(
  track: { name?: string | undefined },
  publication: { name?: string | undefined; source?: number | undefined },
  microphoneSource: number,
): boolean {
  if (AGENT_OUTPUT_TRACK_NAMES.has(track.name ?? "")) return true;
  if (AGENT_OUTPUT_TRACK_NAMES.has(publication.name ?? "")) return true;
  if (publication.source == null) return true;
  return publication.source === microphoneSource;
}

export function connectErrorMessage(
  sessionId: string,
  detail: string,
  status?: number,
): string {
  const resolved = status ?? clientErrorStatus(detail);
  if (resolved === 401 && detail.includes("expired")) {
    return `Voice session ${sessionId} can no longer be joined: its participant token expired. Create a new session and connect before its expires_at.`;
  }
  if (resolved === 404) {
    return `Voice session ${sessionId} has ended: its room was closed, timed out or deleted. Create a new session.`;
  }
  if (resolved === 401) {
    return `Voice session ${sessionId} rejected its participant token: ${detail}`;
  }
  return `Failed to connect to voice session ${sessionId}: ${detail}`;
}

function clientErrorStatus(detail: string): number | undefined {
  const match = /client error: (\d{3})/.exec(detail);
  return match?.[1] == null ? undefined : Number(match[1]);
}

export function malformedFunctionCallMessage(error: unknown): string {
  const detail =
    error instanceof z.ZodError
      ? error.issues
          .map(
            (issue) => `${issue.path.join(".") || "(root)"}: ${issue.message}`,
          )
          .join("; ")
      : errorMessage(error);
  return `Malformed function call payload: ${detail}`;
}

export interface SessionUpdatePayload {
  instructions?: string;
  tools?: WireTool[];
  turn?: AudioTurnConfig$Outbound;
}

export type EventCallback = (
  event: VoiceEventName,
  payload: VoiceEvent,
) => Promise<void>;

export interface VoiceTransport {
  readonly ownsAudioDevices?: boolean;
  start(): Promise<void>;
  waitForAgent?(): Promise<void>;
  sendAudio(audio: Uint8Array): Promise<void>;
  setInputEnabled(enabled: boolean): Promise<void>;
  sendSessionUpdate(payload: SessionUpdatePayload): Promise<string>;
  _addFunctionHandlers(tools: FunctionHandler[]): void;
  close(): Promise<void>;
}

export async function waitForAgentWithTimeout(
  agentPresent: Promise<void>,
): Promise<void> {
  let timer: ReturnType<typeof setTimeout> | undefined;
  const timeout = new Promise<never>((_, reject) => {
    timer = setTimeout(
      () =>
        reject(
          new VoiceAgentConnectionError(
            `Agent did not join within ${AGENT_JOIN_TIMEOUT_MS / 1000}s`,
          ),
        ),
      AGENT_JOIN_TIMEOUT_MS,
    );
  });
  try {
    await Promise.race([agentPresent, timeout]);
  } finally {
    clearTimeout(timer);
  }
}
