/**
 * Workflow payload encoding configuration, mirroring the Python client's
 * `mistralai.extra.workflows.encoding.config`.
 */

import * as z from "zod/v4";

export const PayloadEncryptionMode = {
  /** Encrypt the whole payload. */
  Full: "full",
  /** Encrypt only the fields marked with `encryptedStrField()`. */
  Partial: "partial",
} as const;
export type PayloadEncryptionMode =
  (typeof PayloadEncryptionMode)[keyof typeof PayloadEncryptionMode];

export type PayloadEncryptionConfig = {
  mode: PayloadEncryptionMode;
  /**
   * Hex-encoded AES key (128, 192 or 256 bits) used to encrypt payloads.
   * 192-bit keys don't work in Chromium-based browsers, whose Web Crypto API
   * only supports 128- and 256-bit AES keys.
   *
   * If `secondaryKey` is also set, payloads are encrypted with `mainKey` and
   * decrypted with either key, to support key rotation.
   */
  mainKey: string;
  /** Hex-encoded AES key accepted for decryption only. */
  secondaryKey?: string | undefined;
};

export const StorageProvider = {
  Azure: "azure",
  GCS: "gcs",
  S3: "s3",
} as const;
export type StorageProvider =
  (typeof StorageProvider)[keyof typeof StorageProvider];

/**
 * Blob storage where offloaded payloads are written. Workers read offloaded
 * payloads from it, so it must be the storage their offloading is configured
 * with.
 *
 * Each provider needs its SDK installed: `@aws-sdk/client-s3` for S3,
 * `@azure/storage-blob` (and `@azure/identity` with
 * `azureStorageAccountUrl`) for Azure, `@google-cloud/storage` for GCS. The
 * Azure and GCS SDKs only run on Node.js.
 */
export type BlobStorageConfig = {
  /** Defaults to `s3`. */
  storageProvider?: StorageProvider | undefined;
  /** Prepended to every blob key, as `<prefix>/<key>`. */
  prefix?: string | undefined;

  /** Azure: required. */
  containerName?: string | undefined;
  /** Azure: exclusive with `azureStorageAccountUrl`. */
  azureConnectionString?: string | undefined;
  /**
   * Azure: authenticates with `DefaultAzureCredential`. Exclusive with
   * `azureConnectionString`.
   */
  azureStorageAccountUrl?: string | undefined;

  /** GCS: required. Authenticates with Application Default Credentials. */
  bucketId?: string | undefined;

  /** S3: required. Uses the default AWS credential chain unless keys are set. */
  bucketName?: string | undefined;
  regionName?: string | undefined;
  /** S3-compatible endpoint, addressed with path-style URLs. */
  endpointUrl?: string | undefined;
  awsAccessKeyId?: string | undefined;
  awsSecretAccessKey?: string | undefined;
};

export type PayloadOffloadingConfig = {
  storageConfig: BlobStorageConfig;
  /** Payloads of at least this size are offloaded. Defaults to 1 MiB. */
  minSizeBytes?: number | undefined;
};

export type ZstdCompressionConfig = {
  algorithm?: "zstd" | undefined;
  /** From 1 to 22. Defaults to 3. */
  level?: number | undefined;
};

export type AlgorithmConfig = ZstdCompressionConfig;

/**
 * Payload compression. It needs `@msgpack/msgpack` and `@hpcc-js/wasm-zstd`
 * installed, which decoding compressed payloads also does.
 */
export type PayloadCompressionConfig = {
  /** Payloads of at least this size are compressed. Defaults to 1 MiB. */
  minSizeBytes?: number | undefined;
  algorithmConfig?: AlgorithmConfig | undefined;
};

export type WorkflowEncodingConfig = {
  payloadEncryption?: PayloadEncryptionConfig | undefined;
  payloadOffloading?: PayloadOffloadingConfig | undefined;
  payloadCompression?: PayloadCompressionConfig | undefined;
};

const DEFAULT_MIN_SIZE_BYTES = 1024 * 1024;
const DEFAULT_ZSTD_LEVEL = 3;

const minSizeBytes = z.number().int().nonnegative().default(DEFAULT_MIN_SIZE_BYTES);
const optionalString = z.string().min(1).optional();

/** The algorithm config stored in compressed payloads. */
export const ZstdCompressionConfigSchema = z.object({
  algorithm: z.literal("zstd"),
  level: z.number().int().min(1).max(22).default(DEFAULT_ZSTD_LEVEL),
});
export type ResolvedZstdCompressionConfig = z.infer<
  typeof ZstdCompressionConfigSchema
>;

const BlobStorageConfigSchema = z.strictObject({
  storageProvider: z.enum(StorageProvider).default(StorageProvider.S3),
  prefix: optionalString,
  containerName: optionalString,
  azureConnectionString: optionalString,
  azureStorageAccountUrl: optionalString,
  bucketId: optionalString,
  bucketName: optionalString,
  regionName: optionalString,
  endpointUrl: optionalString,
  awsAccessKeyId: optionalString,
  awsSecretAccessKey: optionalString,
}).superRefine((config, ctx) => {
  // Python checks these when it opens the storage; checking them here fails
  // when the client is configured instead of on the first large payload.
  const require = (field: keyof typeof config) => {
    if (!config[field]) {
      ctx.addIssue({
        code: "custom",
        path: [field],
        message: `${field} is required for ${config.storageProvider} blob storage`,
      });
    }
  };
  switch (config.storageProvider) {
    case StorageProvider.Azure:
      require("containerName");
      if (config.azureConnectionString && config.azureStorageAccountUrl) {
        ctx.addIssue({
          code: "custom",
          path: ["azureConnectionString"],
          message:
            "azureConnectionString and azureStorageAccountUrl are mutually exclusive",
        });
      } else if (!config.azureConnectionString && !config.azureStorageAccountUrl) {
        ctx.addIssue({
          code: "custom",
          path: ["azureConnectionString"],
          message:
            "Either azureConnectionString or azureStorageAccountUrl must be provided",
        });
      }
      break;
    case StorageProvider.GCS:
      require("bucketId");
      break;
    case StorageProvider.S3:
      require("bucketName");
      if (!config.awsAccessKeyId !== !config.awsSecretAccessKey) {
        ctx.addIssue({
          code: "custom",
          path: ["awsAccessKeyId"],
          message: "awsAccessKeyId and awsSecretAccessKey must be set together",
        });
      }
      break;
  }
});
export type ResolvedBlobStorageConfig = z.infer<typeof BlobStorageConfigSchema>;

/**
 * Runtime check of `WorkflowEncodingConfig`, which also fills in defaults.
 * The types don't protect untyped callers (JavaScript, configs parsed from
 * JSON or env vars), and a misspelled field would silently disable the
 * encoding it configures, e.g. send payloads in plaintext.
 */
export const WorkflowEncodingConfigSchema = z.strictObject({
  payloadEncryption: z.strictObject({
    mode: z.enum(PayloadEncryptionMode),
    mainKey: z.string().min(1),
    secondaryKey: z.string().optional(),
  }).optional(),
  payloadOffloading: z.strictObject({
    storageConfig: BlobStorageConfigSchema,
    minSizeBytes,
  }).optional(),
  payloadCompression: z.strictObject({
    minSizeBytes,
    algorithmConfig: z.strictObject({
      algorithm: z.literal("zstd").default("zstd"),
      level: z.number().int().min(1).max(22).default(DEFAULT_ZSTD_LEVEL),
    }).default({ algorithm: "zstd", level: DEFAULT_ZSTD_LEVEL }),
  }).optional(),
}).refine(
  (config) =>
    config.payloadEncryption
    || config.payloadOffloading
    || config.payloadCompression,
  {
    message:
      "At least one of payloadEncryption, payloadOffloading or payloadCompression must be set",
  },
);
export type ResolvedWorkflowEncodingConfig = z.infer<
  typeof WorkflowEncodingConfigSchema
>;
