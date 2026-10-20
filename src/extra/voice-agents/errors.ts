import type { VoiceAgentErrorEvent } from "./events.js";

/** Base voice agent SDK error. */
export class VoiceAgentError extends Error {
  constructor(message: string, options?: { cause?: unknown }) {
    super(message, options);
    this.name = "VoiceAgentError";
  }
}

/** Invalid tool overrides or incomplete saved-agent configuration. */
export class VoiceAgentConfigurationError extends VoiceAgentError {
  constructor(message: string, options?: { cause?: unknown }) {
    super(message, options);
    this.name = "VoiceAgentConfigurationError";
  }
}

/** Raised when a voice session cannot connect or stream audio. */
export class VoiceAgentConnectionError extends VoiceAgentError {
  readonly errorEvent?: VoiceAgentErrorEvent | undefined;

  constructor(
    message: string,
    options?: {
      errorEvent?: VoiceAgentErrorEvent;
      cause?: unknown;
    },
  ) {
    super(message, { cause: options?.cause });
    this.name = "VoiceAgentConnectionError";
    this.errorEvent = options?.errorEvent;
  }
}

/** Raised when an optional voice dependency is not installed. */
export class VoiceAgentDependencyError extends VoiceAgentError {
  constructor(message: string, options?: { cause?: unknown }) {
    super(message, options);
    this.name = "VoiceAgentDependencyError";
  }
}
