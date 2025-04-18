/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type EventOut = {
  /**
   * The name of the event.
   */
  name: string;
  data?: { [k: string]: any } | null | undefined;
  /**
   * The UNIX timestamp (in seconds) of the event.
   */
  createdAt: number;
};

/** @internal */
export const EventOut$inboundSchema: z.ZodType<
  EventOut,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  data: z.nullable(z.record(z.any())).optional(),
  created_at: z.number().int(),
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
  });
});

/** @internal */
export type EventOut$Outbound = {
  name: string;
  data?: { [k: string]: any } | null | undefined;
  created_at: number;
};

/** @internal */
export const EventOut$outboundSchema: z.ZodType<
  EventOut$Outbound,
  z.ZodTypeDef,
  EventOut
> = z.object({
  name: z.string(),
  data: z.nullable(z.record(z.any())).optional(),
  createdAt: z.number().int(),
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EventOut$ {
  /** @deprecated use `EventOut$inboundSchema` instead. */
  export const inboundSchema = EventOut$inboundSchema;
  /** @deprecated use `EventOut$outboundSchema` instead. */
  export const outboundSchema = EventOut$outboundSchema;
  /** @deprecated use `EventOut$Outbound` instead. */
  export type Outbound = EventOut$Outbound;
}

export function eventOutToJSON(eventOut: EventOut): string {
  return JSON.stringify(EventOut$outboundSchema.parse(eventOut));
}

export function eventOutFromJSON(
  jsonString: string,
): SafeParseResult<EventOut, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EventOut$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EventOut' from JSON`,
  );
}
