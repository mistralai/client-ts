/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DeleteModelOut = {
  /**
   * The ID of the deleted model.
   */
  id: string;
  /**
   * The object type that was deleted
   */
  object?: string | undefined;
  /**
   * The deletion status
   */
  deleted?: boolean | undefined;
};

/** @internal */
export const DeleteModelOut$inboundSchema: z.ZodType<
  DeleteModelOut,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  object: z.string().default("model"),
  deleted: z.boolean().default(true),
});

/** @internal */
export type DeleteModelOut$Outbound = {
  id: string;
  object: string;
  deleted: boolean;
};

/** @internal */
export const DeleteModelOut$outboundSchema: z.ZodType<
  DeleteModelOut$Outbound,
  z.ZodTypeDef,
  DeleteModelOut
> = z.object({
  id: z.string(),
  object: z.string().default("model"),
  deleted: z.boolean().default(true),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteModelOut$ {
  /** @deprecated use `DeleteModelOut$inboundSchema` instead. */
  export const inboundSchema = DeleteModelOut$inboundSchema;
  /** @deprecated use `DeleteModelOut$outboundSchema` instead. */
  export const outboundSchema = DeleteModelOut$outboundSchema;
  /** @deprecated use `DeleteModelOut$Outbound` instead. */
  export type Outbound = DeleteModelOut$Outbound;
}

export function deleteModelOutToJSON(deleteModelOut: DeleteModelOut): string {
  return JSON.stringify(DeleteModelOut$outboundSchema.parse(deleteModelOut));
}

export function deleteModelOutFromJSON(
  jsonString: string,
): SafeParseResult<DeleteModelOut, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteModelOut$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteModelOut' from JSON`,
  );
}
