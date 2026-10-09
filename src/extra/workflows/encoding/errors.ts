export class WorkflowPayloadEncryptionError extends Error {
  constructor(message: string, options?: { cause?: unknown }) {
    super(message, options);
    this.name = "WorkflowPayloadEncryptionError";
  }
}

export class WorkflowPayloadCompressionError extends Error {
  constructor(message: string, options?: { cause?: unknown }) {
    super(message, options);
    this.name = "WorkflowPayloadCompressionError";
  }
}

export class WorkflowPayloadOffloadingError extends Error {
  constructor(message: string, options?: { cause?: unknown }) {
    super(message, options);
    this.name = "WorkflowPayloadOffloadingError";
  }
}
