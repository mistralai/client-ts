import {
  ConnectionError,
  DisconnectReason,
  Room,
  RoomEvent,
  RpcError,
  Track,
  createLocalAudioTrack,
  type LocalAudioTrack,
  type RemoteParticipant,
  type RemoteTrack,
  type RemoteTrackPublication,
  type RpcInvocationData,
} from "livekit-client";

import { VoiceAgentConnectionError } from "../errors.js";
import type { AudioSessionCreateResponse } from "../../../models/components/index.js";
import { functionCallSchema, type FunctionHandler } from "../tools.js";
import type {
  AudioTrackEvent,
  UnhandledToolEvent,
  VoiceAgentErrorEvent,
  VoiceEventName,
  VoiceEvent,
} from "../events.js";
import { parseVoiceAgentEvent } from "../events.js";
import { decodeJsonPayload, errorMessage } from "../utils.js";
import {
  FUNCTION_TOOL_HANDLER_FAILED_CODE,
  FUNCTION_TOOL_INVALID_PAYLOAD_CODE,
  FUNCTION_TOOL_NO_HANDLER_CODE,
  FUNCTION_TOOL_RPC_METHOD,
  SESSION_UPDATE_RPC_METHOD,
  type EventCallback,
  type SessionUpdatePayload,
  type VoiceTransport,
  connectErrorMessage,
  malformedFunctionCallMessage,
  transportDisconnectReason,
  waitForAgentWithTimeout,
} from "./transport.js";

export class BrowserTransport implements VoiceTransport {
  readonly ownsAudioDevices = true;

  private readonly _session: AudioSessionCreateResponse;
  private readonly _emit: EventCallback;
  private _functionHandlers: FunctionHandler[];
  private _room: Room | null = null;
  private _localTrack: LocalAudioTrack | null = null;
  private readonly _attachedElements: HTMLMediaElement[] = [];
  private _removeRoomListeners: (() => void) | null = null;
  private _closing = false;
  private _reconnecting = false;
  private _disconnectErrorEmitted = false;
  private _pendingAgentDisconnect: VoiceAgentErrorEvent | null = null;
  private _agentDisconnectCheckQueued = false;
  private _markAgentPresent!: () => void;
  private readonly _agentPresent = new Promise<void>((resolve) => {
    this._markAgentPresent = resolve;
  });

  constructor(
    session: AudioSessionCreateResponse,
    opts: { emit: EventCallback; functionHandlers?: FunctionHandler[] },
  ) {
    this._session = session;
    this._emit = opts.emit;
    this._functionHandlers = opts.functionHandlers ?? [];
  }

  async start(): Promise<void> {
    const room = new Room({
      audioCaptureDefaults: {
        echoCancellation: true,
        noiseSuppression: true,
        autoGainControl: true,
      },
    });
    this._room = room;

    const onTrackSubscribed = this._onTrackSubscribed.bind(this);
    const onTrackUnsubscribed = this._onTrackUnsubscribed.bind(this);
    const onDataReceived = this._onDataReceived.bind(this);
    const onDisconnected = this._onDisconnected.bind(this);
    const onReconnecting = this._onReconnecting.bind(this);
    const onReconnected = this._onReconnected.bind(this);
    const onParticipantConnected = this._onParticipantConnected.bind(this);
    const onParticipantDisconnected =
      this._onParticipantDisconnected.bind(this);
    room.on(RoomEvent.TrackSubscribed, onTrackSubscribed);
    room.on(RoomEvent.TrackUnsubscribed, onTrackUnsubscribed);
    room.on(RoomEvent.DataReceived, onDataReceived);
    room.on(RoomEvent.Disconnected, onDisconnected);
    room.on(RoomEvent.Reconnecting, onReconnecting);
    room.on(RoomEvent.Reconnected, onReconnected);
    room.on(RoomEvent.ParticipantConnected, onParticipantConnected);
    room.on(RoomEvent.ParticipantDisconnected, onParticipantDisconnected);
    this._removeRoomListeners = () => {
      room.off(RoomEvent.TrackSubscribed, onTrackSubscribed);
      room.off(RoomEvent.TrackUnsubscribed, onTrackUnsubscribed);
      room.off(RoomEvent.DataReceived, onDataReceived);
      room.off(RoomEvent.Disconnected, onDisconnected);
      room.off(RoomEvent.Reconnecting, onReconnecting);
      room.off(RoomEvent.Reconnected, onReconnected);
      room.off(RoomEvent.ParticipantConnected, onParticipantConnected);
      room.off(RoomEvent.ParticipantDisconnected, onParticipantDisconnected);
    };

    try {
      await room.connect(
        this._session.serverUrl,
        this._session.participantToken,
      );
    } catch (err) {
      if (!(err instanceof ConnectionError)) throw err;
      throw new VoiceAgentConnectionError(
        connectErrorMessage(this._session.id, errorMessage(err), err.status),
        { cause: err },
      );
    }

    this._registerFunctionHandlers();
    if (this._hasAgentParticipant()) {
      this._markAgentPresent();
    }

    this._localTrack = await createLocalAudioTrack({
      echoCancellation: true,
      noiseSuppression: true,
      autoGainControl: true,
    });
    await room.localParticipant.publishTrack(
      this._localTrack.mediaStreamTrack,
      { source: Track.Source.Microphone },
    );

    this._emitNowait("audio_track", {
      track: this._localTrack.mediaStreamTrack,
      source: "local",
    } satisfies AudioTrackEvent);
  }

  private _registerFunctionHandlers(): void {
    this._room!.localParticipant.registerRpcMethod(
      FUNCTION_TOOL_RPC_METHOD,
      async (data: RpcInvocationData): Promise<string> => {
        let call;
        try {
          call = functionCallSchema.parse(decodeJsonPayload(data.payload));
        } catch (e) {
          throw new RpcError(
            FUNCTION_TOOL_INVALID_PAYLOAD_CODE,
            malformedFunctionCallMessage(e),
          );
        }
        // Read the live registry so _addFunctionHandlers takes effect mid-call.
        const tool = this._functionHandlers.find((t) => t.name === call.name);
        if (tool == null) {
          await this._emit("unhandled_tool", {
            name: call.name,
            arguments: call.arguments,
          } satisfies UnhandledToolEvent);
          throw new RpcError(
            FUNCTION_TOOL_NO_HANDLER_CODE,
            `No handler for function \`${call.name}\``,
          );
        }
        try {
          const raw =
            call.arguments == null ? undefined : JSON.stringify(call.arguments);
          return await tool.invoke(raw);
        } catch (e) {
          throw new RpcError(
            FUNCTION_TOOL_HANDLER_FAILED_CODE,
            `function \`${call.name}\` failed: ${errorMessage(e)}`,
          );
        }
      },
    );
  }

  async sendAudio(_audio: Uint8Array): Promise<void> {
    throw new VoiceAgentConnectionError(
      "sendAudio is not supported in the browser, audio input is captured with getUserMedia",
    );
  }

  async setInputEnabled(enabled: boolean): Promise<void> {
    if (this._localTrack == null) return;
    if (enabled) {
      await this._localTrack.unmute();
    } else {
      await this._localTrack.mute();
    }
  }

  _addFunctionHandlers(tools: FunctionHandler[]): void {
    // Handlers are only ever added or overridden, never dropped: the agent
    // applies tool changes at the next turn boundary, so a call already in
    // flight may still target a tool the latest update removed.
    const names = new Set(tools.map((t) => t.name));
    this._functionHandlers = [
      ...this._functionHandlers.filter((t) => !names.has(t.name)),
      ...tools,
    ];
  }

  waitForAgent(): Promise<void> {
    return this._agentPresent;
  }

  async sendSessionUpdate(payload: SessionUpdatePayload): Promise<string> {
    // start() returns before the agent joins; wait so an early update isn't rejected.
    await waitForAgentWithTimeout(this.waitForAgent());
    const room = this._room;
    if (room == null || this._closing) {
      throw new VoiceAgentConnectionError("Voice session is not connected");
    }
    return room.localParticipant.performRpc({
      destinationIdentity: findAgentIdentity(room),
      method: SESSION_UPDATE_RPC_METHOD,
      payload: JSON.stringify(payload),
      responseTimeout: 5000,
    });
  }

  async close(): Promise<void> {
    this._closing = true;
    this._markAgentPresent();
    try {
      await this._room?.disconnect();
    } finally {
      for (const element of this._attachedElements) {
        element.srcObject = null;
        element.remove();
      }
      this._attachedElements.length = 0;

      if (this._localTrack != null) {
        this._localTrack.stop();
        this._localTrack = null;
      }

      this._room = null;
      this._removeRoomListeners?.();
      this._removeRoomListeners = null;
    }
  }

  private _onTrackSubscribed(
    track: RemoteTrack,
    _publication: RemoteTrackPublication,
    _participant: RemoteParticipant,
  ): void {
    if (track.kind !== Track.Kind.Audio) return;

    const el = track.attach();
    this._attachedElements.push(el);

    this._emitNowait("audio_track", {
      track: track.mediaStreamTrack,
      source: "remote",
    } satisfies AudioTrackEvent);
  }

  private _onTrackUnsubscribed(
    track: RemoteTrack,
    _publication: RemoteTrackPublication,
    _participant: RemoteParticipant,
  ): void {
    const detached = track.detach();
    for (const el of detached) {
      const idx = this._attachedElements.indexOf(el);
      if (idx >= 0) this._attachedElements.splice(idx, 1);
      el.remove();
    }
  }

  private _onDataReceived(
    payload: Uint8Array,
    participant?: RemoteParticipant,
    _kind?: unknown,
    topic?: string,
  ): void {
    if (topic !== "voice_agent.events" || !participant?.isAgent) return;
    const event = parseVoiceAgentEvent(decodeJsonPayload(payload));
    this._emitNowait(event.name, event.payload);
  }

  private _onDisconnected(reason?: DisconnectReason): void {
    const mapped = transportDisconnectReason(reason, DisconnectReason);
    this._emitDisconnectError({
      type: "error",
      message: `Voice session disconnected unexpectedly: ${mapped}`,
      fatal: true,
      code: "session_disconnected",
      source: "transport",
      payload: { reason: mapped },
    });
  }

  private _onReconnecting(): void {
    this._reconnecting = true;
  }

  private _onReconnected(): void {
    this._reconnecting = false;
    this._queueAgentDisconnectCheck();
  }

  private _onParticipantConnected(participant: RemoteParticipant): void {
    if (participant.isAgent) {
      this._pendingAgentDisconnect = null;
      this._markAgentPresent();
    }
  }

  private _hasAgentParticipant(): boolean {
    return (
      this._room != null &&
      Array.from(this._room.remoteParticipants.values()).some(
        (participant) => participant.isAgent,
      )
    );
  }

  private _onParticipantDisconnected(
    participant: RemoteParticipant,
    reason?: DisconnectReason,
  ): void {
    if (!participant.isAgent) return;
    const mapped = transportDisconnectReason(reason, DisconnectReason);
    this._pendingAgentDisconnect = {
      type: "error",
      message: `Voice agent disconnected unexpectedly: ${mapped}`,
      fatal: true,
      code: "agent_disconnected",
      source: "transport",
      payload: { reason: mapped },
    };
    this._queueAgentDisconnectCheck();
  }

  private _queueAgentDisconnectCheck(): void {
    if (
      this._pendingAgentDisconnect == null ||
      this._agentDisconnectCheckQueued
    ) {
      return;
    }
    this._agentDisconnectCheckQueued = true;
    queueMicrotask(() => {
      this._agentDisconnectCheckQueued = false;
      if (this._closing || this._reconnecting) return;
      if (this._hasAgentParticipant()) {
        this._pendingAgentDisconnect = null;
        return;
      }
      const error = this._pendingAgentDisconnect;
      this._pendingAgentDisconnect = null;
      if (error != null) {
        this._emitDisconnectError(error);
      }
    });
  }

  private _emitDisconnectError(error: VoiceAgentErrorEvent): void {
    if (this._closing || this._disconnectErrorEmitted) return;
    this._disconnectErrorEmitted = true;
    this._pendingAgentDisconnect = null;
    this._emitNowait("error", error);
  }

  private _emitNowait(event: VoiceEventName, payload: VoiceEvent): void {
    this._emit(event, payload).catch(() => {});
  }
}

function findAgentIdentity(room: Room): string {
  for (const participant of room.remoteParticipants.values()) {
    if (participant.isAgent) return participant.identity;
  }
  throw new VoiceAgentConnectionError("No voice agent found in the session");
}
