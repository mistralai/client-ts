/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  BuiltInConnectors,
  BuiltInConnectors$inboundSchema,
  BuiltInConnectors$outboundSchema,
} from "./builtinconnectors.js";

export const ToolFileChunkType = {
  ToolFile: "tool_file",
} as const;
export type ToolFileChunkType = ClosedEnum<typeof ToolFileChunkType>;

export type ToolFileChunk = {
  type?: ToolFileChunkType | undefined;
  tool: BuiltInConnectors;
  fileId: string;
  fileName?: string | null | undefined;
  fileType?: string | null | undefined;
};

/** @internal */
export const ToolFileChunkType$inboundSchema: z.ZodNativeEnum<
  typeof ToolFileChunkType
> = z.nativeEnum(ToolFileChunkType);

/** @internal */
export const ToolFileChunkType$outboundSchema: z.ZodNativeEnum<
  typeof ToolFileChunkType
> = ToolFileChunkType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolFileChunkType$ {
  /** @deprecated use `ToolFileChunkType$inboundSchema` instead. */
  export const inboundSchema = ToolFileChunkType$inboundSchema;
  /** @deprecated use `ToolFileChunkType$outboundSchema` instead. */
  export const outboundSchema = ToolFileChunkType$outboundSchema;
}

/** @internal */
export const ToolFileChunk$inboundSchema: z.ZodType<
  ToolFileChunk,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: ToolFileChunkType$inboundSchema.default("tool_file"),
  tool: BuiltInConnectors$inboundSchema,
  file_id: z.string(),
  file_name: z.nullable(z.string()).optional(),
  file_type: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "file_id": "fileId",
    "file_name": "fileName",
    "file_type": "fileType",
  });
});

/** @internal */
export type ToolFileChunk$Outbound = {
  type: string;
  tool: string;
  file_id: string;
  file_name?: string | null | undefined;
  file_type?: string | null | undefined;
};

/** @internal */
export const ToolFileChunk$outboundSchema: z.ZodType<
  ToolFileChunk$Outbound,
  z.ZodTypeDef,
  ToolFileChunk
> = z.object({
  type: ToolFileChunkType$outboundSchema.default("tool_file"),
  tool: BuiltInConnectors$outboundSchema,
  fileId: z.string(),
  fileName: z.nullable(z.string()).optional(),
  fileType: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    fileId: "file_id",
    fileName: "file_name",
    fileType: "file_type",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ToolFileChunk$ {
  /** @deprecated use `ToolFileChunk$inboundSchema` instead. */
  export const inboundSchema = ToolFileChunk$inboundSchema;
  /** @deprecated use `ToolFileChunk$outboundSchema` instead. */
  export const outboundSchema = ToolFileChunk$outboundSchema;
  /** @deprecated use `ToolFileChunk$Outbound` instead. */
  export type Outbound = ToolFileChunk$Outbound;
}

export function toolFileChunkToJSON(toolFileChunk: ToolFileChunk): string {
  return JSON.stringify(ToolFileChunk$outboundSchema.parse(toolFileChunk));
}

export function toolFileChunkFromJSON(
  jsonString: string,
): SafeParseResult<ToolFileChunk, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ToolFileChunk$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ToolFileChunk' from JSON`,
  );
}
