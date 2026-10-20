import type { ChildProcess, spawn } from "node:child_process";

import {
  VoiceAgentConnectionError,
  VoiceAgentDependencyError,
  type VoiceAgentError,
} from "../errors.js";
import type { AudioInterface } from "./audio.js";
import {
  BYTES_PER_SAMPLE,
  CHANNELS,
  FRAME_DURATION_MS,
  SAMPLE_RATE,
} from "./audio.js";

type SpawnFn = typeof spawn;

type FfiMessage = { case: string; value: Record<string, unknown> };

type FfiBindings = {
  FfiRequest: new (data: { message: FfiMessage }) => {
    toBinary(): Uint8Array;
  };
  FfiResponse: {
    fromBinary(data: Uint8Array): { message: { value?: unknown } };
  };
  FfiHandle: new (handle: bigint) => { dispose(): void };
  livekitFfiRequest(data: Uint8Array): Uint8Array;
  livekitRetrievePtr(data: Uint8Array): bigint;
};

export type DefaultAudioInterfaceOptions = {
  /** Remove the agent's own voice from the microphone input. Defaults to `true`. */
  echoCancellation?: boolean;
  /**
   * Playback-to-capture delay reported to the canceller. Defaults to the
   * `play` buffer plus the queued output, which is an estimate: `sox` gives no
   * device timestamp. Override it if echo persists.
   */
  echoCancellationDelayMs?: number;
  noiseSuppression?: boolean;
  highPassFilter?: boolean;
  autoGainControl?: boolean;
};

type AudioProcessingOptions = {
  noiseSuppression: boolean;
  highPassFilter: boolean;
  autoGainControl: boolean;
};

type AudioProcess = {
  child: ChildProcess;
  spawned: Promise<void>;
  terminated: Promise<VoiceAgentError>;
  failure: () => VoiceAgentError | null;
};

const SOX_INSTALL_HINTS: Record<string, string> = {
  darwin: "Install SoX: brew install sox",
  linux: "Install SoX: apt install sox",
  win32:
    "Install SoX: scoop install sox. The official SoX build for Windows ships " +
    "only sox.exe, so a manual install also needs copy sox.exe rec.exe and " +
    "copy sox.exe play.exe in the SoX directory",
};

const DEFAULT_SOX_INSTALL_HINT =
  "Install SoX: brew install sox (macOS), apt install sox (Linux) or " +
  "scoop install sox (Windows)";

export function soxInstallHint(platform: NodeJS.Platform): string {
  return SOX_INSTALL_HINTS[platform] ?? DEFAULT_SOX_INSTALL_HINT;
}

const MICROPHONE_PERMISSION_PATHS: Record<string, string> = {
  darwin: "System Settings > Privacy & Security > Microphone",
  win32: "Settings > Privacy & security > Microphone",
};

const DEVICE_NOUNS = { input: "microphone", output: "speaker" } as const;

const NO_DEVICE_PATTERN =
  /no default audio device|can ?not find audio device|no such device|no audio device/i;

const DEVICE_BUSY_PATTERN =
  /resource busy|device is busy|already allocated|already in use|used by another/i;

export function audioDeviceHint(options: {
  device: "input" | "output";
  platform: NodeJS.Platform;
  stderr: string;
}): string {
  const noun = DEVICE_NOUNS[options.device];
  if (NO_DEVICE_PATTERN.test(options.stderr)) {
    return `No ${noun} is available, connect one and retry`;
  }
  if (DEVICE_BUSY_PATTERN.test(options.stderr)) {
    return (
      `The ${noun} is held by another application, close whatever else is ` +
      "using it and retry"
    );
  }
  const permissionPath = MICROPHONE_PERMISSION_PATHS[options.platform];
  if (options.device === "input" && permissionPath != null) {
    return (
      "The microphone could not be opened, the operating system may not have " +
      `granted access. Allow it under ${permissionPath}, then rerun`
    );
  }
  return `The default audio ${options.device} device is unavailable or could not be opened`;
}

const RTC_NODE_PACKAGE = "@livekit/rtc-node";

const BYTES_PER_MS = (SAMPLE_RATE * CHANNELS * BYTES_PER_SAMPLE) / 1000;

const SOX_BUFFER_BYTES = BYTES_PER_MS * FRAME_DURATION_MS;

/**
 * Reported to the echo canceller on top of our own queue, to cover `play`'s
 * own buffering and the speaker-to-microphone path we cannot measure.
 *
 * Measured against the WebRTC canceller: reporting at or above the real delay
 * attenuates by 16-24 dB and overshooting costs nothing, while reporting under
 * it collapses to 4-13 dB because the echo falls outside the search window. So
 * this errs high on purpose.
 */
const PLAYBACK_PATH_LATENCY_MS = 250;

const APM_FRAME_BYTES = (SAMPLE_RATE / 100) * CHANNELS * BYTES_PER_SAMPLE;

const OUTPUT_QUEUE_MAX_MS = 300;

const OUTPUT_QUEUE_MAX_BYTES =
  (SAMPLE_RATE * CHANNELS * BYTES_PER_SAMPLE * OUTPUT_QUEUE_MAX_MS) / 1000;

/** Input args for `rec`: record raw PCM from mic to stdout. */
const REC_ARGS = [
  "--buffer",
  String(SOX_BUFFER_BYTES),
  "-q",
  "-L",
  "-t",
  "raw",
  "-b",
  "16",
  "-e",
  "signed-integer",
  "-r",
  String(SAMPLE_RATE),
  "-c",
  String(CHANNELS),
  "-",
];

/** Args for `play`: read raw PCM from stdin, play to default audio device. */
const PLAY_ARGS = [
  "--buffer",
  String(SOX_BUFFER_BYTES),
  "-q",
  "-L",
  "--ignore-length",
  "-t",
  "raw",
  "-b",
  "16",
  "-e",
  "signed-integer",
  "-r",
  String(SAMPLE_RATE),
  "-c",
  String(CHANNELS),
  "-",
];

/** Flush interval in ms — matches the frame duration for minimal latency. */
const FLUSH_INTERVAL_MS = 20;
const STARTUP_GRACE_PERIOD_MS = 250;
const STDERR_MAX_CHARACTERS = 4_096;

function isMissingBinaryError(err: unknown): boolean {
  return (
    typeof err === "object" &&
    err !== null &&
    "code" in err &&
    (err as { code?: unknown }).code === "ENOENT"
  );
}

function errorMessage(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}

function monitorAudioProcess(
  child: ChildProcess,
  options: {
    command: string;
    device: "input" | "output";
    platform: NodeJS.Platform;
  },
): AudioProcess {
  let stderr = "";
  let failure: VoiceAgentError | null = null;
  let resolveTermination: (error: VoiceAgentError) => void;
  const terminated = new Promise<VoiceAgentError>((resolve) => {
    resolveTermination = resolve;
  });

  const recordFailure = (error: VoiceAgentError): void => {
    if (failure != null) return;
    failure = error;
    resolveTermination(error);
  };

  child.stderr?.setEncoding("utf8");
  child.stderr?.on("data", (chunk: string) => {
    stderr = (stderr + chunk).slice(-STDERR_MAX_CHARACTERS);
  });

  const spawned = new Promise<void>((resolve, reject) => {
    child.once("spawn", resolve);
    child.once("error", (error: Error) => {
      const exception = isMissingBinaryError(error)
        ? new VoiceAgentDependencyError(
            `'${options.command}' not found. ${soxInstallHint(options.platform)}`,
          )
        : new VoiceAgentConnectionError(
            `Failed to start '${options.command}' for default audio ${options.device}: ${errorMessage(error)}`,
            { cause: error },
          );
      recordFailure(exception);
      reject(exception);
    });
  });

  child.stdin?.on("error", (error: Error) => {
    recordFailure(
      new VoiceAgentConnectionError(
        `The default audio ${options.device} device became unavailable: ${errorMessage(error)}`,
        { cause: error },
      ),
    );
  });

  child.once("exit", (code, signal) => {
    const details = stderr.trim();
    const outcome =
      signal == null ? `exit code ${String(code)}` : `signal ${signal}`;
    const hint = audioDeviceHint({
      device: options.device,
      platform: options.platform,
      stderr,
    });
    recordFailure(
      new VoiceAgentConnectionError(
        `${hint}. '${options.command}' exited with ${outcome}` +
          (details ? `. ${details}` : ""),
      ),
    );
  });

  return {
    child,
    spawned,
    terminated,
    failure: () => failure,
  };
}

async function waitForStartup(processes: AudioProcess[]): Promise<void> {
  const rejectOnTermination = processes.map((process) =>
    process.terminated.then((error) => {
      throw error;
    }),
  );
  await Promise.race([
    new Promise<void>((resolve) =>
      setTimeout(resolve, STARTUP_GRACE_PERIOD_MS),
    ),
    ...rejectOnTermination,
  ]);
}

async function assertSoxBinary(command: string): Promise<void> {
  const { spawn } = await import("node:child_process");
  const child = spawn(command, ["--version"], { stdio: "ignore" });
  await new Promise<void>((resolve, reject) => {
    child.once("spawn", resolve);
    child.once("error", (error: Error) => {
      reject(
        isMissingBinaryError(error)
          ? new VoiceAgentDependencyError(
              `'${command}' not found. ${soxInstallHint(process.platform)}`,
            )
          : new VoiceAgentConnectionError(
              `Failed to start '${command}': ${errorMessage(error)}`,
              { cause: error },
            ),
      );
    });
  });
  child.unref();
}

async function loadFfiBindings(): Promise<FfiBindings> {
  const { createRequire } = await import("node:module");
  try {
    const rtcNodePath = createRequire(import.meta.url).resolve(
      RTC_NODE_PACKAGE,
    );
    return createRequire(rtcNodePath)(
      "@livekit/rtc-ffi-bindings",
    ) as FfiBindings;
  } catch (error) {
    throw new VoiceAgentDependencyError(
      `Echo cancellation needs an optional peer dependency: npm install ${RTC_NODE_PACKAGE}`,
      { cause: error },
    );
  }
}

class EchoCanceller {
  private readonly _ffi: FfiBindings;
  private readonly _handle: bigint;
  private _capture: Buffer = Buffer.alloc(0);
  private _render: Buffer = Buffer.alloc(0);
  private _failure: VoiceAgentError | null = null;

  private constructor(ffi: FfiBindings, handle: bigint) {
    this._ffi = ffi;
    this._handle = handle;
  }

  static async create(options: AudioProcessingOptions): Promise<EchoCanceller> {
    const ffi = await loadFfiBindings();
    const response = EchoCanceller._request(ffi, {
      case: "newApm",
      value: {
        echoCancellerEnabled: true,
        gainControllerEnabled: options.autoGainControl,
        highPassFilterEnabled: options.highPassFilter,
        noiseSuppressionEnabled: options.noiseSuppression,
      },
    }) as { apm?: { handle?: { id?: bigint } } } | undefined;
    const handle = response?.apm?.handle?.id;
    if (handle == null) {
      throw new VoiceAgentConnectionError(
        "Failed to create the echo canceller",
      );
    }
    return new EchoCanceller(ffi, handle);
  }

  processCapture(audio: Uint8Array, delayMs: number): Buffer {
    if (this._failure != null) throw this._failure;
    this._capture = Buffer.concat([this._capture, audio]);
    const frames = this._takeFrames("_capture");
    if (frames.byteLength === 0) return frames;
    // Without the delay the canceller aligns the speaker stream against the
    // wrong point in time and cancels almost nothing.
    EchoCanceller._request(this._ffi, {
      case: "apmSetStreamDelay",
      value: { apmHandle: this._handle, delayMs },
    });
    const failure = this._processFrames("apmProcessStream", frames);
    if (failure != null) throw failure;
    return frames;
  }

  processRender(audio: Uint8Array): void {
    this._render = Buffer.concat([this._render, audio]);
    this._failure ??= this._processFrames(
      "apmProcessReverseStream",
      this._takeFrames("_render"),
    );
  }

  close(): void {
    new this._ffi.FfiHandle(this._handle).dispose();
  }

  private _takeFrames(buffer: "_capture" | "_render"): Buffer {
    const pending = this[buffer];
    const length = pending.byteLength - (pending.byteLength % APM_FRAME_BYTES);
    this[buffer] = Buffer.from(pending.subarray(length));
    return Buffer.from(pending.subarray(0, length));
  }

  private _processFrames(
    kind: "apmProcessStream" | "apmProcessReverseStream",
    frames: Buffer,
  ): VoiceAgentError | null {
    for (
      let offset = 0;
      offset < frames.byteLength;
      offset += APM_FRAME_BYTES
    ) {
      const frame = frames.subarray(offset, offset + APM_FRAME_BYTES);
      const response = EchoCanceller._request(this._ffi, {
        case: kind,
        value: {
          apmHandle: this._handle,
          dataPtr: this._ffi.livekitRetrievePtr(frame),
          size: frame.byteLength,
          sampleRate: SAMPLE_RATE,
          numChannels: CHANNELS,
        },
      }) as { error?: string } | undefined;
      if (response?.error) {
        return new VoiceAgentConnectionError(
          `Echo cancellation failed: ${response.error}`,
        );
      }
    }
    return null;
  }

  private static _request(ffi: FfiBindings, message: FfiMessage): unknown {
    const request = new ffi.FfiRequest({ message });
    return ffi.FfiResponse.fromBinary(ffi.livekitFfiRequest(request.toBinary()))
      .message.value;
  }
}

export class DefaultAudioInterface implements AudioInterface {
  private readonly _echoCancellation: boolean;
  private readonly _audioProcessing: AudioProcessingOptions;
  private _echoCanceller: EchoCanceller | null = null;
  private _recorder: AudioProcess | null = null;
  private _player: AudioProcess | null = null;
  private _running = false;
  private readonly _outputQueue: Buffer[] = [];
  private _flushTimer: ReturnType<typeof setInterval> | null = null;
  private _playbackEndsAt = 0;
  private readonly _echoCancellationDelayMs: number | undefined;

  constructor(options: DefaultAudioInterfaceOptions = {}) {
    this._echoCancellation = options.echoCancellation ?? true;
    this._echoCancellationDelayMs = options.echoCancellationDelayMs;
    this._audioProcessing = {
      noiseSuppression: options.noiseSuppression ?? true,
      highPassFilter: options.highPassFilter ?? true,
      autoGainControl: options.autoGainControl ?? true,
    };
  }

  async preflight(): Promise<void> {
    await assertSoxBinary("rec");
    if (this._echoCancellation) await loadFfiBindings();
  }

  async start(): Promise<void> {
    if (this._running) {
      throw new VoiceAgentConnectionError(
        "Default audio interface is already running",
      );
    }
    this._running = true;

    try {
      if (this._echoCancellation) {
        this._echoCanceller = await EchoCanceller.create(this._audioProcessing);
      }

      const { spawn } = await import("node:child_process");

      this._recorder = monitorAudioProcess(
        spawn("rec", REC_ARGS, {
          stdio: ["ignore", "pipe", "pipe"],
        }),
        {
          command: "rec",
          device: "input",
          platform: process.platform,
        },
      );
      await this._recorder.spawned;
      const recorderFailure = this._recorder.failure();
      if (recorderFailure != null) throw recorderFailure;

      this._player = this._spawnPlayer(spawn);
      await this._player.spawned;
      const playerFailure = this._player.failure();
      if (playerFailure != null) throw playerFailure;

      await waitForStartup([this._recorder, this._player]);

      this._flushTimer = setInterval(
        () => this._flushOutput(),
        FLUSH_INTERVAL_MS,
      );
    } catch (error) {
      await this.stop();
      throw error;
    }
  }

  async *inputAudio(): AsyncGenerator<Uint8Array> {
    const recorder = this._recorder;
    const stdout = recorder?.child.stdout;
    if (recorder == null || stdout == null) {
      throw new VoiceAgentConnectionError("Audio recorder is not running");
    }
    for await (const chunk of stdout) {
      if (!this._running) return;
      const audio =
        this._echoCanceller?.processCapture(
          chunk as Buffer,
          this._streamDelayMs(),
        ) ?? (chunk as Buffer);
      if (audio.byteLength === 0) continue;
      yield new Uint8Array(audio);
    }
    if (this._running) {
      throw (
        recorder.failure() ??
        new VoiceAgentConnectionError(
          "The default audio input stream stopped unexpectedly",
        )
      );
    }
  }

  outputAudio(audio: Uint8Array): Promise<void> {
    if (!this._running) return Promise.resolve();
    const player = this._player;
    if (player == null) {
      // The transport can receive audio while start() is still spawning the
      // player. Keep those first frames so they can be flushed once ready.
      this._enqueueOutput(audio);
      return Promise.resolve();
    }
    const failure = player.failure();
    if (failure != null) return Promise.reject(failure);
    if (player.child.stdin == null || player.child.stdin.destroyed) {
      return Promise.reject(
        new VoiceAgentConnectionError(
          "The default audio output device is unavailable",
        ),
      );
    }
    this._enqueueOutput(audio);
    return Promise.resolve();
  }

  stop(): Promise<void> {
    this._running = false;
    if (this._flushTimer != null) {
      clearInterval(this._flushTimer);
      this._flushTimer = null;
    }
    this._outputQueue.length = 0;
    this._playbackEndsAt = 0;
    this._killProcess(this._player);
    this._player = null;
    this._killProcess(this._recorder);
    this._recorder = null;
    this._echoCanceller?.close();
    this._echoCanceller = null;
    return Promise.resolve();
  }

  private _spawnPlayer(spawn: SpawnFn): AudioProcess {
    return monitorAudioProcess(
      spawn("play", PLAY_ARGS, {
        stdio: ["pipe", "ignore", "pipe"],
      }),
      {
        command: "play",
        device: "output",
        platform: process.platform,
      },
    );
  }

  private _enqueueOutput(audio: Uint8Array): void {
    this._outputQueue.push(Buffer.from(audio));
    let queuedBytes = this._outputQueue.reduce(
      (total, frame) => total + frame.byteLength,
      0,
    );
    while (queuedBytes > OUTPUT_QUEUE_MAX_BYTES) {
      const oldest = this._outputQueue.shift();
      if (oldest == null) return;
      queuedBytes -= oldest.byteLength;
    }
  }

  private _killProcess(process: AudioProcess | null): void {
    if (process == null || process.child.killed) return;
    process.child.stdin?.end();
    process.child.kill("SIGTERM");
  }

  private _streamDelayMs(): number {
    if (this._echoCancellationDelayMs !== undefined) {
      return this._echoCancellationDelayMs;
    }
    const queuedMs = Math.max(this._playbackEndsAt - performance.now(), 0);
    return Math.round(PLAYBACK_PATH_LATENCY_MS + queuedMs);
  }

  /** Drain the output queue to the play process. */
  private _flushOutput(): void {
    const player = this._player;
    const stdin = player?.child.stdin;
    if (player?.failure() != null || stdin == null || stdin.destroyed) {
      this._outputQueue.length = 0;
      return;
    }

    while (this._outputQueue.length > 0) {
      const chunk = this._outputQueue.shift();
      if (chunk == null) break;
      stdin.write(chunk);
      // The canceller is fed here, not in outputAudio: it has to see the
      // speaker stream on the timeline it is actually played on.
      this._playbackEndsAt =
        Math.max(this._playbackEndsAt, performance.now()) +
        chunk.byteLength / BYTES_PER_MS;
      this._echoCanceller?.processRender(chunk);
    }
  }
}
