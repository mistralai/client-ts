import { expect, test } from "vitest";

import {
  BYTES_PER_SAMPLE,
  CHANNELS,
  FRAME_DURATION_MS,
  SAMPLE_RATE,
} from "../../../src/extra/voice-agents/audio/audio.js";
import {
  audioDeviceHint,
  DefaultAudioInterface,
  soxInstallHint,
} from "../../../src/extra/voice-agents/audio/node.js";
import { VoiceAgentDependencyError } from "../../../src/extra/voice-agents/errors.js";

const FRAME_BYTES =
  (SAMPLE_RATE * CHANNELS * BYTES_PER_SAMPLE * FRAME_DURATION_MS) / 1000;

const MAX_QUEUED_BYTES =
  (SAMPLE_RATE * CHANNELS * BYTES_PER_SAMPLE * 300) / 1000;

type AudioInternals = { _running: boolean; _outputQueue: Buffer[] };

test("the output queue drops the oldest frames past 300 ms", async () => {
  const audio = new DefaultAudioInterface({ echoCancellation: false });
  const internals = audio as unknown as AudioInternals;
  internals._running = true;

  const frameCount = 20;
  for (let index = 0; index < frameCount; index++) {
    await audio.outputAudio(new Uint8Array(FRAME_BYTES).fill(index));
  }

  const queued = internals._outputQueue;
  const queuedBytes = queued.reduce(
    (total, frame) => total + frame.byteLength,
    0,
  );
  expect(queuedBytes).toBeLessThanOrEqual(MAX_QUEUED_BYTES);
  expect(queued.at(-1)?.[0]).toBe(frameCount - 1);
  expect(queued.at(0)?.[0]).toBe(frameCount - queued.length);
});

test("preflight reports a missing sox before a room exists, echo off", async () => {
  const path = process.env.PATH;
  process.env.PATH = "/nonexistent-sox-probe";
  try {
    const audio = new DefaultAudioInterface({ echoCancellation: false });
    await expect(audio.preflight()).rejects.toThrow(VoiceAgentDependencyError);
    await expect(audio.preflight()).rejects.toThrow(
      /'rec' not found\. Install SoX/,
    );
  } finally {
    process.env.PATH = path;
  }
});

test("sox reporting no device asks the user to connect one", () => {
  const hint = audioDeviceHint({
    device: "input",
    platform: "darwin",
    stderr: "rec FAIL sox: Sorry, there is no default audio device configured",
  });

  expect(hint).toContain("No microphone is available");
});

test("sox reporting a busy device names the other application", () => {
  const hint = audioDeviceHint({
    device: "output",
    platform: "linux",
    stderr: "play FAIL alsa: can not open audio device: Device or resource busy",
  });

  expect(hint).toContain("The speaker is held by another application");
});

test("an unreadable mic failure points at the OS privacy pane", () => {
  const stderr = "rec FAIL coreaudio: can not open audio device";

  expect(
    audioDeviceHint({ device: "input", platform: "darwin", stderr }),
  ).toContain("System Settings > Privacy & Security > Microphone");
  expect(
    audioDeviceHint({ device: "input", platform: "win32", stderr }),
  ).toContain("Settings > Privacy & security > Microphone");
  expect(audioDeviceHint({ device: "input", platform: "linux", stderr })).toBe(
    "The default audio input device is unavailable or could not be opened",
  );
  expect(
    audioDeviceHint({ device: "output", platform: "darwin", stderr }),
  ).not.toContain("Microphone");
});

type DelayInternals = {
  _streamDelayMs: () => number;
  _playbackEndsAt: number;
};

// Reporting under the real echo path collapses cancellation from ~18 dB to
// ~5 dB, while overshooting costs nothing, so the floor must stay generous.
test("the stream delay covers the device path plus the queued output", () => {
  const audio = new DefaultAudioInterface();
  const internals = audio as unknown as DelayInternals;

  const idle = internals._streamDelayMs();
  expect(idle).toBeGreaterThanOrEqual(250);

  internals._playbackEndsAt = performance.now() + 120;
  expect(internals._streamDelayMs()).toBeGreaterThan(idle + 100);
});

test("the SoX hint only suggests a command the platform can run", () => {
  expect(soxInstallHint("darwin")).toContain("brew install sox");
  expect(soxInstallHint("darwin")).not.toContain("apt install sox");
  expect(soxInstallHint("linux")).toContain("apt install sox");
  expect(soxInstallHint("linux")).not.toContain("brew install sox");
  expect(soxInstallHint("win32")).toContain("scoop install sox");
  expect(soxInstallHint("freebsd")).toContain("scoop install sox");
});

test("the Windows SoX hint covers the missing rec.exe and play.exe", () => {
  const hint = soxInstallHint("win32");

  expect(hint).toContain("copy sox.exe rec.exe");
  expect(hint).toContain("copy sox.exe play.exe");
});

test("an explicit echo cancellation delay wins over the estimate", () => {
  const audio = new DefaultAudioInterface({ echoCancellationDelayMs: 75 });
  const internals = audio as unknown as DelayInternals;

  internals._playbackEndsAt = performance.now() + 500;
  expect(internals._streamDelayMs()).toBe(75);
});
