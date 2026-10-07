/**
 * Port of the Python client's payload compression
 * (`mistralai.extra.workflows.encoding.payload_compressor` and
 * `CompressedPayloadData`).
 *
 * Compressed payloads are a msgpack map `{compression, payload}`: the zstd
 * frame along with the algorithm config, so they can be decoded without the
 * encoder's config. Both libraries produce the same bytes as Python's
 * `msgpack` and `zstandard` (libzstd) for the same input.
 */

import type * as Msgpack from "@msgpack/msgpack";
import type * as WasmZstd from "@hpcc-js/wasm-zstd";
import * as z from "zod/v4";

import {
  ResolvedZstdCompressionConfig,
  ZstdCompressionConfigSchema,
} from "./config.js";
import { WorkflowPayloadCompressionError } from "./errors.js";
import { importOptionalModule } from "./optional-module.js";

export type CompressedPayloadData = {
  compression: ResolvedZstdCompressionConfig;
  payload: Uint8Array;
};

const CompressedPayloadDataSchema = z.object({
  compression: ZstdCompressionConfigSchema,
  payload: z.instanceof(Uint8Array),
});

function loadCompressionModule<T>(specifier: string): Promise<T> {
  return importOptionalModule<T>(
    specifier,
    (cause) =>
      new WorkflowPayloadCompressionError(
        "Payload compression requires @msgpack/msgpack and @hpcc-js/wasm-zstd. "
          + "Install them with: npm install @msgpack/msgpack @hpcc-js/wasm-zstd",
        { cause },
      ),
  );
}

let zstdInstance: Promise<WasmZstd.Zstd> | undefined;

function loadZstd(): Promise<WasmZstd.Zstd> {
  zstdInstance ??= loadCompressionModule<typeof WasmZstd>("@hpcc-js/wasm-zstd")
    .then(({ Zstd }) => Zstd.load())
    .catch((error: unknown) => {
      // Let a later call retry, e.g. once the dependency is installed.
      zstdInstance = undefined;
      throw error;
    });
  return zstdInstance;
}

function loadMsgpack(): Promise<typeof Msgpack> {
  return loadCompressionModule<typeof Msgpack>("@msgpack/msgpack");
}

export async function zstdCompress(
  data: Uint8Array,
  config: ResolvedZstdCompressionConfig,
): Promise<Uint8Array> {
  return (await loadZstd()).compress(data, config.level);
}

/** Decompresses a zstd frame. The level the frame was compressed with is irrelevant. */
export async function zstdDecompress(data: Uint8Array): Promise<Uint8Array> {
  const zstd = await loadZstd();
  try {
    return zstd.decompress(data);
  } catch (error) {
    throw new WorkflowPayloadCompressionError("Failed to decompress payload", {
      cause: error,
    });
  }
}

export async function packCompressedPayload(
  data: CompressedPayloadData,
): Promise<Uint8Array> {
  const { encode } = await loadMsgpack();
  // Same key order as Python's `CompressedPayloadData.to_msgpack`.
  return encode({
    compression: {
      algorithm: data.compression.algorithm,
      level: data.compression.level,
    },
    payload: data.payload,
  });
}

export async function unpackCompressedPayload(
  data: Uint8Array,
): Promise<CompressedPayloadData> {
  const { decode } = await loadMsgpack();
  let unpacked: unknown;
  try {
    unpacked = decode(data);
  } catch (error) {
    throw new WorkflowPayloadCompressionError("Invalid compressed payload data", {
      cause: error,
    });
  }
  const parsed = CompressedPayloadDataSchema.safeParse(unpacked);
  if (!parsed.success) {
    throw new WorkflowPayloadCompressionError(
      "Invalid compressed payload metadata",
      { cause: parsed.error },
    );
  }
  return parsed.data;
}
