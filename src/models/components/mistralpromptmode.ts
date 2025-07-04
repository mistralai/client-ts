/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  catchUnrecognizedEnum,
  OpenEnum,
  Unrecognized,
} from "../../types/enums.js";

export const MistralPromptMode = {
  Reasoning: "reasoning",
} as const;
export type MistralPromptMode = OpenEnum<typeof MistralPromptMode>;

/** @internal */
export const MistralPromptMode$inboundSchema: z.ZodType<
  MistralPromptMode,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(MistralPromptMode),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const MistralPromptMode$outboundSchema: z.ZodType<
  MistralPromptMode,
  z.ZodTypeDef,
  MistralPromptMode
> = z.union([
  z.nativeEnum(MistralPromptMode),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MistralPromptMode$ {
  /** @deprecated use `MistralPromptMode$inboundSchema` instead. */
  export const inboundSchema = MistralPromptMode$inboundSchema;
  /** @deprecated use `MistralPromptMode$outboundSchema` instead. */
  export const outboundSchema = MistralPromptMode$outboundSchema;
}
