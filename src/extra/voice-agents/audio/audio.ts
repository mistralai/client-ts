export const CHANNELS = 1;
export const SAMPLE_RATE = 48_000;
export const FRAME_DURATION_MS = 20;
export const BYTES_PER_SAMPLE = 2;

export interface AudioInterface {
  /**
   * Run by `init()` before the remote session is created, so a missing device
   * fails without leaving a session behind.
   */
  preflight?(): Promise<void>;
  start(): Promise<void>;
  inputAudio(): AsyncIterable<Uint8Array>;
  outputAudio(audio: Uint8Array): Promise<void>;
  stop(): Promise<void>;
}
