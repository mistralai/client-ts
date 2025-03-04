/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type JobsApiRoutesFineTuningArchiveFineTunedModelRequest = {
  /**
   * The ID of the model to archive.
   */
  modelId: string;
};

/** @internal */
export const JobsApiRoutesFineTuningArchiveFineTunedModelRequest$inboundSchema:
  z.ZodType<
    JobsApiRoutesFineTuningArchiveFineTunedModelRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    model_id: z.string(),
  }).transform((v) => {
    return remap$(v, {
      "model_id": "modelId",
    });
  });

/** @internal */
export type JobsApiRoutesFineTuningArchiveFineTunedModelRequest$Outbound = {
  model_id: string;
};

/** @internal */
export const JobsApiRoutesFineTuningArchiveFineTunedModelRequest$outboundSchema:
  z.ZodType<
    JobsApiRoutesFineTuningArchiveFineTunedModelRequest$Outbound,
    z.ZodTypeDef,
    JobsApiRoutesFineTuningArchiveFineTunedModelRequest
  > = z.object({
    modelId: z.string(),
  }).transform((v) => {
    return remap$(v, {
      modelId: "model_id",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace JobsApiRoutesFineTuningArchiveFineTunedModelRequest$ {
  /** @deprecated use `JobsApiRoutesFineTuningArchiveFineTunedModelRequest$inboundSchema` instead. */
  export const inboundSchema =
    JobsApiRoutesFineTuningArchiveFineTunedModelRequest$inboundSchema;
  /** @deprecated use `JobsApiRoutesFineTuningArchiveFineTunedModelRequest$outboundSchema` instead. */
  export const outboundSchema =
    JobsApiRoutesFineTuningArchiveFineTunedModelRequest$outboundSchema;
  /** @deprecated use `JobsApiRoutesFineTuningArchiveFineTunedModelRequest$Outbound` instead. */
  export type Outbound =
    JobsApiRoutesFineTuningArchiveFineTunedModelRequest$Outbound;
}

export function jobsApiRoutesFineTuningArchiveFineTunedModelRequestToJSON(
  jobsApiRoutesFineTuningArchiveFineTunedModelRequest:
    JobsApiRoutesFineTuningArchiveFineTunedModelRequest,
): string {
  return JSON.stringify(
    JobsApiRoutesFineTuningArchiveFineTunedModelRequest$outboundSchema.parse(
      jobsApiRoutesFineTuningArchiveFineTunedModelRequest,
    ),
  );
}

export function jobsApiRoutesFineTuningArchiveFineTunedModelRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  JobsApiRoutesFineTuningArchiveFineTunedModelRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      JobsApiRoutesFineTuningArchiveFineTunedModelRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'JobsApiRoutesFineTuningArchiveFineTunedModelRequest' from JSON`,
  );
}
