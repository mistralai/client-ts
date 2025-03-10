/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  CompletionChunk,
  CompletionChunk$inboundSchema,
  CompletionChunk$Outbound,
  CompletionChunk$outboundSchema,
} from "./completionchunk.js";

export type CompletionEvent = {
  data: CompletionChunk;
};

/** @internal */
export const CompletionEvent$inboundSchema: z.ZodType<
  CompletionEvent,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: z.string().transform((v, ctx) => {
    try {
      return JSON.parse(v);
    } catch (err) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `malformed json: ${err}`,
      });
      return z.NEVER;
    }
  }).pipe(CompletionChunk$inboundSchema),
});

/** @internal */
export type CompletionEvent$Outbound = {
  data: CompletionChunk$Outbound;
};

/** @internal */
export const CompletionEvent$outboundSchema: z.ZodType<
  CompletionEvent$Outbound,
  z.ZodTypeDef,
  CompletionEvent
> = z.object({
  data: CompletionChunk$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CompletionEvent$ {
  /** @deprecated use `CompletionEvent$inboundSchema` instead. */
  export const inboundSchema = CompletionEvent$inboundSchema;
  /** @deprecated use `CompletionEvent$outboundSchema` instead. */
  export const outboundSchema = CompletionEvent$outboundSchema;
  /** @deprecated use `CompletionEvent$Outbound` instead. */
  export type Outbound = CompletionEvent$Outbound;
}

export function completionEventToJSON(
  completionEvent: CompletionEvent,
): string {
  return JSON.stringify(CompletionEvent$outboundSchema.parse(completionEvent));
}

export function completionEventFromJSON(
  jsonString: string,
): SafeParseResult<CompletionEvent, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CompletionEvent$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CompletionEvent' from JSON`,
  );
}
