/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * this restriction of `Function` is used to select a specific function to call
 */
export type FunctionName = {
  name: string;
};

/** @internal */
export const FunctionName$inboundSchema: z.ZodType<
  FunctionName,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
});

/** @internal */
export type FunctionName$Outbound = {
  name: string;
};

/** @internal */
export const FunctionName$outboundSchema: z.ZodType<
  FunctionName$Outbound,
  z.ZodTypeDef,
  FunctionName
> = z.object({
  name: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FunctionName$ {
  /** @deprecated use `FunctionName$inboundSchema` instead. */
  export const inboundSchema = FunctionName$inboundSchema;
  /** @deprecated use `FunctionName$outboundSchema` instead. */
  export const outboundSchema = FunctionName$outboundSchema;
  /** @deprecated use `FunctionName$Outbound` instead. */
  export type Outbound = FunctionName$Outbound;
}

export function functionNameToJSON(functionName: FunctionName): string {
  return JSON.stringify(FunctionName$outboundSchema.parse(functionName));
}

export function functionNameFromJSON(
  jsonString: string,
): SafeParseResult<FunctionName, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FunctionName$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FunctionName' from JSON`,
  );
}
