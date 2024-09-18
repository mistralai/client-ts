/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  ModelCapabilities,
  ModelCapabilities$inboundSchema,
  ModelCapabilities$Outbound,
  ModelCapabilities$outboundSchema,
} from "./modelcapabilities.js";

/**
 * Extra fields for fine-tuned models.
 */
export type FTModelCard = {
  id: string;
  object?: string | undefined;
  created?: number | undefined;
  ownedBy?: string | undefined;
  name?: string | null | undefined;
  description?: string | null | undefined;
  maxContextLength?: number | undefined;
  aliases?: Array<string> | undefined;
  deprecation?: Date | null | undefined;
  capabilities: ModelCapabilities;
  type?: "fine-tuned" | undefined;
  job: string;
  root: string;
  archived?: boolean | undefined;
};

/** @internal */
export const FTModelCard$inboundSchema: z.ZodType<
  FTModelCard,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  object: z.string().default("model"),
  created: z.number().int().optional(),
  owned_by: z.string().default("mistralai"),
  name: z.nullable(z.string()).optional(),
  description: z.nullable(z.string()).optional(),
  max_context_length: z.number().int().default(32768),
  aliases: z.array(z.string()).optional(),
  deprecation: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  capabilities: ModelCapabilities$inboundSchema,
  type: z.literal("fine-tuned").default("fine-tuned"),
  job: z.string(),
  root: z.string(),
  archived: z.boolean().default(false),
}).transform((v) => {
  return remap$(v, {
    "owned_by": "ownedBy",
    "max_context_length": "maxContextLength",
  });
});

/** @internal */
export type FTModelCard$Outbound = {
  id: string;
  object: string;
  created?: number | undefined;
  owned_by: string;
  name?: string | null | undefined;
  description?: string | null | undefined;
  max_context_length: number;
  aliases?: Array<string> | undefined;
  deprecation?: string | null | undefined;
  capabilities: ModelCapabilities$Outbound;
  type: "fine-tuned";
  job: string;
  root: string;
  archived: boolean;
};

/** @internal */
export const FTModelCard$outboundSchema: z.ZodType<
  FTModelCard$Outbound,
  z.ZodTypeDef,
  FTModelCard
> = z.object({
  id: z.string(),
  object: z.string().default("model"),
  created: z.number().int().optional(),
  ownedBy: z.string().default("mistralai"),
  name: z.nullable(z.string()).optional(),
  description: z.nullable(z.string()).optional(),
  maxContextLength: z.number().int().default(32768),
  aliases: z.array(z.string()).optional(),
  deprecation: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  capabilities: ModelCapabilities$outboundSchema,
  type: z.literal("fine-tuned").default("fine-tuned" as const),
  job: z.string(),
  root: z.string(),
  archived: z.boolean().default(false),
}).transform((v) => {
  return remap$(v, {
    ownedBy: "owned_by",
    maxContextLength: "max_context_length",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FTModelCard$ {
  /** @deprecated use `FTModelCard$inboundSchema` instead. */
  export const inboundSchema = FTModelCard$inboundSchema;
  /** @deprecated use `FTModelCard$outboundSchema` instead. */
  export const outboundSchema = FTModelCard$outboundSchema;
  /** @deprecated use `FTModelCard$Outbound` instead. */
  export type Outbound = FTModelCard$Outbound;
}