import * as S3 from "@aws-sdk/client-s3";
import { BlockBlobClient } from "@azure/storage-blob";
import { File } from "@google-cloud/storage";
import { afterEach, describe, expect, it, vi } from "vitest";

import { WorkflowPayloadOffloadingError } from "../../src/extra/workflows/index.js";
import {
  BlobNotFoundError,
  fullKey,
  getBlobStorage,
  loadStorageSdk,
} from "../../src/extra/workflows/encoding/storage/blob-storage.js";
import type { ResolvedBlobStorageConfig } from "../../src/extra/workflows/encoding/config.js";

/**
 * The providers run against their real SDKs, with the calls that would reach
 * the network stubbed out. Cross-client compatibility against the storage
 * emulators of abraxas/docker-compose.worker-with-encoding.yaml is checked
 * manually.
 */

/** The error `promise` rejects with. */
async function rejection(promise: Promise<unknown>): Promise<Error> {
  try {
    await promise;
  } catch (error) {
    return error as Error;
  }
  throw new Error("Expected the promise to reject");
}

function notFound(): Error {
  return Object.assign(new Error("not found"), {
    name: "NotFound",
    statusCode: 404,
    code: 404,
    $metadata: { httpStatusCode: 404 },
  });
}

afterEach(() => {
  vi.restoreAllMocks();
  vi.unstubAllEnvs();
});

describe("fullKey", () => {
  it.each([
    [undefined, "a/b", "a/b"],
    ["pfx", "a/b", "pfx/a/b"],
    // Like Python: a key already under the prefix is left as-is.
    ["pfx", "pfx/a/b", "pfx/a/b"],
  ])("puts %j before %j", (prefix, key, expected) => {
    expect(fullKey(prefix, key)).toBe(expected);
  });
});

describe("S3 blob storage", () => {
  const config: ResolvedBlobStorageConfig = {
    storageProvider: "s3",
    bucketName: "bucket",
    prefix: "pfx",
    endpointUrl: "http://localhost:9090",
    awsAccessKeyId: "id",
    awsSecretAccessKey: "secret",
  };

  function stubSend(
    respond: (command: unknown) => unknown,
  ): { commands: unknown[]; clients: S3.S3Client[] } {
    const commands: unknown[] = [];
    const clients: S3.S3Client[] = [];
    vi.spyOn(S3.S3Client.prototype, "send").mockImplementation(
      async function(this: S3.S3Client, command: unknown) {
        commands.push(command);
        clients.push(this);
        return respond(command);
      } as never,
    );
    return { commands, clients };
  }

  it("uploads under the prefix, with path-style URLs on custom endpoints", async () => {
    const { commands, clients } = stubSend(() => ({}));
    const storage = await getBlobStorage(config);

    const url = await storage.uploadBlob("a/b", new Uint8Array([1]));

    expect(commands[0]).toBeInstanceOf(S3.PutObjectCommand);
    expect((commands[0] as S3.PutObjectCommand).input).toMatchObject({
      Bucket: "bucket",
      Key: "pfx/a/b",
    });
    expect(url).toBe("http://localhost:9090/bucket/pfx/a/b");
    const clientConfig = clients[0]!.config;
    expect(clientConfig.forcePathStyle).toBe(true);
    await expect(clientConfig.credentials()).resolves.toMatchObject({
      accessKeyId: "id",
      secretAccessKey: "secret",
    });
  });

  it("falls back to us-east-1 without a configured region, like boto3", async () => {
    vi.stubEnv("AWS_REGION", "");
    vi.stubEnv("AWS_DEFAULT_REGION", "");
    const { clients } = stubSend(() => ({}));
    const storage = await getBlobStorage({ storageProvider: "s3", bucketName: "b" });

    const url = await storage.uploadBlob("k", new Uint8Array([1]));

    await expect(clients[0]!.config.region()).resolves.toBe("us-east-1");
    expect(url).toBe("https://s3.us-east-1.amazonaws.com/b/k");
  });

  it("reads the region from the environment", async () => {
    vi.stubEnv("AWS_REGION", "eu-west-3");
    const { clients } = stubSend(() => ({}));
    const storage = await getBlobStorage({ storageProvider: "s3", bucketName: "b" });

    await storage.uploadBlob("k", new Uint8Array([1]));

    await expect(clients[0]!.config.region()).resolves.toBe("eu-west-3");
  });

  it("downloads blobs", async () => {
    stubSend(() => ({
      Body: { transformToByteArray: async () => new Uint8Array([7, 8]) },
    }));
    const storage = await getBlobStorage(config);

    await expect(storage.getBlob("k")).resolves.toEqual(new Uint8Array([7, 8]));
  });

  it("reports missing blobs", async () => {
    stubSend(() => {
      throw notFound();
    });
    const storage = await getBlobStorage(config);

    await expect(storage.getBlob("k")).rejects.toBeInstanceOf(BlobNotFoundError);
    await expect(storage.getBlobProperties("k")).resolves.toBeNull();
    await expect(storage.blobExists("k")).resolves.toBe(false);
  });

  it("raises other errors", async () => {
    const denied = Object.assign(new Error("denied"), {
      $metadata: { httpStatusCode: 403 },
    });
    stubSend(() => {
      throw denied;
    });
    const storage = await getBlobStorage(config);

    await expect(storage.getBlobProperties("k")).rejects.toBe(denied);
  });
});

describe("Azure blob storage", () => {
  const config: ResolvedBlobStorageConfig = {
    storageProvider: "azure",
    containerName: "container",
    prefix: "pfx",
    azureConnectionString:
      "DefaultEndpointsProtocol=http;AccountName=devstoreaccount1;"
      + "AccountKey=Eby8vdM02xNOcqFlqUwJPLlmEtlCDXJ1OUzFT50uSRZ6IFsuFq2UVErCz4I6tq/K1SZFPTOtr/KBHBeksoGMGw==;"
      + "BlobEndpoint=http://localhost:10000/devstoreaccount1;",
  };

  it("uploads under the prefix", async () => {
    const upload = vi.spyOn(BlockBlobClient.prototype, "uploadData")
      .mockResolvedValue({} as never);
    const storage = await getBlobStorage(config);

    const url = await storage.uploadBlob("a b", new Uint8Array([1]));

    expect(upload).toHaveBeenCalledOnce();
    expect(url).toBe("http://localhost:10000/devstoreaccount1/container/pfx/a%20b");
  });

  it("reports missing blobs", async () => {
    vi.spyOn(BlockBlobClient.prototype, "downloadToBuffer")
      .mockRejectedValue(notFound());
    vi.spyOn(BlockBlobClient.prototype, "getProperties")
      .mockRejectedValue(notFound());
    const storage = await getBlobStorage(config);

    await expect(storage.getBlob("k")).rejects.toBeInstanceOf(BlobNotFoundError);
    await expect(storage.getBlobProperties("k")).resolves.toBeNull();
  });
});

describe("GCS blob storage", () => {
  const config: ResolvedBlobStorageConfig = {
    storageProvider: "gcs",
    bucketId: "bucket",
    prefix: "pfx",
  };

  it.each(["http://localhost:4443", "http://localhost:4443/storage/v1"])(
    "reads STORAGE_EMULATOR_HOST=%s like Python",
    async (host) => {
      vi.stubEnv("STORAGE_EMULATOR_HOST", host);
      const files: File[] = [];
      vi.spyOn(File.prototype, "download").mockImplementation(
        async function(this: File) {
          files.push(this);
          return [Buffer.from("x")];
        } as never,
      );
      const storage = await getBlobStorage(config);

      await storage.getBlob("k");

      expect(files[0]!.name).toBe("pfx/k");
      expect(files[0]!.storage.baseUrl).toBe("http://localhost:4443/storage/v1");
      expect(files[0]!.storage.apiEndpoint).toBe("http://localhost:4443");
    },
  );

  it("reports missing blobs", async () => {
    vi.spyOn(File.prototype, "download").mockRejectedValue(notFound());
    vi.spyOn(File.prototype, "getMetadata").mockRejectedValue(notFound());
    const storage = await getBlobStorage(config);

    await expect(storage.getBlob("k")).rejects.toBeInstanceOf(BlobNotFoundError);
    await expect(storage.getBlobProperties("k")).resolves.toBeNull();
  });
});

describe("missing storage SDKs", () => {
  it("explains how to install them", async () => {
    const error = await rejection(
      loadStorageSdk("@mistralai/not-installed", "Some storage"),
    );

    expect(error).toBeInstanceOf(WorkflowPayloadOffloadingError);
    expect(error.message).toBe(
      "Some storage support requires @mistralai/not-installed. "
        + "Install it with: npm install @mistralai/not-installed",
    );
  });
});
