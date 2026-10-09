/**
 * Port of the Python client's `PayloadEncoder`
 * (`mistralai.extra.workflows.encoding.payload_encoder`).
 *
 * Encoded payloads are byte-for-byte identical to the ones produced by Python
 * for the same input and nonce: AES-GCM with a random 12-byte nonce prepended
 * to the ciphertext, JSON serialized exactly as Python serializes it (see
 * `python-json.ts`), and offloaded payloads stored under the same blob keys.
 */

import * as z from "zod/v4";

import { isPlainObject } from "../../../lib/primitives.js";
import {
  packCompressedPayload,
  unpackCompressedPayload,
  zstdCompress,
  zstdDecompress,
} from "./compression.js";
import {
  PayloadEncryptionMode,
  ResolvedWorkflowEncodingConfig,
  WorkflowEncodingConfig,
  WorkflowEncodingConfigSchema,
} from "./config.js";
import {
  WorkflowPayloadCompressionError,
  WorkflowPayloadEncryptionError,
  WorkflowPayloadOffloadingError,
} from "./errors.js";
import {
  EncodedPayloadOption,
  EncodedPayloadOptions,
  ENCRYPTED_STR_FIELD_TYPE,
  isEncodedPayloadOption,
  NetworkEncodedInput,
  NetworkEncodedResult,
  WorkflowContext,
} from "./models.js";
import {
  dumpsPythonJson,
  loadsPythonJson,
  parsePythonJson,
  PythonJsonDecodeError,
  PythonJsonObject,
  PythonJsonValue,
  toJsonBytes,
} from "./python-json.js";
import { BlobNotFoundError, withBlobStorage } from "./storage/blob-storage.js";

const NONCE_SIZE = 12;
const AES_KEY_SIZES = new Set([16, 24, 32]);
const ENCRYPTED_PATCH_TYPE = "__encrypted__";

const textEncoder = new TextEncoder();

export type EncodedPayloadContent = {
  data: Uint8Array;
  encodingOptions: EncodedPayloadOption[];
};

export type EncodePayloadContentOptions = {
  /** Defaults to `true`. Events are encoded without offloading. */
  allowOffloading?: boolean | undefined;
  /** Offloads the payload whatever its size. Defaults to `false`. */
  forceOffload?: boolean | undefined;
};

// ---------------------------------------------------------------------------
// Byte helpers
// ---------------------------------------------------------------------------

/** Decodes a hex key like Python's `bytes.fromhex`. */
function keyFromHex(hex: string): Uint8Array<ArrayBuffer> {
  const bytes: number[] = [];
  let i = 0;
  while (i < hex.length) {
    if (/\s/.test(hex[i]!)) {
      i++;
      continue;
    }
    const pair = hex.slice(i, i + 2);
    if (!/^[0-9a-fA-F]{2}$/.test(pair)) {
      throw new WorkflowPayloadEncryptionError(
        "Payload encryption key must be a hex string",
      );
    }
    bytes.push(parseInt(pair, 16));
    i += 2;
  }
  if (!AES_KEY_SIZES.has(bytes.length)) {
    throw new WorkflowPayloadEncryptionError(
      "Payload encryption key must be 128, 192, or 256 bits",
    );
  }
  return new Uint8Array(bytes);
}

function bytesToBase64(bytes: Uint8Array): string {
  let binary = "";
  // Chunked to stay below the engine's maximum number of call arguments.
  for (let i = 0; i < bytes.length; i += 0x8000) {
    binary += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
  }
  return btoa(binary);
}

/** Decodes base64 like Python's `base64.b64decode`, which skips invalid characters. */
function base64ToBytes(encoded: string): Uint8Array<ArrayBuffer> {
  const binary = atob(encoded.replace(/[^A-Za-z0-9+/=]/g, ""));
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

/**
 * Percent-encodes everything but unreserved characters, like Python's
 * `urllib.parse.quote(value, safe="")`, which also escapes `!'()*`.
 */
function quote(value: string): string {
  return encodeURIComponent(value).replace(
    /[!'()*]/g,
    (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`,
  );
}

function bytesToHex(bytes: Uint8Array): string {
  return Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");
}

function logError(message: string): void {
  try {
    (globalThis as { console?: { error?: (message: string) => void } })
      .console?.error?.(message);
  } catch {
    // Ignore logging failures.
  }
}

function subtleCrypto(): SubtleCrypto {
  const subtle = globalThis.crypto?.subtle;
  if (!subtle) {
    throw new WorkflowPayloadEncryptionError(
      "Payload encryption requires the Web Crypto API (globalThis.crypto.subtle)",
    );
  }
  return subtle;
}

class AesGcmKey {
  #key: Promise<CryptoKey> | undefined;

  constructor(private readonly raw: Uint8Array<ArrayBuffer>) {}

  get key(): Promise<CryptoKey> {
    this.#key ??= this.#import();
    return this.#key;
  }

  async #import(): Promise<CryptoKey> {
    try {
      return await subtleCrypto().importKey(
        "raw",
        this.raw,
        { name: "AES-GCM" },
        false,
        ["encrypt", "decrypt"],
      );
    } catch (error) {
      // Chromium's Web Crypto rejects 192-bit AES keys, which Python accepts.
      throw new WorkflowPayloadEncryptionError(
        `This runtime cannot use a ${this.raw.length * 8}-bit payload encryption key`
          + " (Chromium-based browsers only support 128- and 256-bit AES keys)",
        { cause: error },
      );
    }
  }

  async encrypt(nonce: Uint8Array<ArrayBuffer>, data: Uint8Array<ArrayBuffer>) {
    const ciphertext = await subtleCrypto().encrypt(
      { name: "AES-GCM", iv: nonce },
      await this.key,
      data,
    );
    return new Uint8Array(ciphertext);
  }

  async decrypt(nonce: Uint8Array<ArrayBuffer>, data: Uint8Array<ArrayBuffer>) {
    const plaintext = await subtleCrypto().decrypt(
      { name: "AES-GCM", iv: nonce },
      await this.key,
      data,
    );
    return new Uint8Array(plaintext);
  }
}

// ---------------------------------------------------------------------------
// Payload encoder
// ---------------------------------------------------------------------------

function isMap(value: PythonJsonValue): value is PythonJsonObject {
  return value instanceof Map;
}

/** The error class of the config section that failed validation. */
function configError(error: z.ZodError): Error {
  const message = `Invalid workflow encoding config:\n${z.prettifyError(error)}`;
  switch (error.issues[0]?.path[0]) {
    case "payloadOffloading":
      return new WorkflowPayloadOffloadingError(message);
    case "payloadCompression":
      return new WorkflowPayloadCompressionError(message);
    default:
      return new WorkflowPayloadEncryptionError(message);
  }
}

type OffloadingConfig = NonNullable<
  ResolvedWorkflowEncodingConfig["payloadOffloading"]
>;
type CompressionConfig = NonNullable<
  ResolvedWorkflowEncodingConfig["payloadCompression"]
>;

/**
 * Handles workflow payload encoding and decoding:
 * - Field-level or full-payload encryption, with key rotation
 * - Compression
 * - Blob storage offloading
 */
export class PayloadEncoder {
  static readonly BLOB_STORAGE_KEY_PREFIX = "temporal-payload";

  // Only validated copies are kept: changing the caller's config object later
  // has no effect, and the keys don't show up when the encoder is logged.
  readonly #mode: PayloadEncryptionMode | undefined;
  readonly #encryptorMain: AesGcmKey | undefined;
  readonly #encryptorSecondary: AesGcmKey | undefined;
  readonly #offloading: OffloadingConfig | undefined;
  readonly #compression: CompressionConfig | undefined;

  constructor(encodingConfig: WorkflowEncodingConfig) {
    const parsed = WorkflowEncodingConfigSchema.safeParse(encodingConfig);
    if (!parsed.success) throw configError(parsed.error);
    const { payloadEncryption, payloadOffloading, payloadCompression } =
      parsed.data;
    if (payloadEncryption) {
      const { mode, mainKey, secondaryKey } = payloadEncryption;
      this.#mode = mode;
      this.#encryptorMain = new AesGcmKey(keyFromHex(mainKey));
      if (secondaryKey) {
        this.#encryptorSecondary = new AesGcmKey(keyFromHex(secondaryKey));
      }
    }
    this.#offloading = payloadOffloading;
    this.#compression = payloadCompression;
  }

  /** The key prefix of the payloads offloaded for a workflow execution. */
  static blobStorageKeyPrefix(context: WorkflowContext): string {
    return [
      PayloadEncoder.BLOB_STORAGE_KEY_PREFIX,
      quote(context.namespace),
      quote(context.executionId),
    ].join("/");
  }

  #requireEncryptor(): AesGcmKey {
    if (!this.#encryptorMain) {
      throw new WorkflowPayloadEncryptionError(
        "You must configure payload encryption",
      );
    }
    return this.#encryptorMain;
  }

  async #encrypt(data: Uint8Array<ArrayBuffer>): Promise<Uint8Array> {
    const encryptor = this.#requireEncryptor();
    const nonce = globalThis.crypto.getRandomValues(new Uint8Array(NONCE_SIZE));
    const ciphertext = await encryptor.encrypt(nonce, data);
    const result = new Uint8Array(NONCE_SIZE + ciphertext.length);
    result.set(nonce, 0);
    result.set(ciphertext, NONCE_SIZE);
    return result;
  }

  async #decrypt(data: Uint8Array): Promise<Uint8Array> {
    const encryptor = this.#requireEncryptor();
    const nonce = data.slice(0, NONCE_SIZE);
    const ciphertext = data.slice(NONCE_SIZE);
    try {
      return await encryptor.decrypt(nonce, ciphertext);
    } catch (mainError) {
      // A key the runtime can't use is a configuration error, not a wrong key.
      if (mainError instanceof WorkflowPayloadEncryptionError) throw mainError;
      if (this.#encryptorSecondary) {
        try {
          return await this.#encryptorSecondary.decrypt(nonce, ciphertext);
        } catch (secondaryError) {
          if (secondaryError instanceof WorkflowPayloadEncryptionError) {
            throw secondaryError;
          }
          // Fall through to the error for the main key.
        }
      }
      throw new WorkflowPayloadEncryptionError("Failed to decrypt payload", {
        cause: mainError,
      });
    }
  }

  static #extractEncryptedFields(data: PythonJsonValue): PythonJsonObject[] {
    const encryptedFields: PythonJsonObject[] = [];
    if (isMap(data)) {
      if (data.get("field_type") === ENCRYPTED_STR_FIELD_TYPE) return [data];
      for (const fieldData of data.values()) {
        if (isMap(fieldData) || Array.isArray(fieldData)) {
          encryptedFields.push(...PayloadEncoder.#extractEncryptedFields(fieldData));
        }
      }
    } else if (Array.isArray(data)) {
      for (const item of data) {
        encryptedFields.push(...PayloadEncoder.#extractEncryptedFields(item));
      }
    }
    return encryptedFields;
  }

  static #parseOrUndefined(data: Uint8Array): PythonJsonValue | undefined {
    try {
      return parsePythonJson(data);
    } catch (error) {
      if (error instanceof PythonJsonDecodeError) return undefined;
      throw error;
    }
  }

  static #fieldData(field: PythonJsonObject): string {
    const data = field.get("data");
    if (typeof data !== "string") {
      throw new WorkflowPayloadEncryptionError(
        `Encrypted field data must be a string`,
      );
    }
    return data;
  }

  async #partiallyEncryptFields(
    data: Uint8Array,
  ): Promise<[Uint8Array, boolean]> {
    const obj = PayloadEncoder.#parseOrUndefined(data);
    if (obj === undefined) return [data, false];

    const encryptedFields = PayloadEncoder.#extractEncryptedFields(obj);
    for (const field of encryptedFields) {
      const plaintext = textEncoder.encode(PayloadEncoder.#fieldData(field));
      field.set("data", bytesToBase64(await this.#encrypt(plaintext)));
    }
    return [dumpsPythonJson(obj), encryptedFields.length > 0];
  }

  async #partiallyDecryptFields(
    data: Uint8Array,
  ): Promise<[Uint8Array, boolean]> {
    const obj = PayloadEncoder.#parseOrUndefined(data);
    if (obj === undefined) return [data, false];

    const encryptedFields = PayloadEncoder.#extractEncryptedFields(obj);
    for (const field of encryptedFields) {
      const ciphertext = base64ToBytes(PayloadEncoder.#fieldData(field));
      const plaintext = await this.#decrypt(ciphertext);
      field.set("data", new TextDecoder("utf-8", { fatal: true }).decode(plaintext));
    }
    return [dumpsPythonJson(obj), encryptedFields.length > 0];
  }

  async #compress(data: Uint8Array): Promise<[Uint8Array, boolean]> {
    const compression = this.#compression;
    if (!compression || data.length < compression.minSizeBytes) {
      return [data, false];
    }
    const compressed = await zstdCompress(data, compression.algorithmConfig);
    if (compressed.length >= data.length) return [data, false];
    const packed = await packCompressedPayload({
      compression: compression.algorithmConfig,
      payload: compressed,
    });
    return [packed, true];
  }

  async #decompress(data: Uint8Array): Promise<Uint8Array> {
    const { payload } = await unpackCompressedPayload(data);
    return zstdDecompress(payload);
  }

  async #handleOffloading(
    offloading: OffloadingConfig,
    data: Uint8Array,
    context: WorkflowContext | undefined,
    force: boolean,
  ): Promise<[Uint8Array, boolean]> {
    if (!force && data.length < offloading.minSizeBytes) return [data, false];

    if (!context) {
      logError(
        "Payload offloading required but no context was provided. "
          + "Cannot proceed with offloading...",
      );
      return [data, false];
    }

    // The content hash makes the key unique and the upload idempotent.
    const digest = await subtleCrypto().digest(
      "SHA-256",
      new Uint8Array(data),
    );
    const blobKey = `sha256:${bytesToHex(new Uint8Array(digest))}`;
    const payloadKey = `${PayloadEncoder.blobStorageKeyPrefix(context)}/${blobKey}`;
    try {
      await withBlobStorage(offloading.storageConfig, async (storage) => {
        let blob = null;
        try {
          blob = await storage.getBlobProperties(payloadKey);
        } catch (error) {
          if (!(error instanceof BlobNotFoundError)) throw error;
        }
        if (!blob) await storage.uploadBlob(payloadKey, data);
      });
    } catch (error) {
      if (error instanceof WorkflowPayloadOffloadingError) throw error;
      throw new WorkflowPayloadOffloadingError("Failed to offload payload", {
        cause: error,
      });
    }

    // Same bytes as Python's `OffloadedPayloadData(key=...).model_dump_json()`.
    return [textEncoder.encode(JSON.stringify({ key: payloadKey })), true];
  }

  async #restoreOffloaded(data: Uint8Array): Promise<Uint8Array> {
    const offloading = this.#offloading;
    if (!offloading) {
      throw new WorkflowPayloadOffloadingError(
        "Payload offloading is not enabled but an offloaded payload was received",
      );
    }
    let key: unknown;
    try {
      const parsed: unknown = JSON.parse(
        new TextDecoder("utf-8", { fatal: true }).decode(data),
      );
      key = isPlainObject(parsed) ? parsed["key"] : undefined;
    } catch {
      // Reported below.
    }
    if (typeof key !== "string") {
      throw new WorkflowPayloadOffloadingError("Invalid offloaded payload data");
    }
    try {
      return await withBlobStorage(
        offloading.storageConfig,
        (storage) => storage.getBlob(key),
      );
    } catch (error) {
      if (error instanceof WorkflowPayloadOffloadingError) throw error;
      throw new WorkflowPayloadOffloadingError(
        `Failed to fetch offloaded payload ${key}`,
        { cause: error },
      );
    }
  }

  /**
   * Encodes raw payload bytes. Encoding options are listed in the order the
   * transforms were applied; `decodePayloadContent` reverses them.
   *
   * @param context - The execution the payload belongs to. Payloads are only
   *   offloaded when it is given.
   */
  async encodePayloadContent(
    data: Uint8Array | string,
    context?: WorkflowContext,
    options: EncodePayloadContentOptions = {},
  ): Promise<EncodedPayloadContent> {
    const { allowOffloading = true, forceOffload = false } = options;
    let bytes: Uint8Array = typeof data === "string"
      ? textEncoder.encode(data)
      : data;
    const encodingOptions: EncodedPayloadOption[] = [];

    // Partial encryption needs the original JSON fields. It must run before
    // compression or offloading, which make field-level markers unavailable.
    if (this.#mode === "partial") {
      const [encoded, partiallyEncrypted] = await this.#partiallyEncryptFields(
        bytes,
      );
      bytes = encoded;
      if (partiallyEncrypted) {
        encodingOptions.push(EncodedPayloadOptions.PartiallyEncrypted);
      }
    }

    // Compress before offloading so the offloading threshold applies to the
    // bytes that would otherwise cross the network, not to the raw JSON size.
    const [compressed, isCompressed] = await this.#compress(bytes);
    bytes = compressed;
    if (isCompressed) encodingOptions.push(EncodedPayloadOptions.Compressed);

    if (allowOffloading && this.#offloading) {
      const [offloaded, isOffloaded] = await this.#handleOffloading(
        this.#offloading,
        bytes,
        context,
        forceOffload,
      );
      bytes = offloaded;
      if (isOffloaded) encodingOptions.push(EncodedPayloadOptions.Offloaded);
    }

    // Full encryption is always the last transform. If the payload was
    // offloaded, this encrypts the small blob reference, not the blob.
    if (this.#mode === "full") {
      bytes = await this.#encrypt(new Uint8Array(bytes));
      encodingOptions.push(EncodedPayloadOptions.Encrypted);
    }

    return { data: bytes, encodingOptions };
  }

  /** Encodes event payload content. Events are never offloaded. */
  async encodeEventPayloadContent(
    data: Uint8Array | string,
  ): Promise<EncodedPayloadContent> {
    return this.encodePayloadContent(data, undefined, {
      allowOffloading: false,
    });
  }

  /** Decodes payload bytes, undoing `encodingOptions` in reverse order. */
  async decodePayloadContent(
    data: Uint8Array,
    encodingOptions: readonly EncodedPayloadOption[],
  ): Promise<Uint8Array> {
    for (const option of [...encodingOptions].reverse()) {
      switch (option) {
        case EncodedPayloadOptions.Encrypted:
          data = await this.#decrypt(data);
          break;
        case EncodedPayloadOptions.PartiallyEncrypted:
          [data] = await this.#partiallyDecryptFields(data);
          break;
        case EncodedPayloadOptions.Compressed:
          data = await this.#decompress(data);
          break;
        case EncodedPayloadOptions.Offloaded:
          data = await this.#restoreOffloaded(data);
          break;
        default:
          throw new WorkflowPayloadOffloadingError(
            `Unknown decoding option: ${String(option)}`,
          );
      }
    }
    return data;
  }

  /**
   * Decodes an event payload (`{type, value, encoding_options}`), returning
   * it with its decoded `value` and empty `encoding_options`.
   */
  async decodeEventPayload(
    payloadData: Record<string, unknown>,
  ): Promise<Record<string, unknown>> {
    const rawOptions = payloadData["encoding_options"];
    if (!Array.isArray(rawOptions) || rawOptions.length === 0) {
      return payloadData;
    }
    const encodingOptions = rawOptions.map((option) => {
      if (!isEncodedPayloadOption(option)) {
        throw new WorkflowPayloadEncryptionError(
          `Unknown encoding option: ${String(option)}`,
        );
      }
      return option;
    });

    // JSON Patch payloads encrypt each patch value separately.
    if (
      encodingOptions.includes(EncodedPayloadOptions.PartiallyEncrypted)
      && payloadData["type"] === "json_patch"
      && Array.isArray(payloadData["value"])
    ) {
      return {
        type: payloadData["type"],
        value: await this.#decryptJsonPatchSelective(payloadData["value"]),
        encoding_options: [],
      };
    }

    const encryptedBytes = base64ToBytes(String(payloadData["value"]));
    const decryptedBytes = await this.decodePayloadContent(
      encryptedBytes,
      encodingOptions,
    );
    return {
      type: payloadData["type"],
      value: loadsPythonJson(decryptedBytes),
      encoding_options: [],
    };
  }

  /** Decrypts patches whose value is `{type: "__encrypted__", value: "<base64>"}`. */
  async #decryptJsonPatchSelective(patches: unknown[]): Promise<unknown[]> {
    const decrypted: unknown[] = [];
    for (const patch of patches) {
      const patchValue = isPlainObject(patch) ? patch["value"] : undefined;
      if (isPlainObject(patchValue) && patchValue["type"] === ENCRYPTED_PATCH_TYPE) {
        const encryptedData = base64ToBytes(String(patchValue["value"] ?? ""));
        const decryptedBytes = await this.#decrypt(encryptedData);
        decrypted.push({
          ...(patch as Record<string, unknown>),
          value: loadsPythonJson(decryptedBytes),
        });
      } else {
        decrypted.push(patch);
      }
    }
    return decrypted;
  }

  /**
   * Encodes a workflow input. Every input sent to the workflows API must go
   * through this method.
   *
   * @param context - The execution the input belongs to, required to offload
   *   it.
   */
  async encodeNetworkInput(
    data: unknown,
    context?: WorkflowContext,
  ): Promise<NetworkEncodedInput> {
    const { data: encoded, encodingOptions } = await this.encodePayloadContent(
      toJsonBytes(data),
      context,
    );
    return {
      b64payload: bytesToBase64(encoded),
      encoding_options: encodingOptions,
      empty: false,
    };
  }

  /**
   * Decodes a workflow result returned by the workflows API. Returns the
   * parsed JSON value, the raw bytes if they are not JSON, or `data` as-is if
   * it is not an encoded result.
   */
  async decodeNetworkResult(data: unknown): Promise<unknown> {
    if (!this.checkIsPayloadEncoded(data)) return data;

    const bytes = await this.decodePayloadContent(
      base64ToBytes(data.b64payload),
      data.encoding_options ?? [],
    );
    try {
      return loadsPythonJson(bytes);
    } catch {
      return bytes;
    }
  }

  /** Checks whether `data` is an encoded workflow result. */
  checkIsPayloadEncoded(
    data: unknown,
  ): data is Omit<NetworkEncodedResult, "encoding_options"> & {
    encoding_options?: EncodedPayloadOption[];
  } {
    if (!isPlainObject(data) || typeof data["b64payload"] !== "string") {
      return false;
    }
    const options = data["encoding_options"];
    return options === undefined
      || (Array.isArray(options) && options.every(isEncodedPayloadOption));
  }
}
