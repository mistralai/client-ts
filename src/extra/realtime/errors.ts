import type { RealtimeSpeechError } from "../../models/components/realtimespeecherror.js";
import type {
  RealtimeTranscriptionError,
} from "../../models/components/realtimetranscriptionerror.js";

export class RealtimeTranscriptionException extends Error {
  constructor(message: string, options?: { cause?: unknown }) {
    super(message, options);
    this.name = "RealtimeTranscriptionException";
  }
}

export class RealtimeTranscriptionWSError extends RealtimeTranscriptionException {
  readonly payload?: RealtimeTranscriptionError | undefined;
  readonly rawPayload?: unknown;
  readonly code?: number | undefined;

  constructor(
    message: string,
    options?: {
      payload?: RealtimeTranscriptionError;
      rawPayload?: unknown;
      code?: number;
      cause?: unknown;
    },
  ) {
    super(message, { cause: options?.cause });
    this.name = "RealtimeTranscriptionWSError";
    this.payload = options?.payload;
    this.rawPayload = options?.rawPayload;
    this.code = options?.code ?? options?.payload?.error?.code;
  }
}

export class RealtimeSpeechException extends Error {
  readonly code?: number | undefined;

  constructor(message: string, options?: { cause?: unknown; code?: number }) {
    super(message, { cause: options?.cause });
    this.name = "RealtimeSpeechException";
    this.code = options?.code;
  }
}

export class RealtimeSpeechWSError extends RealtimeSpeechException {
  readonly payload?: RealtimeSpeechError | undefined;
  readonly rawPayload?: unknown;

  constructor(
    message: string,
    options?: {
      payload?: RealtimeSpeechError;
      rawPayload?: unknown;
      code?: number;
      cause?: unknown;
    },
  ) {
    const code = options?.code ?? options?.payload?.error?.code;
    super(message, code === undefined ? { cause: options?.cause } : { cause: options?.cause, code });
    this.name = "RealtimeSpeechWSError";
    this.payload = options?.payload;
    this.rawPayload = options?.rawPayload;
  }
}
