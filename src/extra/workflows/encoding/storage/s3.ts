import type * as S3 from "@aws-sdk/client-s3";

import { ResolvedBlobStorageConfig } from "../config.js";
import {
  BlobNotFoundError,
  BlobProperties,
  BlobStorage,
  fullKey,
  isNotFound,
  loadStorageSdk,
} from "./blob-storage.js";

function envRegion(): string | undefined {
  const env = (globalThis as { process?: { env?: Record<string, string | undefined> } })
    .process?.env;
  return env?.["AWS_REGION"] || env?.["AWS_DEFAULT_REGION"] || undefined;
}

export class S3BlobStorage implements BlobStorage {
  readonly #sdk: typeof S3;
  readonly #client: S3.S3Client;
  readonly #bucketName: string;
  readonly #prefix: string | undefined;
  readonly #urlBase: string;

  private constructor(sdk: typeof S3, config: ResolvedBlobStorageConfig) {
    this.#sdk = sdk;
    this.#bucketName = config.bucketName!;
    this.#prefix = config.prefix;

    // Like boto3, which this mirrors: fall back to us-east-1 when no region
    // is configured, and address custom endpoints with path-style URLs.
    const region = config.regionName ?? envRegion();
    const { awsAccessKeyId, awsSecretAccessKey } = config;
    this.#client = new sdk.S3Client({
      region: region ?? "us-east-1",
      followRegionRedirects: region === undefined,
      ...(config.endpointUrl
        ? { endpoint: config.endpointUrl, forcePathStyle: true }
        : {}),
      ...(awsAccessKeyId && awsSecretAccessKey
        ? {
          credentials: {
            accessKeyId: awsAccessKeyId,
            secretAccessKey: awsSecretAccessKey,
          },
        }
        : {}),
    });
    this.#urlBase = config.endpointUrl
      ?? `https://s3.${config.regionName ?? "us-east-1"}.amazonaws.com`;
  }

  static async open(config: ResolvedBlobStorageConfig): Promise<S3BlobStorage> {
    const sdk = await loadStorageSdk<typeof S3>("@aws-sdk/client-s3", "AWS S3");
    return new S3BlobStorage(sdk, config);
  }

  async uploadBlob(key: string, content: Uint8Array): Promise<string> {
    const Key = fullKey(this.#prefix, key);
    await this.#client.send(
      new this.#sdk.PutObjectCommand({
        Bucket: this.#bucketName,
        Key,
        Body: content,
      }),
    );
    return `${this.#urlBase}/${this.#bucketName}/${Key}`;
  }

  async getBlob(key: string): Promise<Uint8Array> {
    try {
      const response = await this.#client.send(
        new this.#sdk.GetObjectCommand({
          Bucket: this.#bucketName,
          Key: fullKey(this.#prefix, key),
        }),
      );
      return await response.Body!.transformToByteArray();
    } catch (error) {
      if (isNotFound(error)) throw new BlobNotFoundError(key, { cause: error });
      throw error;
    }
  }

  async getBlobProperties(key: string): Promise<BlobProperties | null> {
    try {
      const response = await this.#client.send(
        new this.#sdk.HeadObjectCommand({
          Bucket: this.#bucketName,
          Key: fullKey(this.#prefix, key),
        }),
      );
      return {
        size: response.ContentLength ?? 0,
        lastModified: response.LastModified,
      };
    } catch (error) {
      if (isNotFound(error)) return null;
      throw error;
    }
  }

  async deleteBlob(key: string): Promise<void> {
    await this.#client.send(
      new this.#sdk.DeleteObjectCommand({
        Bucket: this.#bucketName,
        Key: fullKey(this.#prefix, key),
      }),
    );
  }

  async blobExists(key: string): Promise<boolean> {
    return (await this.getBlobProperties(key)) !== null;
  }

  async close(): Promise<void> {
    this.#client.destroy();
  }
}
