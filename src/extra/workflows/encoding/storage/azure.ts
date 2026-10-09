import type * as AzureIdentity from "@azure/identity";
import type * as AzureBlob from "@azure/storage-blob";

import { ResolvedBlobStorageConfig } from "../config.js";
import {
  BlobNotFoundError,
  BlobProperties,
  BlobStorage,
  fullKey,
  isNotFound,
  loadStorageSdk,
} from "./blob-storage.js";

const AZURE = "Azure Blob Storage";

export class AzureBlobStorage implements BlobStorage {
  readonly #container: AzureBlob.ContainerClient;
  readonly #prefix: string | undefined;

  private constructor(
    container: AzureBlob.ContainerClient,
    prefix: string | undefined,
  ) {
    this.#container = container;
    this.#prefix = prefix;
  }

  static async open(
    config: ResolvedBlobStorageConfig,
  ): Promise<AzureBlobStorage> {
    const sdk = await loadStorageSdk<typeof AzureBlob>("@azure/storage-blob", AZURE);
    let service: AzureBlob.BlobServiceClient;
    if (config.azureConnectionString) {
      service = sdk.BlobServiceClient.fromConnectionString(
        config.azureConnectionString,
      );
    } else {
      const identity = await loadStorageSdk<typeof AzureIdentity>(
        "@azure/identity",
        AZURE,
      );
      service = new sdk.BlobServiceClient(
        config.azureStorageAccountUrl!,
        new identity.DefaultAzureCredential(),
      );
    }
    return new AzureBlobStorage(
      service.getContainerClient(config.containerName!),
      config.prefix,
    );
  }

  #blob(key: string): AzureBlob.BlockBlobClient {
    return this.#container.getBlockBlobClient(fullKey(this.#prefix, key));
  }

  async uploadBlob(key: string, content: Uint8Array): Promise<string> {
    const blob = this.#blob(key);
    await blob.uploadData(content);
    return blob.url;
  }

  async getBlob(key: string): Promise<Uint8Array> {
    try {
      return new Uint8Array(await this.#blob(key).downloadToBuffer());
    } catch (error) {
      if (isNotFound(error)) throw new BlobNotFoundError(key, { cause: error });
      throw error;
    }
  }

  async getBlobProperties(key: string): Promise<BlobProperties | null> {
    try {
      const properties = await this.#blob(key).getProperties();
      return {
        size: properties.contentLength ?? 0,
        lastModified: properties.lastModified,
      };
    } catch (error) {
      if (isNotFound(error)) return null;
      throw error;
    }
  }

  async deleteBlob(key: string): Promise<void> {
    await this.#blob(key).delete();
  }

  async blobExists(key: string): Promise<boolean> {
    return this.#blob(key).exists();
  }

  async close(): Promise<void> {
    // The Azure SDK clients hold no resources that need releasing.
  }
}
