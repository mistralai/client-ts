/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const WandbIntegrationType = {
  Wandb: "wandb",
} as const;
export type WandbIntegrationType = ClosedEnum<typeof WandbIntegrationType>;

export type WandbIntegration = {
  type?: WandbIntegrationType | undefined;
  /**
   * The name of the project that the new run will be created under.
   */
  project: string;
  /**
   * A display name to set for the run. If not set, will use the job ID as the name.
   */
  name?: string | null | undefined;
  /**
   * The WandB API key to use for authentication.
   */
  apiKey: string;
  runName?: string | null | undefined;
};

/** @internal */
export const WandbIntegrationType$inboundSchema: z.ZodNativeEnum<
  typeof WandbIntegrationType
> = z.nativeEnum(WandbIntegrationType);

/** @internal */
export const WandbIntegrationType$outboundSchema: z.ZodNativeEnum<
  typeof WandbIntegrationType
> = WandbIntegrationType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WandbIntegrationType$ {
  /** @deprecated use `WandbIntegrationType$inboundSchema` instead. */
  export const inboundSchema = WandbIntegrationType$inboundSchema;
  /** @deprecated use `WandbIntegrationType$outboundSchema` instead. */
  export const outboundSchema = WandbIntegrationType$outboundSchema;
}

/** @internal */
export const WandbIntegration$inboundSchema: z.ZodType<
  WandbIntegration,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: WandbIntegrationType$inboundSchema.default("wandb"),
  project: z.string(),
  name: z.nullable(z.string()).optional(),
  api_key: z.string(),
  run_name: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "api_key": "apiKey",
    "run_name": "runName",
  });
});

/** @internal */
export type WandbIntegration$Outbound = {
  type: string;
  project: string;
  name?: string | null | undefined;
  api_key: string;
  run_name?: string | null | undefined;
};

/** @internal */
export const WandbIntegration$outboundSchema: z.ZodType<
  WandbIntegration$Outbound,
  z.ZodTypeDef,
  WandbIntegration
> = z.object({
  type: WandbIntegrationType$outboundSchema.default("wandb"),
  project: z.string(),
  name: z.nullable(z.string()).optional(),
  apiKey: z.string(),
  runName: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    apiKey: "api_key",
    runName: "run_name",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WandbIntegration$ {
  /** @deprecated use `WandbIntegration$inboundSchema` instead. */
  export const inboundSchema = WandbIntegration$inboundSchema;
  /** @deprecated use `WandbIntegration$outboundSchema` instead. */
  export const outboundSchema = WandbIntegration$outboundSchema;
  /** @deprecated use `WandbIntegration$Outbound` instead. */
  export type Outbound = WandbIntegration$Outbound;
}

export function wandbIntegrationToJSON(
  wandbIntegration: WandbIntegration,
): string {
  return JSON.stringify(
    WandbIntegration$outboundSchema.parse(wandbIntegration),
  );
}

export function wandbIntegrationFromJSON(
  jsonString: string,
): SafeParseResult<WandbIntegration, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => WandbIntegration$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'WandbIntegration' from JSON`,
  );
}
