import type {
  BlobProperties,
  BlobStorage,
} from "../../src/extra/workflows/encoding/storage/blob-storage.js";
import { BlobNotFoundError } from "../../src/extra/workflows/encoding/storage/blob-storage.js";

/**
 * Stands in for a provider's storage in tests, like the Python client's
 * `InMemoryBlobStorage`. Replace the S3 provider with it using:
 *
 * ```ts
 * vi.mock("../../src/extra/workflows/encoding/storage/s3.js", () => ({
 *   S3BlobStorage: { open: async () => storage },
 * }));
 * ```
 */
export class InMemoryBlobStorage implements BlobStorage {
  readonly blobs = new Map<string, Uint8Array>();
  uploads = 0;

  async uploadBlob(key: string, content: Uint8Array): Promise<string> {
    this.uploads++;
    this.blobs.set(key, new Uint8Array(content));
    return key;
  }

  async getBlob(key: string): Promise<Uint8Array> {
    const blob = this.blobs.get(key);
    if (!blob) throw new BlobNotFoundError(key);
    return blob;
  }

  async getBlobProperties(key: string): Promise<BlobProperties | null> {
    const blob = this.blobs.get(key);
    return blob ? { size: blob.length, lastModified: "test" } : null;
  }

  async deleteBlob(key: string): Promise<void> {
    this.blobs.delete(key);
  }

  async blobExists(key: string): Promise<boolean> {
    return this.blobs.has(key);
  }

  async close(): Promise<void> {}

  /** The blobs as `{key: base64}`, the format of the parity fixtures. */
  base64Blobs(): Record<string, string> {
    return Object.fromEntries(
      [...this.blobs].sort(([a], [b]) => a < b ? -1 : 1).map((
        [key, content],
      ) => [key, Buffer.from(content).toString("base64")]),
    );
  }

  reset(blobs: Record<string, string> = {}): void {
    this.blobs.clear();
    this.uploads = 0;
    for (const [key, content] of Object.entries(blobs)) {
      this.blobs.set(key, new Uint8Array(Buffer.from(content, "base64")));
    }
  }
}
