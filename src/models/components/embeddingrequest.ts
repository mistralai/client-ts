/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Text to embed.
 */
export type Inputs = string | Array<string>;

export type EmbeddingRequest = {
  /**
   * ID of the model to use.
   */
  model?: string | undefined;
  /**
   * Text to embed.
   */
  inputs: string | Array<string>;
};

/** @internal */
export const Inputs$inboundSchema: z.ZodType<Inputs, z.ZodTypeDef, unknown> = z
  .union([z.string(), z.array(z.string())]);

/** @internal */
export type Inputs$Outbound = string | Array<string>;

/** @internal */
export const Inputs$outboundSchema: z.ZodType<
  Inputs$Outbound,
  z.ZodTypeDef,
  Inputs
> = z.union([z.string(), z.array(z.string())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Inputs$ {
  /** @deprecated use `Inputs$inboundSchema` instead. */
  export const inboundSchema = Inputs$inboundSchema;
  /** @deprecated use `Inputs$outboundSchema` instead. */
  export const outboundSchema = Inputs$outboundSchema;
  /** @deprecated use `Inputs$Outbound` instead. */
  export type Outbound = Inputs$Outbound;
}

export function inputsToJSON(inputs: Inputs): string {
  return JSON.stringify(Inputs$outboundSchema.parse(inputs));
}

export function inputsFromJSON(
  jsonString: string,
): SafeParseResult<Inputs, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Inputs$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Inputs' from JSON`,
  );
}

/** @internal */
export const EmbeddingRequest$inboundSchema: z.ZodType<
  EmbeddingRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  model: z.string().default("mistral-embed"),
  input: z.union([z.string(), z.array(z.string())]),
}).transform((v) => {
  return remap$(v, {
    "input": "inputs",
  });
});

/** @internal */
export type EmbeddingRequest$Outbound = {
  model: string;
  input: string | Array<string>;
};

/** @internal */
export const EmbeddingRequest$outboundSchema: z.ZodType<
  EmbeddingRequest$Outbound,
  z.ZodTypeDef,
  EmbeddingRequest
> = z.object({
  model: z.string().default("mistral-embed"),
  inputs: z.union([z.string(), z.array(z.string())]),
}).transform((v) => {
  return remap$(v, {
    inputs: "input",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EmbeddingRequest$ {
  /** @deprecated use `EmbeddingRequest$inboundSchema` instead. */
  export const inboundSchema = EmbeddingRequest$inboundSchema;
  /** @deprecated use `EmbeddingRequest$outboundSchema` instead. */
  export const outboundSchema = EmbeddingRequest$outboundSchema;
  /** @deprecated use `EmbeddingRequest$Outbound` instead. */
  export type Outbound = EmbeddingRequest$Outbound;
}

export function embeddingRequestToJSON(
  embeddingRequest: EmbeddingRequest,
): string {
  return JSON.stringify(
    EmbeddingRequest$outboundSchema.parse(embeddingRequest),
  );
}

export function embeddingRequestFromJSON(
  jsonString: string,
): SafeParseResult<EmbeddingRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EmbeddingRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EmbeddingRequest' from JSON`,
  );
}
