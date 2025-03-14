/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  CheckpointOut,
  CheckpointOut$inboundSchema,
  CheckpointOut$Outbound,
  CheckpointOut$outboundSchema,
} from "./checkpointout.js";
import {
  EventOut,
  EventOut$inboundSchema,
  EventOut$Outbound,
  EventOut$outboundSchema,
} from "./eventout.js";
import {
  GithubRepositoryOut,
  GithubRepositoryOut$inboundSchema,
  GithubRepositoryOut$Outbound,
  GithubRepositoryOut$outboundSchema,
} from "./githubrepositoryout.js";
import {
  JobMetadataOut,
  JobMetadataOut$inboundSchema,
  JobMetadataOut$Outbound,
  JobMetadataOut$outboundSchema,
} from "./jobmetadataout.js";
import {
  TrainingParameters,
  TrainingParameters$inboundSchema,
  TrainingParameters$Outbound,
  TrainingParameters$outboundSchema,
} from "./trainingparameters.js";
import {
  WandbIntegrationOut,
  WandbIntegrationOut$inboundSchema,
  WandbIntegrationOut$Outbound,
  WandbIntegrationOut$outboundSchema,
} from "./wandbintegrationout.js";

export const DetailedJobOutStatus = {
  Queued: "QUEUED",
  Started: "STARTED",
  Validating: "VALIDATING",
  Validated: "VALIDATED",
  Running: "RUNNING",
  FailedValidation: "FAILED_VALIDATION",
  Failed: "FAILED",
  Success: "SUCCESS",
  Cancelled: "CANCELLED",
  CancellationRequested: "CANCELLATION_REQUESTED",
} as const;
export type DetailedJobOutStatus = ClosedEnum<typeof DetailedJobOutStatus>;

export const DetailedJobOutObject = {
  Job: "job",
} as const;
export type DetailedJobOutObject = ClosedEnum<typeof DetailedJobOutObject>;

export type DetailedJobOutIntegrations = WandbIntegrationOut;

export type DetailedJobOutRepositories = GithubRepositoryOut;

export type DetailedJobOut = {
  id: string;
  autoStart: boolean;
  hyperparameters: TrainingParameters;
  /**
   * The name of the model to fine-tune.
   */
  model: string;
  status: DetailedJobOutStatus;
  jobType: string;
  createdAt: number;
  modifiedAt: number;
  trainingFiles: Array<string>;
  validationFiles?: Array<string> | null | undefined;
  object?: "job" | undefined;
  fineTunedModel?: string | null | undefined;
  suffix?: string | null | undefined;
  integrations?: Array<WandbIntegrationOut> | null | undefined;
  trainedTokens?: number | null | undefined;
  repositories?: Array<GithubRepositoryOut> | undefined;
  metadata?: JobMetadataOut | null | undefined;
  /**
   * Event items are created every time the status of a fine-tuning job changes. The timestamped list of all events is accessible here.
   */
  events?: Array<EventOut> | undefined;
  checkpoints?: Array<CheckpointOut> | undefined;
};

/** @internal */
export const DetailedJobOutStatus$inboundSchema: z.ZodNativeEnum<
  typeof DetailedJobOutStatus
> = z.nativeEnum(DetailedJobOutStatus);

/** @internal */
export const DetailedJobOutStatus$outboundSchema: z.ZodNativeEnum<
  typeof DetailedJobOutStatus
> = DetailedJobOutStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DetailedJobOutStatus$ {
  /** @deprecated use `DetailedJobOutStatus$inboundSchema` instead. */
  export const inboundSchema = DetailedJobOutStatus$inboundSchema;
  /** @deprecated use `DetailedJobOutStatus$outboundSchema` instead. */
  export const outboundSchema = DetailedJobOutStatus$outboundSchema;
}

/** @internal */
export const DetailedJobOutObject$inboundSchema: z.ZodNativeEnum<
  typeof DetailedJobOutObject
> = z.nativeEnum(DetailedJobOutObject);

/** @internal */
export const DetailedJobOutObject$outboundSchema: z.ZodNativeEnum<
  typeof DetailedJobOutObject
> = DetailedJobOutObject$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DetailedJobOutObject$ {
  /** @deprecated use `DetailedJobOutObject$inboundSchema` instead. */
  export const inboundSchema = DetailedJobOutObject$inboundSchema;
  /** @deprecated use `DetailedJobOutObject$outboundSchema` instead. */
  export const outboundSchema = DetailedJobOutObject$outboundSchema;
}

/** @internal */
export const DetailedJobOutIntegrations$inboundSchema: z.ZodType<
  DetailedJobOutIntegrations,
  z.ZodTypeDef,
  unknown
> = WandbIntegrationOut$inboundSchema;

/** @internal */
export type DetailedJobOutIntegrations$Outbound = WandbIntegrationOut$Outbound;

/** @internal */
export const DetailedJobOutIntegrations$outboundSchema: z.ZodType<
  DetailedJobOutIntegrations$Outbound,
  z.ZodTypeDef,
  DetailedJobOutIntegrations
> = WandbIntegrationOut$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DetailedJobOutIntegrations$ {
  /** @deprecated use `DetailedJobOutIntegrations$inboundSchema` instead. */
  export const inboundSchema = DetailedJobOutIntegrations$inboundSchema;
  /** @deprecated use `DetailedJobOutIntegrations$outboundSchema` instead. */
  export const outboundSchema = DetailedJobOutIntegrations$outboundSchema;
  /** @deprecated use `DetailedJobOutIntegrations$Outbound` instead. */
  export type Outbound = DetailedJobOutIntegrations$Outbound;
}

export function detailedJobOutIntegrationsToJSON(
  detailedJobOutIntegrations: DetailedJobOutIntegrations,
): string {
  return JSON.stringify(
    DetailedJobOutIntegrations$outboundSchema.parse(detailedJobOutIntegrations),
  );
}

export function detailedJobOutIntegrationsFromJSON(
  jsonString: string,
): SafeParseResult<DetailedJobOutIntegrations, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DetailedJobOutIntegrations$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DetailedJobOutIntegrations' from JSON`,
  );
}

/** @internal */
export const DetailedJobOutRepositories$inboundSchema: z.ZodType<
  DetailedJobOutRepositories,
  z.ZodTypeDef,
  unknown
> = GithubRepositoryOut$inboundSchema;

/** @internal */
export type DetailedJobOutRepositories$Outbound = GithubRepositoryOut$Outbound;

/** @internal */
export const DetailedJobOutRepositories$outboundSchema: z.ZodType<
  DetailedJobOutRepositories$Outbound,
  z.ZodTypeDef,
  DetailedJobOutRepositories
> = GithubRepositoryOut$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DetailedJobOutRepositories$ {
  /** @deprecated use `DetailedJobOutRepositories$inboundSchema` instead. */
  export const inboundSchema = DetailedJobOutRepositories$inboundSchema;
  /** @deprecated use `DetailedJobOutRepositories$outboundSchema` instead. */
  export const outboundSchema = DetailedJobOutRepositories$outboundSchema;
  /** @deprecated use `DetailedJobOutRepositories$Outbound` instead. */
  export type Outbound = DetailedJobOutRepositories$Outbound;
}

export function detailedJobOutRepositoriesToJSON(
  detailedJobOutRepositories: DetailedJobOutRepositories,
): string {
  return JSON.stringify(
    DetailedJobOutRepositories$outboundSchema.parse(detailedJobOutRepositories),
  );
}

export function detailedJobOutRepositoriesFromJSON(
  jsonString: string,
): SafeParseResult<DetailedJobOutRepositories, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DetailedJobOutRepositories$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DetailedJobOutRepositories' from JSON`,
  );
}

/** @internal */
export const DetailedJobOut$inboundSchema: z.ZodType<
  DetailedJobOut,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  auto_start: z.boolean(),
  hyperparameters: TrainingParameters$inboundSchema,
  model: z.string(),
  status: DetailedJobOutStatus$inboundSchema,
  job_type: z.string(),
  created_at: z.number().int(),
  modified_at: z.number().int(),
  training_files: z.array(z.string()),
  validation_files: z.nullable(z.array(z.string())).optional(),
  object: z.literal("job").default("job"),
  fine_tuned_model: z.nullable(z.string()).optional(),
  suffix: z.nullable(z.string()).optional(),
  integrations: z.nullable(z.array(WandbIntegrationOut$inboundSchema))
    .optional(),
  trained_tokens: z.nullable(z.number().int()).optional(),
  repositories: z.array(GithubRepositoryOut$inboundSchema).optional(),
  metadata: z.nullable(JobMetadataOut$inboundSchema).optional(),
  events: z.array(EventOut$inboundSchema).optional(),
  checkpoints: z.array(CheckpointOut$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "auto_start": "autoStart",
    "job_type": "jobType",
    "created_at": "createdAt",
    "modified_at": "modifiedAt",
    "training_files": "trainingFiles",
    "validation_files": "validationFiles",
    "fine_tuned_model": "fineTunedModel",
    "trained_tokens": "trainedTokens",
  });
});

/** @internal */
export type DetailedJobOut$Outbound = {
  id: string;
  auto_start: boolean;
  hyperparameters: TrainingParameters$Outbound;
  model: string;
  status: string;
  job_type: string;
  created_at: number;
  modified_at: number;
  training_files: Array<string>;
  validation_files?: Array<string> | null | undefined;
  object: "job";
  fine_tuned_model?: string | null | undefined;
  suffix?: string | null | undefined;
  integrations?: Array<WandbIntegrationOut$Outbound> | null | undefined;
  trained_tokens?: number | null | undefined;
  repositories?: Array<GithubRepositoryOut$Outbound> | undefined;
  metadata?: JobMetadataOut$Outbound | null | undefined;
  events?: Array<EventOut$Outbound> | undefined;
  checkpoints?: Array<CheckpointOut$Outbound> | undefined;
};

/** @internal */
export const DetailedJobOut$outboundSchema: z.ZodType<
  DetailedJobOut$Outbound,
  z.ZodTypeDef,
  DetailedJobOut
> = z.object({
  id: z.string(),
  autoStart: z.boolean(),
  hyperparameters: TrainingParameters$outboundSchema,
  model: z.string(),
  status: DetailedJobOutStatus$outboundSchema,
  jobType: z.string(),
  createdAt: z.number().int(),
  modifiedAt: z.number().int(),
  trainingFiles: z.array(z.string()),
  validationFiles: z.nullable(z.array(z.string())).optional(),
  object: z.literal("job").default("job"),
  fineTunedModel: z.nullable(z.string()).optional(),
  suffix: z.nullable(z.string()).optional(),
  integrations: z.nullable(z.array(WandbIntegrationOut$outboundSchema))
    .optional(),
  trainedTokens: z.nullable(z.number().int()).optional(),
  repositories: z.array(GithubRepositoryOut$outboundSchema).optional(),
  metadata: z.nullable(JobMetadataOut$outboundSchema).optional(),
  events: z.array(EventOut$outboundSchema).optional(),
  checkpoints: z.array(CheckpointOut$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    autoStart: "auto_start",
    jobType: "job_type",
    createdAt: "created_at",
    modifiedAt: "modified_at",
    trainingFiles: "training_files",
    validationFiles: "validation_files",
    fineTunedModel: "fine_tuned_model",
    trainedTokens: "trained_tokens",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DetailedJobOut$ {
  /** @deprecated use `DetailedJobOut$inboundSchema` instead. */
  export const inboundSchema = DetailedJobOut$inboundSchema;
  /** @deprecated use `DetailedJobOut$outboundSchema` instead. */
  export const outboundSchema = DetailedJobOut$outboundSchema;
  /** @deprecated use `DetailedJobOut$Outbound` instead. */
  export type Outbound = DetailedJobOut$Outbound;
}

export function detailedJobOutToJSON(detailedJobOut: DetailedJobOut): string {
  return JSON.stringify(DetailedJobOut$outboundSchema.parse(detailedJobOut));
}

export function detailedJobOutFromJSON(
  jsonString: string,
): SafeParseResult<DetailedJobOut, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DetailedJobOut$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DetailedJobOut' from JSON`,
  );
}
