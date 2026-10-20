import { createRequire } from "node:module";
import { dirname, join } from "node:path";

import {
  AudioFrame,
  AudioSource,
  AudioStream,
  ConnectError,
  DisconnectReason,
  LocalAudioTrack,
  ParticipantKind,
  Room,
  RoomEvent,
  RpcError,
  TrackKind,
  TrackPublishOptions,
  TrackSource,
  type LocalTrackPublication,
  type RemoteTrack,
  type RemoteTrackPublication,
  type RemoteParticipant,
  type RpcInvocationData,
} from "@livekit/rtc-node";

import { BYTES_PER_SAMPLE, CHANNELS, SAMPLE_RATE } from "../audio/audio.js";
import { VoiceAgentConnectionError } from "../errors.js";
import type { AudioSessionCreateResponse } from "../../../models/components/index.js";
import { functionCallSchema, type FunctionHandler } from "../tools.js";
import type {
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
  isAgentOutputTrack,
  isAgentParticipant,
  malformedFunctionCallMessage,
  transportDisconnectReason,
  waitForAgentWithTimeout,
} from "./transport.js";

let liveKitLoggerQuieted = false;

/**
 * LiveKit is an implementation detail of this SDK, so its per-frame debug
 * stream should not land in a caller's stdout. It logs at `debug` unless
 * NODE_ENV is "production", and setting NODE_ENV ourselves would change how
 * every other library in the process behaves, so reach its logger directly.
 *
 * The package's `exports` map publishes only ".", hence resolving the file by
 * path. Best effort by design: an upstream layout change costs log tidiness
 * and nothing else. A level the caller chose themselves is left alone.
 */
function quietLiveKitLogger(): void {
  if (liveKitLoggerQuieted) return;
  liveKitLoggerQuieted = true;
  try {
    const require_ = createRequire(import.meta.url);
    const entry = require_.resolve("@livekit/rtc-node");
    const { log } = require_(join(dirname(entry), "log.cjs")) as {
      log?: { level?: string };
    };
    if (log?.level === "debug") log.level = "warn";
  } catch {
    // Leave the logger as noisy as LiveKit configured it.
  }
}

export class NodeTransport implements VoiceTransport {
  private readonly _session: AudioSessionCreateResponse;
  private readonly _emit: EventCallback;
  private _functionHandlers: FunctionHandler[];
  private _room: Room | null = null;
  private _audioSource: AudioSource | null = null;
  private _inputTrack: LocalAudioTrack | null = null;
  private _publication: LocalTrackPublication | null = null;
  private _removeRoomListeners: (() => void) | null = null;
  private readonly _mixerBuffers = new Set<PcmBuffer>();
  private _mixerStarted = false;
  private readonly _tasks = new Set<{ cancel(): void }>();
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
    quietLiveKitLogger();
    const room = new Room();
    this._room = room;
    const onTrackSubscribed = this._onTrackSubscribed.bind(this);
    const onDataReceived = this._onDataReceived.bind(this);
    const onDisconnected = this._onDisconnected.bind(this);
    const onReconnecting = this._onReconnecting.bind(this);
    const onReconnected = this._onReconnected.bind(this);
    const onParticipantConnected = this._onParticipantConnected.bind(this);
    const onParticipantDisconnected =
      this._onParticipantDisconnected.bind(this);
    room.on(RoomEvent.TrackSubscribed, onTrackSubscribed);
    room.on(RoomEvent.DataReceived, onDataReceived);
    room.on(RoomEvent.Disconnected, onDisconnected);
    room.on(RoomEvent.Reconnecting, onReconnecting);
    room.on(RoomEvent.Reconnected, onReconnected);
    room.on(RoomEvent.ParticipantConnected, onParticipantConnected);
    room.on(RoomEvent.ParticipantDisconnected, onParticipantDisconnected);
    this._removeRoomListeners = () => {
      room.off(RoomEvent.TrackSubscribed, onTrackSubscribed);
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
      if (!(err instanceof ConnectError)) throw err;
      throw new VoiceAgentConnectionError(
        connectErrorMessage(this._session.id, err.message),
        { cause: err },
      );
    }
    this._registerFunctionHandlers();
    await this._publishInputTrack();
    if (this._hasAgentParticipant()) {
      this._markAgentPresent();
    }
  }

  waitForAgent(): Promise<void> {
    return this._agentPresent;
  }

  private _registerFunctionHandlers(): void {
    this._room!.localParticipant!.registerRpcMethod(
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

  async sendAudio(audio: Uint8Array): Promise<void> {
    if (this._audioSource == null) {
      throw new VoiceAgentConnectionError("Audio input track is not ready");
    }
    const samplesPerChannel = Math.floor(
      audio.byteLength / (BYTES_PER_SAMPLE * CHANNELS),
    );
    const frame = new AudioFrame(
      toInt16Samples(audio),
      SAMPLE_RATE,
      CHANNELS,
      samplesPerChannel,
    );
    await this._audioSource.captureFrame(frame);
  }

  async setInputEnabled(enabled: boolean): Promise<void> {
    const track = this._inputTrack ?? this._publication?.track ?? null;
    if (track == null) return;

    if (typeof (track as any).setEnabled === "function") {
      await (track as any).setEnabled(enabled);
    } else if (typeof (track as any).setMuted === "function") {
      await (track as any).setMuted(!enabled);
    } else if (enabled && typeof (track as any).unmute === "function") {
      await (track as any).unmute();
    } else if (!enabled && typeof (track as any).mute === "function") {
      await (track as any).mute();
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

  async sendSessionUpdate(payload: SessionUpdatePayload): Promise<string> {
    // start() returns before the agent joins; wait so an early update isn't rejected.
    await waitForAgentWithTimeout(this.waitForAgent());
    const room = this._room;
    if (room == null || this._closing) {
      throw new VoiceAgentConnectionError("Voice session is not connected");
    }
    return room.localParticipant!.performRpc({
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
      for (const task of this._tasks) {
        task.cancel();
      }
      this._tasks.clear();
      this._mixerBuffers.clear();
      await this._releaseRoom();
    }
  }

  private async _releaseRoom(): Promise<void> {
    const audioSource = this._audioSource;
    this._room = null;
    this._audioSource = null;
    this._inputTrack = null;
    this._publication = null;
    this._removeRoomListeners?.();
    this._removeRoomListeners = null;
    if (audioSource != null) {
      await audioSource.close().catch(() => {});
    }
  }

  private async _publishInputTrack(): Promise<void> {
    const room = this._room!;
    this._audioSource = new AudioSource(SAMPLE_RATE, CHANNELS);
    this._inputTrack = LocalAudioTrack.createAudioTrack(
      "mistral-voice-input",
      this._audioSource,
    );
    const options = new TrackPublishOptions();
    options.source = TrackSource.SOURCE_MICROPHONE;
    this._publication = await room.localParticipant!.publishTrack(
      this._inputTrack,
      options,
    );
  }

  private _onTrackSubscribed(
    track: RemoteTrack,
    publication: RemoteTrackPublication,
    _participant: RemoteParticipant,
  ): void {
    if (track.kind !== TrackKind.KIND_AUDIO) return;
    if (!isAgentOutputTrack(track, publication, TrackSource.SOURCE_MICROPHONE))
      return;

    const stream = new AudioStream(track, {
      sampleRate: SAMPLE_RATE,
      numChannels: CHANNELS,
    });
    const buffer = new PcmBuffer();
    this._mixerBuffers.add(buffer);

    let cancelled = false;
    const handle = {
      cancel: () => {
        cancelled = true;
      },
    };
    this._tasks.add(handle);
    this._readTrackInto(stream, buffer, () => cancelled)
      .finally(() => {
        this._tasks.delete(handle);
        this._mixerBuffers.delete(buffer);
      })
      .catch(() => {});

    if (!this._mixerStarted) {
      this._mixerStarted = true;
      let pumpCancelled = false;
      const pumpHandle = {
        cancel: () => {
          pumpCancelled = true;
        },
      };
      this._tasks.add(pumpHandle);
      this._pumpMixer(() => pumpCancelled)
        .finally(() => this._tasks.delete(pumpHandle))
        .catch(() => {});
    }
  }

  private _onDataReceived(
    payload: Uint8Array,
    participant?: RemoteParticipant,
    _kind?: unknown,
    topic?: string,
  ): void {
    if (
      topic !== "voice_agent.events" ||
      participant == null ||
      !isAgentParticipant(participant, ParticipantKind.AGENT)
    )
      return;
    const event = parseVoiceAgentEvent(decodeJsonPayload(payload));
    this._emitNowait(event.name, event.payload);
  }

  private async _readTrackInto(
    stream: AudioStream,
    buffer: PcmBuffer,
    isCancelled: () => boolean,
  ): Promise<void> {
    const reader = stream.getReader();
    try {
      for (;;) {
        const { done, value } = await reader.read();
        if (done || isCancelled()) break;
        const d = value.data;
        buffer.push(new Int16Array(d.buffer, d.byteOffset, d.length));
      }
    } catch (err) {
      if (!isCancelled() && !this._closing) {
        await this._emit("error", {
          type: "error",
          message: `Error while receiving agent audio: ${errorMessage(err)}`,
          fatal: true,
          code: "audio_receive_error",
          source: "transport",
        });
      }
    } finally {
      reader.releaseLock();
      await stream.cancel();
    }
  }

  private async _pumpMixer(isCancelled: () => boolean): Promise<void> {
    const blockSamples = Math.floor(SAMPLE_RATE / 50); // 20ms
    const blockMs = 1000 / 50;
    const acc = new Int32Array(blockSamples);
    let nextAt = performance.now();
    try {
      while (!isCancelled()) {
        acc.fill(0);
        for (const buf of this._mixerBuffers) {
          const chunk = buf.take(blockSamples);
          for (let i = 0; i < chunk.length; i++) acc[i]! += chunk[i]!;
        }
        const mixed = new Int16Array(blockSamples);
        for (let i = 0; i < blockSamples; i++) {
          const s = acc[i]!;
          mixed[i] = s > 32767 ? 32767 : s < -32768 ? -32768 : s;
        }
        await this._emit(
          "audio",
          new Uint8Array(mixed.buffer, mixed.byteOffset, mixed.byteLength),
        );
        nextAt += blockMs;
        await sleep(nextAt - performance.now());
      }
    } catch (err) {
      if (!isCancelled()) {
        await this._emit("error", {
          type: "error",
          message: `Error while receiving agent audio: ${errorMessage(err)}`,
          fatal: true,
          code: "audio_receive_error",
          source: "transport",
        });
      }
    }
  }

  private _onDisconnected(reason: DisconnectReason): void {
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
    if (isAgentParticipant(participant, ParticipantKind.AGENT)) {
      this._pendingAgentDisconnect = null;
      this._markAgentPresent();
    }
  }

  private _hasAgentParticipant(): boolean {
    return (
      this._room != null &&
      Array.from(this._room.remoteParticipants.values()).some((participant) =>
        isAgentParticipant(participant, ParticipantKind.AGENT),
      )
    );
  }

  private _onParticipantDisconnected(participant: RemoteParticipant): void {
    if (!isAgentParticipant(participant, ParticipantKind.AGENT)) return;
    const mapped = transportDisconnectReason(
      participant.disconnectReason,
      DisconnectReason,
    );
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

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, Math.max(0, ms)));
}

function toInt16Samples(audio: Uint8Array): Int16Array {
  const samples = Math.floor(audio.byteLength / BYTES_PER_SAMPLE);
  if (audio.byteOffset % BYTES_PER_SAMPLE === 0) {
    return new Int16Array(audio.buffer, audio.byteOffset, samples);
  }
  const aligned = new Int16Array(samples);
  new Uint8Array(aligned.buffer).set(
    audio.subarray(0, samples * BYTES_PER_SAMPLE),
  );
  return aligned;
}

// Per-track ring of PCM samples. Reader pushes frames; the mixer pump takes
// fixed blocks. Capped at ~1s so a runaway/stuck reader can't grow unbounded.
class PcmBuffer {
  private chunks: Int16Array[] = [];
  private length = 0;
  private static readonly MAX = SAMPLE_RATE;

  push(samples: Int16Array): void {
    this.chunks.push(samples);
    this.length += samples.length;
    while (this.length > PcmBuffer.MAX && this.chunks.length > 1) {
      this.length -= this.chunks.shift()!.length;
    }
  }

  take(n: number): Int16Array {
    const out = new Int16Array(n);
    let filled = 0;
    while (filled < n && this.chunks.length > 0) {
      const head = this.chunks[0]!;
      const need = n - filled;
      if (head.length <= need) {
        out.set(head, filled);
        filled += head.length;
        this.chunks.shift();
      } else {
        out.set(head.subarray(0, need), filled);
        this.chunks[0] = head.subarray(need);
        filled += need;
      }
    }
    this.length -= filled;
    return out;
  }
}

function findAgentIdentity(room: Room): string {
  for (const participant of room.remoteParticipants.values()) {
    if (isAgentParticipant(participant, ParticipantKind.AGENT))
      return participant.identity;
  }
  throw new VoiceAgentConnectionError("No voice agent found in the session");
}
