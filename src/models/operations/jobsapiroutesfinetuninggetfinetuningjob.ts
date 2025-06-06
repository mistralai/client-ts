/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type JobsApiRoutesFineTuningGetFineTuningJobRequest = {
  /**
   * The ID of the job to analyse.
   */
  jobId: string;
};

/**
 * OK
 */
export type JobsApiRoutesFineTuningGetFineTuningJobResponse =
  | (components.ClassifierDetailedJobOut & { jobType: "classifier" })
  | (components.CompletionDetailedJobOut & { jobType: "completion" });

/** @internal */
export const JobsApiRoutesFineTuningGetFineTuningJobRequest$inboundSchema:
  z.ZodType<
    JobsApiRoutesFineTuningGetFineTuningJobRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    job_id: z.string(),
  }).transform((v) => {
    return remap$(v, {
      "job_id": "jobId",
    });
  });

/** @internal */
export type JobsApiRoutesFineTuningGetFineTuningJobRequest$Outbound = {
  job_id: string;
};

/** @internal */
export const JobsApiRoutesFineTuningGetFineTuningJobRequest$outboundSchema:
  z.ZodType<
    JobsApiRoutesFineTuningGetFineTuningJobRequest$Outbound,
    z.ZodTypeDef,
    JobsApiRoutesFineTuningGetFineTuningJobRequest
  > = z.object({
    jobId: z.string(),
  }).transform((v) => {
    return remap$(v, {
      jobId: "job_id",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace JobsApiRoutesFineTuningGetFineTuningJobRequest$ {
  /** @deprecated use `JobsApiRoutesFineTuningGetFineTuningJobRequest$inboundSchema` instead. */
  export const inboundSchema =
    JobsApiRoutesFineTuningGetFineTuningJobRequest$inboundSchema;
  /** @deprecated use `JobsApiRoutesFineTuningGetFineTuningJobRequest$outboundSchema` instead. */
  export const outboundSchema =
    JobsApiRoutesFineTuningGetFineTuningJobRequest$outboundSchema;
  /** @deprecated use `JobsApiRoutesFineTuningGetFineTuningJobRequest$Outbound` instead. */
  export type Outbound =
    JobsApiRoutesFineTuningGetFineTuningJobRequest$Outbound;
}

export function jobsApiRoutesFineTuningGetFineTuningJobRequestToJSON(
  jobsApiRoutesFineTuningGetFineTuningJobRequest:
    JobsApiRoutesFineTuningGetFineTuningJobRequest,
): string {
  return JSON.stringify(
    JobsApiRoutesFineTuningGetFineTuningJobRequest$outboundSchema.parse(
      jobsApiRoutesFineTuningGetFineTuningJobRequest,
    ),
  );
}

export function jobsApiRoutesFineTuningGetFineTuningJobRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  JobsApiRoutesFineTuningGetFineTuningJobRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      JobsApiRoutesFineTuningGetFineTuningJobRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'JobsApiRoutesFineTuningGetFineTuningJobRequest' from JSON`,
  );
}

/** @internal */
export const JobsApiRoutesFineTuningGetFineTuningJobResponse$inboundSchema:
  z.ZodType<
    JobsApiRoutesFineTuningGetFineTuningJobResponse,
    z.ZodTypeDef,
    unknown
  > = z.union([
    components.ClassifierDetailedJobOut$inboundSchema.and(
      z.object({ job_type: z.literal("classifier") }).transform((v) => ({
        jobType: v.job_type,
      })),
    ),
    components.CompletionDetailedJobOut$inboundSchema.and(
      z.object({ job_type: z.literal("completion") }).transform((v) => ({
        jobType: v.job_type,
      })),
    ),
  ]);

/** @internal */
export type JobsApiRoutesFineTuningGetFineTuningJobResponse$Outbound =
  | (components.ClassifierDetailedJobOut$Outbound & { job_type: "classifier" })
  | (components.CompletionDetailedJobOut$Outbound & { job_type: "completion" });

/** @internal */
export const JobsApiRoutesFineTuningGetFineTuningJobResponse$outboundSchema:
  z.ZodType<
    JobsApiRoutesFineTuningGetFineTuningJobResponse$Outbound,
    z.ZodTypeDef,
    JobsApiRoutesFineTuningGetFineTuningJobResponse
  > = z.union([
    components.ClassifierDetailedJobOut$outboundSchema.and(
      z.object({ jobType: z.literal("classifier") }).transform((v) => ({
        job_type: v.jobType,
      })),
    ),
    components.CompletionDetailedJobOut$outboundSchema.and(
      z.object({ jobType: z.literal("completion") }).transform((v) => ({
        job_type: v.jobType,
      })),
    ),
  ]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace JobsApiRoutesFineTuningGetFineTuningJobResponse$ {
  /** @deprecated use `JobsApiRoutesFineTuningGetFineTuningJobResponse$inboundSchema` instead. */
  export const inboundSchema =
    JobsApiRoutesFineTuningGetFineTuningJobResponse$inboundSchema;
  /** @deprecated use `JobsApiRoutesFineTuningGetFineTuningJobResponse$outboundSchema` instead. */
  export const outboundSchema =
    JobsApiRoutesFineTuningGetFineTuningJobResponse$outboundSchema;
  /** @deprecated use `JobsApiRoutesFineTuningGetFineTuningJobResponse$Outbound` instead. */
  export type Outbound =
    JobsApiRoutesFineTuningGetFineTuningJobResponse$Outbound;
}

export function jobsApiRoutesFineTuningGetFineTuningJobResponseToJSON(
  jobsApiRoutesFineTuningGetFineTuningJobResponse:
    JobsApiRoutesFineTuningGetFineTuningJobResponse,
): string {
  return JSON.stringify(
    JobsApiRoutesFineTuningGetFineTuningJobResponse$outboundSchema.parse(
      jobsApiRoutesFineTuningGetFineTuningJobResponse,
    ),
  );
}

export function jobsApiRoutesFineTuningGetFineTuningJobResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  JobsApiRoutesFineTuningGetFineTuningJobResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      JobsApiRoutesFineTuningGetFineTuningJobResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'JobsApiRoutesFineTuningGetFineTuningJobResponse' from JSON`,
  );
}
