/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ClassificationObject,
  ClassificationObject$inboundSchema,
  ClassificationObject$Outbound,
  ClassificationObject$outboundSchema,
} from "./classificationobject.js";

export type ClassificationResponse = {
  id?: string | undefined;
  model?: string | undefined;
  results?: Array<ClassificationObject> | undefined;
};

/** @internal */
export const ClassificationResponse$inboundSchema: z.ZodType<
  ClassificationResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  model: z.string().optional(),
  results: z.array(ClassificationObject$inboundSchema).optional(),
});

/** @internal */
export type ClassificationResponse$Outbound = {
  id?: string | undefined;
  model?: string | undefined;
  results?: Array<ClassificationObject$Outbound> | undefined;
};

/** @internal */
export const ClassificationResponse$outboundSchema: z.ZodType<
  ClassificationResponse$Outbound,
  z.ZodTypeDef,
  ClassificationResponse
> = z.object({
  id: z.string().optional(),
  model: z.string().optional(),
  results: z.array(ClassificationObject$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ClassificationResponse$ {
  /** @deprecated use `ClassificationResponse$inboundSchema` instead. */
  export const inboundSchema = ClassificationResponse$inboundSchema;
  /** @deprecated use `ClassificationResponse$outboundSchema` instead. */
  export const outboundSchema = ClassificationResponse$outboundSchema;
  /** @deprecated use `ClassificationResponse$Outbound` instead. */
  export type Outbound = ClassificationResponse$Outbound;
}

export function classificationResponseToJSON(
  classificationResponse: ClassificationResponse,
): string {
  return JSON.stringify(
    ClassificationResponse$outboundSchema.parse(classificationResponse),
  );
}

export function classificationResponseFromJSON(
  jsonString: string,
): SafeParseResult<ClassificationResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ClassificationResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ClassificationResponse' from JSON`,
  );
}
