/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const CodeInterpreterToolType = {
  CodeInterpreter: "code_interpreter",
} as const;
export type CodeInterpreterToolType = ClosedEnum<
  typeof CodeInterpreterToolType
>;

export type CodeInterpreterTool = {
  type?: CodeInterpreterToolType | undefined;
};

/** @internal */
export const CodeInterpreterToolType$inboundSchema: z.ZodNativeEnum<
  typeof CodeInterpreterToolType
> = z.nativeEnum(CodeInterpreterToolType);

/** @internal */
export const CodeInterpreterToolType$outboundSchema: z.ZodNativeEnum<
  typeof CodeInterpreterToolType
> = CodeInterpreterToolType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CodeInterpreterToolType$ {
  /** @deprecated use `CodeInterpreterToolType$inboundSchema` instead. */
  export const inboundSchema = CodeInterpreterToolType$inboundSchema;
  /** @deprecated use `CodeInterpreterToolType$outboundSchema` instead. */
  export const outboundSchema = CodeInterpreterToolType$outboundSchema;
}

/** @internal */
export const CodeInterpreterTool$inboundSchema: z.ZodType<
  CodeInterpreterTool,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: CodeInterpreterToolType$inboundSchema.default("code_interpreter"),
});

/** @internal */
export type CodeInterpreterTool$Outbound = {
  type: string;
};

/** @internal */
export const CodeInterpreterTool$outboundSchema: z.ZodType<
  CodeInterpreterTool$Outbound,
  z.ZodTypeDef,
  CodeInterpreterTool
> = z.object({
  type: CodeInterpreterToolType$outboundSchema.default("code_interpreter"),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CodeInterpreterTool$ {
  /** @deprecated use `CodeInterpreterTool$inboundSchema` instead. */
  export const inboundSchema = CodeInterpreterTool$inboundSchema;
  /** @deprecated use `CodeInterpreterTool$outboundSchema` instead. */
  export const outboundSchema = CodeInterpreterTool$outboundSchema;
  /** @deprecated use `CodeInterpreterTool$Outbound` instead. */
  export type Outbound = CodeInterpreterTool$Outbound;
}

export function codeInterpreterToolToJSON(
  codeInterpreterTool: CodeInterpreterTool,
): string {
  return JSON.stringify(
    CodeInterpreterTool$outboundSchema.parse(codeInterpreterTool),
  );
}

export function codeInterpreterToolFromJSON(
  jsonString: string,
): SafeParseResult<CodeInterpreterTool, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CodeInterpreterTool$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CodeInterpreterTool' from JSON`,
  );
}
