/**
 * Port of the Python client's blob storage
 * (`mistralai.extra.workflows.encoding.storage`).
 */

import {
  ResolvedBlobStorageConfig,
  StorageProvider,
} from "../config.js";
import { WorkflowPayloadOffloadingError } from "../errors.js";
import { importOptionalModule } from "../optional-module.js";

export class BlobNotFoundError extends Error {
  constructor(key: string, options?: { cause?: unknown }) {
    super(`Blob not found: ${key}`, options);
    this.name = "BlobNotFoundError";
  }
}

export type BlobProperties = {
  size: number;
  lastModified: Date | string | undefined;
};

export interface BlobStorage {
  /** Uploads a blob, overwriting any existing one, and returns its URL. */
  uploadBlob(key: string, content: Uint8Array): Promise<string>;
  /** @throws BlobNotFoundError when the blob doesn't exist. */
  getBlob(key: string): Promise<Uint8Array>;
  /** Returns `null` when the blob doesn't exist. */
  getBlobProperties(key: string): Promise<BlobProperties | null>;
  deleteBlob(key: string): Promise<void>;
  blobExists(key: string): Promise<boolean>;
  /** Releases the clients opened for this storage. */
  close(): Promise<void>;
}

/** The key under the storage prefix, unless it already starts with it. */
export function fullKey(prefix: string | undefined, key: string): string {
  if (!prefix || key.startsWith(prefix)) return key;
  return `${prefix}/${key}`;
}

/** Whether an SDK error is an HTTP 404. */
export function isNotFound(error: unknown): boolean {
  if (typeof error !== "object" || error === null) return false;
  const e = error as {
    statusCode?: unknown;
    code?: unknown;
    $metadata?: { httpStatusCode?: unknown };
  };
  return e.$metadata?.httpStatusCode === 404
    || e.statusCode === 404
    || e.code === 404;
}

export function loadStorageSdk<T>(
  specifier: string,
  description: string,
): Promise<T> {
  return importOptionalModule<T>(
    specifier,
    (cause) =>
      new WorkflowPayloadOffloadingError(
        `${description} support requires ${specifier}. `
          + `Install it with: npm install ${specifier}`,
        { cause },
      ),
  );
}

/** Opens the blob storage of `config`. Call `close()` when done with it. */
export async function getBlobStorage(
  config: ResolvedBlobStorageConfig,
): Promise<BlobStorage> {
  switch (config.storageProvider) {
    case StorageProvider.Azure: {
      const { AzureBlobStorage } = await import("./azure.js");
      return AzureBlobStorage.open(config);
    }
    case StorageProvider.GCS: {
      const { GCSBlobStorage } = await import("./gcs.js");
      return GCSBlobStorage.open(config);
    }
    case StorageProvider.S3: {
      const { S3BlobStorage } = await import("./s3.js");
      return S3BlobStorage.open(config);
    }
    default:
      throw new WorkflowPayloadOffloadingError(
        `Unsupported storage provider: ${String(config.storageProvider)}`,
      );
  }
}

/**
 * Runs `fn` with the blob storage of `config`, closing it afterwards, like
 * Python's `async with get_blob_storage(config)`.
 */
export async function withBlobStorage<T>(
  config: ResolvedBlobStorageConfig,
  fn: (storage: BlobStorage) => Promise<T>,
): Promise<T> {
  const storage = await getBlobStorage(config);
  try {
    return await fn(storage);
  } finally {
    await storage.close();
  }
}
