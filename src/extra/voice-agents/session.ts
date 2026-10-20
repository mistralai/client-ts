import {
  AudioTurnConfig$outboundSchema,
  VoiceAgentSessionUpdatedEvent$inboundSchema,
  type AudioSessionCreateResponse,
  type AudioTurnConfig,
} from "../../models/components/index.js";

import type { AudioInterface } from "./audio/audio.js";
import { VoiceAgentConnectionError, VoiceAgentError } from "./errors.js";
import type {
  DisconnectReason,
  NodeVoiceEventMap,
  VoiceAgentErrorEvent,
  VoiceAgentSessionUpdatedEvent,
  VoiceAgentTranscriptEvent,
  VoiceEvent,
  VoiceEventMap,
  VoiceEventName,
} from "./events.js";
import { FunctionHandler, toWireTool, type Tool } from "./tools.js";
import type {
  EventCallback,
  SessionUpdatePayload,
  VoiceTransport,
} from "./transport/transport.js";
import { checkFunctionHandlers, errorMessage } from "./utils.js";

type EventHandler = (payload: any) => void | Promise<void>;
type Unsubscribe = () => void;

export interface SessionUpdateRequest {
  instructions?: string;
  tools?: (Tool | FunctionHandler)[];
  turn?: AudioTurnConfig;
}

export interface VoiceAgentSessionOptions {
  session: AudioSessionCreateResponse;
  functionHandlers?: FunctionHandler[] | undefined;
  createTransport: (emit: EventCallback) => Promise<VoiceTransport>;
  deleteSession: () => Promise<void>;
  audioInterface?: AudioInterface | undefined;
}

/** A created remote session, returned by `client.audio.sessions.init()`. */
export class VoiceAgentSession<
  Events extends VoiceEventMap = NodeVoiceEventMap,
> {
  readonly id: string;
  readonly session: AudioSessionCreateResponse;

  /** Local audio track (e.g. microphone). Available after `connect()` in browser runtimes. */
  get localTrack(): MediaStreamTrack | null {
    return this._localTrack;
  }

  /** Remote audio track (e.g. agent output). Available once the agent connects in browser runtimes. */
  get remoteTrack(): MediaStreamTrack | null {
    return this._remoteTrack;
  }

  /** Every turn received so far, oldest first, still readable after `close()`. */
  get transcript(): VoiceAgentTranscriptEvent[] {
    return [...this._transcript.values()];
  }

  private _transport: VoiceTransport | null = null;
  private readonly _createTransport: (
    emit: EventCallback,
  ) => Promise<VoiceTransport>;
  private readonly _functionHandlers: FunctionHandler[];
  private readonly _deleteSessionCallback: () => Promise<void>;
  private readonly _audioInterface?: AudioInterface | undefined;
  private readonly _handlers = new Map<string, EventHandler[]>();
  private _inputAbort: AbortController | null = null;
  private _inputEnabled = true;
  private _closeResolve: (() => void) | null = null;
  private readonly _closePromise: Promise<void>;
  private _connected = false;
  private _closed = false;
  private _fatalError: VoiceAgentConnectionError | null = null;
  private _localTrack: MediaStreamTrack | null = null;
  private _remoteTrack: MediaStreamTrack | null = null;
  private readonly _transcript = new Map<string, VoiceAgentTranscriptEvent>();

  constructor(opts: VoiceAgentSessionOptions) {
    this.session = opts.session;
    this._functionHandlers = opts.functionHandlers ?? [];
    this.id = opts.session.id;
    this._deleteSessionCallback = opts.deleteSession;
    this._audioInterface = opts.audioInterface;
    this._createTransport = opts.createTransport;
    this._closePromise = new Promise<void>((resolve) => {
      this._closeResolve = resolve;
    });
  }

  /** Closes the session, so `await using session = ...` always gives it up. */
  async [Symbol.asyncDispose](): Promise<void> {
    await this.close();
  }

  private _requireTransport(): VoiceTransport {
    if (this._closed) {
      throw new VoiceAgentConnectionError("Voice session is not running");
    }
    if (this._transport === null) {
      throw new VoiceAgentConnectionError(
        "Voice session is not connected: call connect() first",
      );
    }
    return this._transport;
  }

  on<K extends keyof Events & string>(
    event: K,
    handler: (e: Events[K]) => void | Promise<void>,
  ): Unsubscribe {
    let handlers = this._handlers.get(event);
    if (handlers == null) {
      handlers = [];
      this._handlers.set(event, handlers);
    }
    handlers.push(handler);

    return () => this.off(event, handler);
  }

  off<K extends keyof Events & string>(
    event: K,
    handler: (e: Events[K]) => void | Promise<void>,
  ): void {
    const handlers = this._handlers.get(event);
    if (handlers == null) return;
    const idx = handlers.indexOf(handler);
    if (idx >= 0) handlers.splice(idx, 1);
  }

  /**
   * Join the session created by `init()` and open the local audio devices.
   *
   * Register callbacks with `on()` before calling this. Failing here closes the
   * session, so the remote session is never left behind. A session connects
   * once: after it closes, create a new one.
   */
  async connect(): Promise<void> {
    if (this._closed) {
      throw new VoiceAgentConnectionError(
        "Cannot connect a closed voice session, create a new one",
      );
    }
    if (this._connected) return;
    this._connected = true;

    try {
      const configurationError = checkFunctionHandlers(
        this.session.functionTools ?? [],
        this._functionHandlers,
      );
      if (configurationError) await this._emit("error", configurationError);
      this._transport = await this._createTransport(
        this._handleTransportEvent.bind(this),
      );
      await this._transport.start();
    } catch (error) {
      await this._failStart(error, "transport");
    }
    if (this._audioInterface != null) {
      try {
        await this._audioInterface.start();
      } catch (error) {
        await this._failStart(error, "audio_interface");
      }
      this._inputAbort = new AbortController();
      void this._pumpInputAudio(this._inputAbort.signal);
    }
    this._warnWithoutAudio();
    await this._emit("connected", { sessionId: this.id });
  }

  private _warnWithoutAudio(): void {
    if (this._audioInterface != null) return;
    if (this._transport?.ownsAudioDevices === true) return;
    if ((this._handlers.get("audio")?.length ?? 0) > 0) return;
    console.warn(
      `voice session ${this.id} can neither hear nor speak: pass ` +
        "audioInterface: new DefaultAudioInterface() to init(), or subscribe " +
        'with session.on("audio", ...) and feed audio with session.sendAudio()',
    );
  }

  private async _failStart(
    error: unknown,
    source: VoiceAgentErrorEvent["source"],
  ): Promise<never> {
    const event: VoiceAgentErrorEvent = {
      type: "error",
      message: `Failed to start voice session: ${errorMessage(error)}`,
      fatal: true,
      code: "session_start_failed",
      source,
    };
    try {
      await this._emit("error", event);
    } finally {
      await this.close("start_failed");
    }
    if (error instanceof VoiceAgentError) throw error;
    throw new VoiceAgentConnectionError(event.message, {
      errorEvent: event,
      cause: error,
    });
  }

  async wait(): Promise<void> {
    await this._closePromise;
    if (this._fatalError !== null) throw this._fatalError;
  }

  async sendAudio(audio: Uint8Array): Promise<void> {
    try {
      await this._requireTransport().sendAudio(audio);
    } catch (error) {
      await this._emit("error", {
        type: "error",
        message: `Failed to send audio: ${errorMessage(error)}`,
        fatal: false,
        code: "audio_send_failed",
        source: "transport",
      });
      throw error;
    }
  }

  async setInputEnabled(enabled: boolean): Promise<void> {
    try {
      await this._requireTransport().setInputEnabled(enabled);
      this._inputEnabled = enabled;
    } catch (error) {
      await this._emit("error", {
        type: "error",
        message: `Failed to update audio input: ${errorMessage(error)}`,
        fatal: false,
        code: "audio_input_update_failed",
        source: "transport",
      });
      throw error;
    }
  }

  /**
   * Update the live session configuration.
   *
   * `instructions` and `tools` take effect at the next turn boundary;
   * `turn.allowInterruptions` applies immediately. The returned event carries the
   * full committed config as confirmed by the server. Every client, this
   * one included, also receives it as a `session_updated` event.
   */
  async update(
    config: SessionUpdateRequest,
  ): Promise<VoiceAgentSessionUpdatedEvent> {
    const payload: SessionUpdatePayload = {};
    if (config.instructions !== undefined) {
      payload.instructions = config.instructions;
    }
    if (config.tools !== undefined) {
      payload.tools = config.tools.map(toWireTool);
    }
    if (config.turn !== undefined) {
      payload.turn = AudioTurnConfig$outboundSchema.parse(config.turn);
    }

    const transport = this._requireTransport();
    const response = await transport.sendSessionUpdate(payload);
    const result = parseSessionUpdatedEvent(response);

    // The server response is the source of truth for which function tools are
    // active; register the handlers it confirmed and keep existing ones.
    const handlersByName = new Map(
      (config.tools ?? [])
        .filter((t) => t instanceof FunctionHandler)
        .map((t) => [t.name, t]),
    );
    transport._addFunctionHandlers(
      (result.session.tools ?? []).flatMap((t) => {
        const tool =
          t.type === "function"
            ? handlersByName.get(t.function.name)
            : undefined;
        return tool == null ? [] : [tool];
      }),
    );
    return result;
  }

  async close(reason?: DisconnectReason): Promise<void> {
    if (this._closed) return;
    this._closed = true;

    if (this._inputAbort != null) {
      this._inputAbort.abort();
      this._inputAbort = null;
    }

    if (this._transport !== null) {
      try {
        await this._transport.close();
      } catch (error) {
        await this._emitCleanupError(
          `Failed to close the voice connection: ${errorMessage(error)}`,
          "transport_close_failed",
          "transport",
        );
      }
    }
    if (this._audioInterface != null) {
      try {
        await this._audioInterface.stop();
      } catch (error) {
        await this._emitCleanupError(
          `Failed to stop audio interface: ${errorMessage(error)}`,
          "audio_stop_failed",
          "audio_interface",
        );
      }
    }

    try {
      await this._deleteSessionCallback();
    } catch (error) {
      await this._emitCleanupError(
        `Failed to delete remote voice session: ${errorMessage(error)}`,
        "session_delete_failed",
        "rest",
      );
    }
    try {
      if (this._transport !== null) {
        await this._emit("disconnected", { sessionId: this.id, reason });
      }
    } finally {
      this._closeResolve?.();
    }
  }

  private async _pumpInputAudio(signal: AbortSignal): Promise<void> {
    const audioInterface = this._audioInterface;
    if (audioInterface == null) return;
    try {
      const transport = this._requireTransport();
      await transport.waitForAgent?.();
      if (signal.aborted) return;
      for await (const chunk of audioInterface.inputAudio()) {
        if (signal.aborted) return;
        if (!this._inputEnabled) continue;
        await transport.sendAudio(chunk);
      }
    } catch (err) {
      if (signal.aborted) return;
      try {
        await this._emit("error", {
          type: "error",
          message: errorMessage(err),
          fatal: true,
          code: "audio_input_error",
          source: "audio_interface",
        });
      } finally {
        await this.close("audio_input_error");
      }
    }
  }

  private async _handleTransportEvent(
    event: VoiceEventName,
    payload: VoiceEvent,
  ): Promise<void> {
    if (event === "transcript" && "role" in payload) {
      this._transcript.set(payload.id, payload);
    }
    if (event === "audio_track" && "track" in payload) {
      if (payload.source === "local") {
        this._localTrack = payload.track;
        return;
      }
      this._remoteTrack = payload.track;
    }
    if (this._audioInterface != null) {
      if (event === "audio" && payload instanceof Uint8Array) {
        try {
          await this._audioInterface.outputAudio(payload);
        } catch (error) {
          try {
            await this._emit("error", {
              type: "error",
              message: `Failed to play agent audio: ${errorMessage(error)}`,
              fatal: true,
              code: "audio_output_error",
              source: "audio_interface",
            });
          } finally {
            void this.close("audio_output_error").catch(() => {});
          }
          return;
        }
      }
    }
    const closeOnError =
      event === "error" &&
      typeof payload === "object" &&
      "fatal" in payload &&
      payload.fatal &&
      !this._closed;
    try {
      await this._emit(event, payload);
    } finally {
      if (closeOnError && !this._closed) {
        void this.close("error").catch(() => {});
      }
    }
  }

  private async _emit(
    event: VoiceEventName,
    payload: VoiceEvent,
  ): Promise<void> {
    if (
      event === "error" &&
      typeof payload === "object" &&
      "fatal" in payload &&
      payload.fatal &&
      "message" in payload &&
      this._fatalError === null
    ) {
      this._fatalError = new VoiceAgentConnectionError(payload.message, {
        errorEvent: payload,
      });
    }
    const handlers = this._handlers.get(event);
    if (handlers == null || handlers.length === 0) {
      if (event === "error") {
        if (typeof payload === "object" && "message" in payload)
          if ("fatal" in payload && payload.fatal)
            console.error("voice agent error:", payload.message);
          else console.warn("voice agent error:", payload.message);
      }
      return;
    }
    // A snapshot: a handler that unsubscribes itself must not shift the rest.
    for (const handler of handlers.slice()) {
      try {
        await handler(payload);
      } catch (error) {
        console.error(`voice agent ${event} handler failed:`, error);
      }
    }
  }

  private async _emitCleanupError(
    message: string,
    code: string,
    source: VoiceAgentErrorEvent["source"],
  ): Promise<void> {
    try {
      await this._emit("error", {
        type: "error",
        message,
        fatal: false,
        code,
        source,
      });
    } catch (error) {
      console.error("voice agent cleanup error handler failed:", error);
    }
  }
}

function parseSessionUpdatedEvent(
  response: string,
): VoiceAgentSessionUpdatedEvent {
  let raw: unknown;
  try {
    raw = JSON.parse(response);
  } catch (error) {
    throw new VoiceAgentConnectionError(
      "Invalid session update response: not JSON",
      { cause: error },
    );
  }
  const parsed = VoiceAgentSessionUpdatedEvent$inboundSchema.safeParse(raw);
  if (!parsed.success) {
    throw new VoiceAgentConnectionError(
      `Invalid session update response: ${parsed.error.message}`,
      { cause: parsed.error },
    );
  }
  return parsed.data;
}
