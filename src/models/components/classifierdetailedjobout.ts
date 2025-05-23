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
  ClassifierTargetOut,
  ClassifierTargetOut$inboundSchema,
  ClassifierTargetOut$Outbound,
  ClassifierTargetOut$outboundSchema,
} from "./classifiertargetout.js";
import {
  ClassifierTrainingParameters,
  ClassifierTrainingParameters$inboundSchema,
  ClassifierTrainingParameters$Outbound,
  ClassifierTrainingParameters$outboundSchema,
} from "./classifiertrainingparameters.js";
import {
  EventOut,
  EventOut$inboundSchema,
  EventOut$Outbound,
  EventOut$outboundSchema,
} from "./eventout.js";
import {
  JobMetadataOut,
  JobMetadataOut$inboundSchema,
  JobMetadataOut$Outbound,
  JobMetadataOut$outboundSchema,
} from "./jobmetadataout.js";
import {
  WandbIntegrationOut,
  WandbIntegrationOut$inboundSchema,
  WandbIntegrationOut$Outbound,
  WandbIntegrationOut$outboundSchema,
} from "./wandbintegrationout.js";

export const ClassifierDetailedJobOutStatus = {
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
export type ClassifierDetailedJobOutStatus = ClosedEnum<
  typeof ClassifierDetailedJobOutStatus
>;

export const ClassifierDetailedJobOutObject = {
  Job: "job",
} as const;
export type ClassifierDetailedJobOutObject = ClosedEnum<
  typeof ClassifierDetailedJobOutObject
>;

export type ClassifierDetailedJobOutIntegrations = WandbIntegrationOut;

export const ClassifierDetailedJobOutJobType = {
  Classifier: "classifier",
} as const;
export type ClassifierDetailedJobOutJobType = ClosedEnum<
  typeof ClassifierDetailedJobOutJobType
>;

export type ClassifierDetailedJobOut = {
  id: string;
  autoStart: boolean;
  /**
   * The name of the model to fine-tune.
   */
  model: string;
  status: ClassifierDetailedJobOutStatus;
  createdAt: number;
  modifiedAt: number;
  trainingFiles: Array<string>;
  validationFiles?: Array<string> | null | undefined;
  object?: ClassifierDetailedJobOutObject | undefined;
  fineTunedModel?: string | null | undefined;
  suffix?: string | null | undefined;
  integrations?: Array<WandbIntegrationOut> | null | undefined;
  trainedTokens?: number | null | undefined;
  metadata?: JobMetadataOut | null | undefined;
  jobType?: ClassifierDetailedJobOutJobType | undefined;
  hyperparameters: ClassifierTrainingParameters;
  /**
   * Event items are created every time the status of a fine-tuning job changes. The timestamped list of all events is accessible here.
   */
  events?: Array<EventOut> | undefined;
  checkpoints?: Array<CheckpointOut> | undefined;
  classifierTargets: Array<ClassifierTargetOut>;
};

/** @internal */
export const ClassifierDetailedJobOutStatus$inboundSchema: z.ZodNativeEnum<
  typeof ClassifierDetailedJobOutStatus
> = z.nativeEnum(ClassifierDetailedJobOutStatus);

/** @internal */
export const ClassifierDetailedJobOutStatus$outboundSchema: z.ZodNativeEnum<
  typeof ClassifierDetailedJobOutStatus
> = ClassifierDetailedJobOutStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ClassifierDetailedJobOutStatus$ {
  /** @deprecated use `ClassifierDetailedJobOutStatus$inboundSchema` instead. */
  export const inboundSchema = ClassifierDetailedJobOutStatus$inboundSchema;
  /** @deprecated use `ClassifierDetailedJobOutStatus$outboundSchema` instead. */
  export const outboundSchema = ClassifierDetailedJobOutStatus$outboundSchema;
}

/** @internal */
export const ClassifierDetailedJobOutObject$inboundSchema: z.ZodNativeEnum<
  typeof ClassifierDetailedJobOutObject
> = z.nativeEnum(ClassifierDetailedJobOutObject);

/** @internal */
export const ClassifierDetailedJobOutObject$outboundSchema: z.ZodNativeEnum<
  typeof ClassifierDetailedJobOutObject
> = ClassifierDetailedJobOutObject$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ClassifierDetailedJobOutObject$ {
  /** @deprecated use `ClassifierDetailedJobOutObject$inboundSchema` instead. */
  export const inboundSchema = ClassifierDetailedJobOutObject$inboundSchema;
  /** @deprecated use `ClassifierDetailedJobOutObject$outboundSchema` instead. */
  export const outboundSchema = ClassifierDetailedJobOutObject$outboundSchema;
}

/** @internal */
export const ClassifierDetailedJobOutIntegrations$inboundSchema: z.ZodType<
  ClassifierDetailedJobOutIntegrations,
  z.ZodTypeDef,
  unknown
> = WandbIntegrationOut$inboundSchema;

/** @internal */
export type ClassifierDetailedJobOutIntegrations$Outbound =
  WandbIntegrationOut$Outbound;

/** @internal */
export const ClassifierDetailedJobOutIntegrations$outboundSchema: z.ZodType<
  ClassifierDetailedJobOutIntegrations$Outbound,
  z.ZodTypeDef,
  ClassifierDetailedJobOutIntegrations
> = WandbIntegrationOut$outboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ClassifierDetailedJobOutIntegrations$ {
  /** @deprecated use `ClassifierDetailedJobOutIntegrations$inboundSchema` instead. */
  export const inboundSchema =
    ClassifierDetailedJobOutIntegrations$inboundSchema;
  /** @deprecated use `ClassifierDetailedJobOutIntegrations$outboundSchema` instead. */
  export const outboundSchema =
    ClassifierDetailedJobOutIntegrations$outboundSchema;
  /** @deprecated use `ClassifierDetailedJobOutIntegrations$Outbound` instead. */
  export type Outbound = ClassifierDetailedJobOutIntegrations$Outbound;
}

export function classifierDetailedJobOutIntegrationsToJSON(
  classifierDetailedJobOutIntegrations: ClassifierDetailedJobOutIntegrations,
): string {
  return JSON.stringify(
    ClassifierDetailedJobOutIntegrations$outboundSchema.parse(
      classifierDetailedJobOutIntegrations,
    ),
  );
}

export function classifierDetailedJobOutIntegrationsFromJSON(
  jsonString: string,
): SafeParseResult<ClassifierDetailedJobOutIntegrations, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      ClassifierDetailedJobOutIntegrations$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ClassifierDetailedJobOutIntegrations' from JSON`,
  );
}

/** @internal */
export const ClassifierDetailedJobOutJobType$inboundSchema: z.ZodNativeEnum<
  typeof ClassifierDetailedJobOutJobType
> = z.nativeEnum(ClassifierDetailedJobOutJobType);

/** @internal */
export const ClassifierDetailedJobOutJobType$outboundSchema: z.ZodNativeEnum<
  typeof ClassifierDetailedJobOutJobType
> = ClassifierDetailedJobOutJobType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ClassifierDetailedJobOutJobType$ {
  /** @deprecated use `ClassifierDetailedJobOutJobType$inboundSchema` instead. */
  export const inboundSchema = ClassifierDetailedJobOutJobType$inboundSchema;
  /** @deprecated use `ClassifierDetailedJobOutJobType$outboundSchema` instead. */
  export const outboundSchema = ClassifierDetailedJobOutJobType$outboundSchema;
}

/** @internal */
export const ClassifierDetailedJobOut$inboundSchema: z.ZodType<
  ClassifierDetailedJobOut,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  auto_start: z.boolean(),
  model: z.string(),
  status: ClassifierDetailedJobOutStatus$inboundSchema,
  created_at: z.number().int(),
  modified_at: z.number().int(),
  training_files: z.array(z.string()),
  validation_files: z.nullable(z.array(z.string())).optional(),
  object: ClassifierDetailedJobOutObject$inboundSchema.default("job"),
  fine_tuned_model: z.nullable(z.string()).optional(),
  suffix: z.nullable(z.string()).optional(),
  integrations: z.nullable(z.array(WandbIntegrationOut$inboundSchema))
    .optional(),
  trained_tokens: z.nullable(z.number().int()).optional(),
  metadata: z.nullable(JobMetadataOut$inboundSchema).optional(),
  job_type: ClassifierDetailedJobOutJobType$inboundSchema.default("classifier"),
  hyperparameters: ClassifierTrainingParameters$inboundSchema,
  events: z.array(EventOut$inboundSchema).optional(),
  checkpoints: z.array(CheckpointOut$inboundSchema).optional(),
  classifier_targets: z.array(ClassifierTargetOut$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "auto_start": "autoStart",
    "created_at": "createdAt",
    "modified_at": "modifiedAt",
    "training_files": "trainingFiles",
    "validation_files": "validationFiles",
    "fine_tuned_model": "fineTunedModel",
    "trained_tokens": "trainedTokens",
    "job_type": "jobType",
    "classifier_targets": "classifierTargets",
  });
});

/** @internal */
export type ClassifierDetailedJobOut$Outbound = {
  id: string;
  auto_start: boolean;
  model: string;
  status: string;
  created_at: number;
  modified_at: number;
  training_files: Array<string>;
  validation_files?: Array<string> | null | undefined;
  object: string;
  fine_tuned_model?: string | null | undefined;
  suffix?: string | null | undefined;
  integrations?: Array<WandbIntegrationOut$Outbound> | null | undefined;
  trained_tokens?: number | null | undefined;
  metadata?: JobMetadataOut$Outbound | null | undefined;
  job_type: string;
  hyperparameters: ClassifierTrainingParameters$Outbound;
  events?: Array<EventOut$Outbound> | undefined;
  checkpoints?: Array<CheckpointOut$Outbound> | undefined;
  classifier_targets: Array<ClassifierTargetOut$Outbound>;
};

/** @internal */
export const ClassifierDetailedJobOut$outboundSchema: z.ZodType<
  ClassifierDetailedJobOut$Outbound,
  z.ZodTypeDef,
  ClassifierDetailedJobOut
> = z.object({
  id: z.string(),
  autoStart: z.boolean(),
  model: z.string(),
  status: ClassifierDetailedJobOutStatus$outboundSchema,
  createdAt: z.number().int(),
  modifiedAt: z.number().int(),
  trainingFiles: z.array(z.string()),
  validationFiles: z.nullable(z.array(z.string())).optional(),
  object: ClassifierDetailedJobOutObject$outboundSchema.default("job"),
  fineTunedModel: z.nullable(z.string()).optional(),
  suffix: z.nullable(z.string()).optional(),
  integrations: z.nullable(z.array(WandbIntegrationOut$outboundSchema))
    .optional(),
  trainedTokens: z.nullable(z.number().int()).optional(),
  metadata: z.nullable(JobMetadataOut$outboundSchema).optional(),
  jobType: ClassifierDetailedJobOutJobType$outboundSchema.default("classifier"),
  hyperparameters: ClassifierTrainingParameters$outboundSchema,
  events: z.array(EventOut$outboundSchema).optional(),
  checkpoints: z.array(CheckpointOut$outboundSchema).optional(),
  classifierTargets: z.array(ClassifierTargetOut$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    autoStart: "auto_start",
    createdAt: "created_at",
    modifiedAt: "modified_at",
    trainingFiles: "training_files",
    validationFiles: "validation_files",
    fineTunedModel: "fine_tuned_model",
    trainedTokens: "trained_tokens",
    jobType: "job_type",
    classifierTargets: "classifier_targets",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ClassifierDetailedJobOut$ {
  /** @deprecated use `ClassifierDetailedJobOut$inboundSchema` instead. */
  export const inboundSchema = ClassifierDetailedJobOut$inboundSchema;
  /** @deprecated use `ClassifierDetailedJobOut$outboundSchema` instead. */
  export const outboundSchema = ClassifierDetailedJobOut$outboundSchema;
  /** @deprecated use `ClassifierDetailedJobOut$Outbound` instead. */
  export type Outbound = ClassifierDetailedJobOut$Outbound;
}

export function classifierDetailedJobOutToJSON(
  classifierDetailedJobOut: ClassifierDetailedJobOut,
): string {
  return JSON.stringify(
    ClassifierDetailedJobOut$outboundSchema.parse(classifierDetailedJobOut),
  );
}

export function classifierDetailedJobOutFromJSON(
  jsonString: string,
): SafeParseResult<ClassifierDetailedJobOut, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ClassifierDetailedJobOut$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ClassifierDetailedJobOut' from JSON`,
  );
}
