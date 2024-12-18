/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const ReferenceChunkType = {
  Reference: "reference",
} as const;
export type ReferenceChunkType = ClosedEnum<typeof ReferenceChunkType>;

export type ReferenceChunk = {
  referenceIds: Array<number>;
  type?: ReferenceChunkType | undefined;
};

/** @internal */
export const ReferenceChunkType$inboundSchema: z.ZodNativeEnum<
  typeof ReferenceChunkType
> = z.nativeEnum(ReferenceChunkType);

/** @internal */
export const ReferenceChunkType$outboundSchema: z.ZodNativeEnum<
  typeof ReferenceChunkType
> = ReferenceChunkType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ReferenceChunkType$ {
  /** @deprecated use `ReferenceChunkType$inboundSchema` instead. */
  export const inboundSchema = ReferenceChunkType$inboundSchema;
  /** @deprecated use `ReferenceChunkType$outboundSchema` instead. */
  export const outboundSchema = ReferenceChunkType$outboundSchema;
}

/** @internal */
export const ReferenceChunk$inboundSchema: z.ZodType<
  ReferenceChunk,
  z.ZodTypeDef,
  unknown
> = z.object({
  reference_ids: z.array(z.number().int()),
  type: ReferenceChunkType$inboundSchema.default("reference"),
}).transform((v) => {
  return remap$(v, {
    "reference_ids": "referenceIds",
  });
});

/** @internal */
export type ReferenceChunk$Outbound = {
  reference_ids: Array<number>;
  type: string;
};

/** @internal */
export const ReferenceChunk$outboundSchema: z.ZodType<
  ReferenceChunk$Outbound,
  z.ZodTypeDef,
  ReferenceChunk
> = z.object({
  referenceIds: z.array(z.number().int()),
  type: ReferenceChunkType$outboundSchema.default("reference"),
}).transform((v) => {
  return remap$(v, {
    referenceIds: "reference_ids",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ReferenceChunk$ {
  /** @deprecated use `ReferenceChunk$inboundSchema` instead. */
  export const inboundSchema = ReferenceChunk$inboundSchema;
  /** @deprecated use `ReferenceChunk$outboundSchema` instead. */
  export const outboundSchema = ReferenceChunk$outboundSchema;
  /** @deprecated use `ReferenceChunk$Outbound` instead. */
  export type Outbound = ReferenceChunk$Outbound;
}

export function referenceChunkToJSON(referenceChunk: ReferenceChunk): string {
  return JSON.stringify(ReferenceChunk$outboundSchema.parse(referenceChunk));
}

export function referenceChunkFromJSON(
  jsonString: string,
): SafeParseResult<ReferenceChunk, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ReferenceChunk$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ReferenceChunk' from JSON`,
  );
}
