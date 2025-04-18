/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import {
  catchUnrecognizedEnum,
  OpenEnum,
  Unrecognized,
} from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  DeltaMessage,
  DeltaMessage$inboundSchema,
  DeltaMessage$Outbound,
  DeltaMessage$outboundSchema,
} from "./deltamessage.js";

export const CompletionResponseStreamChoiceFinishReason = {
  Stop: "stop",
  Length: "length",
  Error: "error",
  ToolCalls: "tool_calls",
} as const;
export type CompletionResponseStreamChoiceFinishReason = OpenEnum<
  typeof CompletionResponseStreamChoiceFinishReason
>;

export type CompletionResponseStreamChoice = {
  index: number;
  delta: DeltaMessage;
  finishReason: CompletionResponseStreamChoiceFinishReason | null;
};

/** @internal */
export const CompletionResponseStreamChoiceFinishReason$inboundSchema:
  z.ZodType<CompletionResponseStreamChoiceFinishReason, z.ZodTypeDef, unknown> =
    z
      .union([
        z.nativeEnum(CompletionResponseStreamChoiceFinishReason),
        z.string().transform(catchUnrecognizedEnum),
      ]);

/** @internal */
export const CompletionResponseStreamChoiceFinishReason$outboundSchema:
  z.ZodType<
    CompletionResponseStreamChoiceFinishReason,
    z.ZodTypeDef,
    CompletionResponseStreamChoiceFinishReason
  > = z.union([
    z.nativeEnum(CompletionResponseStreamChoiceFinishReason),
    z.string().and(z.custom<Unrecognized<string>>()),
  ]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CompletionResponseStreamChoiceFinishReason$ {
  /** @deprecated use `CompletionResponseStreamChoiceFinishReason$inboundSchema` instead. */
  export const inboundSchema =
    CompletionResponseStreamChoiceFinishReason$inboundSchema;
  /** @deprecated use `CompletionResponseStreamChoiceFinishReason$outboundSchema` instead. */
  export const outboundSchema =
    CompletionResponseStreamChoiceFinishReason$outboundSchema;
}

/** @internal */
export const CompletionResponseStreamChoice$inboundSchema: z.ZodType<
  CompletionResponseStreamChoice,
  z.ZodTypeDef,
  unknown
> = z.object({
  index: z.number().int(),
  delta: DeltaMessage$inboundSchema,
  finish_reason: z.nullable(
    CompletionResponseStreamChoiceFinishReason$inboundSchema,
  ),
}).transform((v) => {
  return remap$(v, {
    "finish_reason": "finishReason",
  });
});

/** @internal */
export type CompletionResponseStreamChoice$Outbound = {
  index: number;
  delta: DeltaMessage$Outbound;
  finish_reason: string | null;
};

/** @internal */
export const CompletionResponseStreamChoice$outboundSchema: z.ZodType<
  CompletionResponseStreamChoice$Outbound,
  z.ZodTypeDef,
  CompletionResponseStreamChoice
> = z.object({
  index: z.number().int(),
  delta: DeltaMessage$outboundSchema,
  finishReason: z.nullable(
    CompletionResponseStreamChoiceFinishReason$outboundSchema,
  ),
}).transform((v) => {
  return remap$(v, {
    finishReason: "finish_reason",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CompletionResponseStreamChoice$ {
  /** @deprecated use `CompletionResponseStreamChoice$inboundSchema` instead. */
  export const inboundSchema = CompletionResponseStreamChoice$inboundSchema;
  /** @deprecated use `CompletionResponseStreamChoice$outboundSchema` instead. */
  export const outboundSchema = CompletionResponseStreamChoice$outboundSchema;
  /** @deprecated use `CompletionResponseStreamChoice$Outbound` instead. */
  export type Outbound = CompletionResponseStreamChoice$Outbound;
}

export function completionResponseStreamChoiceToJSON(
  completionResponseStreamChoice: CompletionResponseStreamChoice,
): string {
  return JSON.stringify(
    CompletionResponseStreamChoice$outboundSchema.parse(
      completionResponseStreamChoice,
    ),
  );
}

export function completionResponseStreamChoiceFromJSON(
  jsonString: string,
): SafeParseResult<CompletionResponseStreamChoice, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CompletionResponseStreamChoice$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CompletionResponseStreamChoice' from JSON`,
  );
}
