import type {
  VoiceAgentToolCallStartedEvent,
  VoiceAgentToolCallEndedEvent,
  VoiceAgentErrorEvent,
  VoiceAgentTranscriptEvent,
  VoiceAgentStateChangedEvent,
  VoiceAgentSessionUpdatedEvent,
} from "../../models/components/index.js";
import {
  VoiceAgentToolCallStartedEvent$inboundSchema,
  VoiceAgentToolCallEndedEvent$inboundSchema,
  VoiceAgentErrorEvent$inboundSchema,
  VoiceAgentTranscriptEvent$inboundSchema,
  VoiceAgentStateChangedEvent$inboundSchema,
  VoiceAgentSessionUpdatedEvent$inboundSchema,
} from "../../models/components/index.js";

export type {
  VoiceAgentToolCallStartedEvent,
  VoiceAgentToolCallEndedEvent,
  VoiceAgentErrorEvent,
  VoiceAgentTranscriptEvent,
  VoiceAgentStateChangedEvent,
  VoiceAgentSessionUpdatedEvent,
};
export type AgentState = VoiceAgentStateChangedEvent["state"];

export type DisconnectReason =
  | "user_interrupt"
  | "start_failed"
  | "audio_input_error"
  | "audio_output_error"
  | "error";
export type TransportDisconnectReason =
  | "client_closed"
  | "server_closed"
  | "session_ended"
  | "agent_error"
  | "timeout"
  | "network_failure"
  | "unknown";
export interface ConnectedEvent {
  sessionId: string;
}
export interface DisconnectedEvent {
  sessionId: string;
  reason?: DisconnectReason | undefined;
}
export interface UnhandledToolEvent {
  name: string;
  arguments?: string | Record<string, unknown> | undefined;
}
export interface UnknownVoiceAgentEvent {
  type: string | null;
  content: unknown;
  error: string;
}
export interface AudioTrackEvent {
  track: MediaStreamTrack;
  source: "local" | "remote";
}
export interface VoiceEventMap {
  connected: ConnectedEvent;
  disconnected: DisconnectedEvent;
  transcript: VoiceAgentTranscriptEvent;
  tool_call_started: VoiceAgentToolCallStartedEvent;
  tool_call_ended: VoiceAgentToolCallEndedEvent;
  agent_state_changed: VoiceAgentStateChangedEvent;
  unhandled_tool: UnhandledToolEvent;
  error: VoiceAgentErrorEvent;
  session_updated: VoiceAgentSessionUpdatedEvent;
  unknown: UnknownVoiceAgentEvent;
}
export interface NodeVoiceEventMap extends VoiceEventMap {
  audio: Uint8Array;
}
export interface BrowserVoiceEventMap extends VoiceEventMap {
  audio_track: AudioTrackEvent;
}
type AnyVoiceEventMap = NodeVoiceEventMap & BrowserVoiceEventMap;
export type VoiceEventName = keyof AnyVoiceEventMap;
export type VoiceEvent = AnyVoiceEventMap[VoiceEventName];
export type TransportEvent = {
  [K in VoiceEventName]: { name: K; payload: AnyVoiceEventMap[K] };
}[VoiceEventName];

export function parseVoiceAgentEvent(payload: unknown): TransportEvent {
  const type =
    typeof payload === "object" &&
    payload !== null &&
    "type" in payload &&
    typeof payload.type === "string"
      ? payload.type
      : null;
  function unknown(error: string): TransportEvent {
    return { name: "unknown", payload: { type, content: payload, error } };
  }
  switch (type) {
    case "tool_call.started": {
      const parsed =
        VoiceAgentToolCallStartedEvent$inboundSchema.safeParse(payload);
      return parsed.success
        ? { name: "tool_call_started", payload: parsed.data }
        : unknown(parsed.error.message);
    }
    case "tool_call.ended": {
      const parsed =
        VoiceAgentToolCallEndedEvent$inboundSchema.safeParse(payload);
      return parsed.success
        ? { name: "tool_call_ended", payload: parsed.data }
        : unknown(parsed.error.message);
    }
    case "error": {
      const parsed = VoiceAgentErrorEvent$inboundSchema.safeParse(payload);
      return parsed.success
        ? { name: "error", payload: parsed.data }
        : unknown(parsed.error.message);
    }
    case "transcription.segment": {
      const parsed = VoiceAgentTranscriptEvent$inboundSchema.safeParse(payload);
      return parsed.success
        ? { name: "transcript", payload: parsed.data }
        : unknown(parsed.error.message);
    }
    case "agent.state.changed": {
      const parsed =
        VoiceAgentStateChangedEvent$inboundSchema.safeParse(payload);
      return parsed.success
        ? { name: "agent_state_changed", payload: parsed.data }
        : unknown(parsed.error.message);
    }
    case "session.updated": {
      const parsed =
        VoiceAgentSessionUpdatedEvent$inboundSchema.safeParse(payload);
      return parsed.success
        ? { name: "session_updated", payload: parsed.data }
        : unknown(parsed.error.message);
    }
    default:
      return unknown("Unknown or missing voice event type");
  }
}
