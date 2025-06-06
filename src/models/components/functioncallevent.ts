/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const FunctionCallEventType = {
  FunctionCallDelta: "function.call.delta",
} as const;
export type FunctionCallEventType = ClosedEnum<typeof FunctionCallEventType>;

export type FunctionCallEvent = {
  type?: FunctionCallEventType | undefined;
  createdAt?: Date | undefined;
  outputIndex?: number | undefined;
  id: string;
  name: string;
  toolCallId: string;
  arguments: string;
};

/** @internal */
export const FunctionCallEventType$inboundSchema: z.ZodNativeEnum<
  typeof FunctionCallEventType
> = z.nativeEnum(FunctionCallEventType);

/** @internal */
export const FunctionCallEventType$outboundSchema: z.ZodNativeEnum<
  typeof FunctionCallEventType
> = FunctionCallEventType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FunctionCallEventType$ {
  /** @deprecated use `FunctionCallEventType$inboundSchema` instead. */
  export const inboundSchema = FunctionCallEventType$inboundSchema;
  /** @deprecated use `FunctionCallEventType$outboundSchema` instead. */
  export const outboundSchema = FunctionCallEventType$outboundSchema;
}

/** @internal */
export const FunctionCallEvent$inboundSchema: z.ZodType<
  FunctionCallEvent,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: FunctionCallEventType$inboundSchema.default("function.call.delta"),
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  output_index: z.number().int().default(0),
  id: z.string(),
  name: z.string(),
  tool_call_id: z.string(),
  arguments: z.string(),
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
    "output_index": "outputIndex",
    "tool_call_id": "toolCallId",
  });
});

/** @internal */
export type FunctionCallEvent$Outbound = {
  type: string;
  created_at?: string | undefined;
  output_index: number;
  id: string;
  name: string;
  tool_call_id: string;
  arguments: string;
};

/** @internal */
export const FunctionCallEvent$outboundSchema: z.ZodType<
  FunctionCallEvent$Outbound,
  z.ZodTypeDef,
  FunctionCallEvent
> = z.object({
  type: FunctionCallEventType$outboundSchema.default("function.call.delta"),
  createdAt: z.date().transform(v => v.toISOString()).optional(),
  outputIndex: z.number().int().default(0),
  id: z.string(),
  name: z.string(),
  toolCallId: z.string(),
  arguments: z.string(),
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
    outputIndex: "output_index",
    toolCallId: "tool_call_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FunctionCallEvent$ {
  /** @deprecated use `FunctionCallEvent$inboundSchema` instead. */
  export const inboundSchema = FunctionCallEvent$inboundSchema;
  /** @deprecated use `FunctionCallEvent$outboundSchema` instead. */
  export const outboundSchema = FunctionCallEvent$outboundSchema;
  /** @deprecated use `FunctionCallEvent$Outbound` instead. */
  export type Outbound = FunctionCallEvent$Outbound;
}

export function functionCallEventToJSON(
  functionCallEvent: FunctionCallEvent,
): string {
  return JSON.stringify(
    FunctionCallEvent$outboundSchema.parse(functionCallEvent),
  );
}

export function functionCallEventFromJSON(
  jsonString: string,
): SafeParseResult<FunctionCallEvent, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FunctionCallEvent$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FunctionCallEvent' from JSON`,
  );
}
