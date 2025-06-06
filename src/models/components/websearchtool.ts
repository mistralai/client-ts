/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const WebSearchToolType = {
  WebSearch: "web_search",
} as const;
export type WebSearchToolType = ClosedEnum<typeof WebSearchToolType>;

export type WebSearchTool = {
  type?: WebSearchToolType | undefined;
};

/** @internal */
export const WebSearchToolType$inboundSchema: z.ZodNativeEnum<
  typeof WebSearchToolType
> = z.nativeEnum(WebSearchToolType);

/** @internal */
export const WebSearchToolType$outboundSchema: z.ZodNativeEnum<
  typeof WebSearchToolType
> = WebSearchToolType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WebSearchToolType$ {
  /** @deprecated use `WebSearchToolType$inboundSchema` instead. */
  export const inboundSchema = WebSearchToolType$inboundSchema;
  /** @deprecated use `WebSearchToolType$outboundSchema` instead. */
  export const outboundSchema = WebSearchToolType$outboundSchema;
}

/** @internal */
export const WebSearchTool$inboundSchema: z.ZodType<
  WebSearchTool,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: WebSearchToolType$inboundSchema.default("web_search"),
});

/** @internal */
export type WebSearchTool$Outbound = {
  type: string;
};

/** @internal */
export const WebSearchTool$outboundSchema: z.ZodType<
  WebSearchTool$Outbound,
  z.ZodTypeDef,
  WebSearchTool
> = z.object({
  type: WebSearchToolType$outboundSchema.default("web_search"),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WebSearchTool$ {
  /** @deprecated use `WebSearchTool$inboundSchema` instead. */
  export const inboundSchema = WebSearchTool$inboundSchema;
  /** @deprecated use `WebSearchTool$outboundSchema` instead. */
  export const outboundSchema = WebSearchTool$outboundSchema;
  /** @deprecated use `WebSearchTool$Outbound` instead. */
  export type Outbound = WebSearchTool$Outbound;
}

export function webSearchToolToJSON(webSearchTool: WebSearchTool): string {
  return JSON.stringify(WebSearchTool$outboundSchema.parse(webSearchTool));
}

export function webSearchToolFromJSON(
  jsonString: string,
): SafeParseResult<WebSearchTool, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => WebSearchTool$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'WebSearchTool' from JSON`,
  );
}
