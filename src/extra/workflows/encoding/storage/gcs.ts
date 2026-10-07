import type * as GCS from "@google-cloud/storage";

import { ResolvedBlobStorageConfig } from "../config.js";
import {
  BlobNotFoundError,
  BlobProperties,
  BlobStorage,
  fullKey,
  isNotFound,
  loadStorageSdk,
} from "./blob-storage.js";

function emulatorHost(): string | undefined {
  return (globalThis as { process?: { env?: Record<string, string | undefined> } })
    .process?.env?.["STORAGE_EMULATOR_HOST"] || undefined;
}

export class GCSBlobStorage implements BlobStorage {
  readonly #bucket: GCS.Bucket;
  readonly #prefix: string | undefined;

  private constructor(bucket: GCS.Bucket, prefix: string | undefined) {
    this.#bucket = bucket;
    this.#prefix = prefix;
  }

  /** Authenticates with Application Default Credentials. */
  static async open(config: ResolvedBlobStorageConfig): Promise<GCSBlobStorage> {
    const sdk = await loadStorageSdk<typeof GCS>(
      "@google-cloud/storage",
      "Google Cloud Storage",
    );
    const emulatorOrigin = emulatorHost()?.replace(/\/storage\/v1\/?$/, "");
    let storage: GCS.Storage;
    if (emulatorOrigin) {
      // Python's gcloud-aio reads STORAGE_EMULATOR_HOST as the emulator's
      // origin. This SDK uses it verbatim as the JSON API base URL but builds
      // upload URLs from its origin, so no single value works for both
      // requests: read it like Python so a shared setup works for both clients.
      storage = new sdk.Storage({ apiEndpoint: emulatorOrigin });
      storage.baseUrl = `${emulatorOrigin}/storage/v1`;
    } else {
      storage = new sdk.Storage();
    }
    return new GCSBlobStorage(storage.bucket(config.bucketId!), config.prefix);
  }

  #file(key: string): GCS.File {
    return this.#bucket.file(fullKey(this.#prefix, key));
  }

  async uploadBlob(key: string, content: Uint8Array): Promise<string> {
    const file = this.#file(key);
    await file.save(Buffer.from(content), { resumable: false });
    return String(file.metadata.selfLink);
  }

  async getBlob(key: string): Promise<Uint8Array> {
    try {
      const [content] = await this.#file(key).download();
      return new Uint8Array(content);
    } catch (error) {
      if (isNotFound(error)) throw new BlobNotFoundError(key, { cause: error });
      throw error;
    }
  }

  async getBlobProperties(key: string): Promise<BlobProperties | null> {
    try {
      const [metadata] = await this.#file(key).getMetadata();
      return {
        size: Number(metadata.size ?? 0),
        lastModified: metadata.updated,
      };
    } catch (error) {
      if (isNotFound(error)) return null;
      throw error;
    }
  }

  async deleteBlob(key: string): Promise<void> {
    await this.#file(key).delete();
  }

  async blobExists(key: string): Promise<boolean> {
    const [exists] = await this.#file(key).exists();
    return exists;
  }

  async close(): Promise<void> {
    // The GCS client opens no connection that outlives a request.
  }
}
