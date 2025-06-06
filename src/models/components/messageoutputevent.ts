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
  OutputContentChunks,
  OutputContentChunks$inboundSchema,
  OutputContentChunks$Outbound,
  OutputContentChunks$outboundSchema,
} from "./outputcontentchunks.js";

export const MessageOutputEventType = {
  MessageOutputDelta: "message.output.delta",
} as const;
export type MessageOutputEventType = ClosedEnum<typeof MessageOutputEventType>;

export const MessageOutputEventRole = {
  Assistant: "assistant",
} as const;
export type MessageOutputEventRole = ClosedEnum<typeof MessageOutputEventRole>;

export type MessageOutputEventContent = string | OutputContentChunks;

export type MessageOutputEvent = {
  type?: MessageOutputEventType | undefined;
  createdAt?: Date | undefined;
  outputIndex?: number | undefined;
  id: string;
  contentIndex?: number | undefined;
  model?: string | null | undefined;
  agentId?: string | null | undefined;
  role?: MessageOutputEventRole | undefined;
  content: string | OutputContentChunks;
};

/** @internal */
export const MessageOutputEventType$inboundSchema: z.ZodNativeEnum<
  typeof MessageOutputEventType
> = z.nativeEnum(MessageOutputEventType);

/** @internal */
export const MessageOutputEventType$outboundSchema: z.ZodNativeEnum<
  typeof MessageOutputEventType
> = MessageOutputEventType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MessageOutputEventType$ {
  /** @deprecated use `MessageOutputEventType$inboundSchema` instead. */
  export const inboundSchema = MessageOutputEventType$inboundSchema;
  /** @deprecated use `MessageOutputEventType$outboundSchema` instead. */
  export const outboundSchema = MessageOutputEventType$outboundSchema;
}

/** @internal */
export const MessageOutputEventRole$inboundSchema: z.ZodNativeEnum<
  typeof MessageOutputEventRole
> = z.nativeEnum(MessageOutputEventRole);

/** @internal */
export const MessageOutputEventRole$outboundSchema: z.ZodNativeEnum<
  typeof MessageOutputEventRole
> = MessageOutputEventRole$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MessageOutputEventRole$ {
  /** @deprecated use `MessageOutputEventRole$inboundSchema` instead. */
  export const inboundSchema = MessageOutputEventRole$inboundSchema;
  /** @deprecated use `MessageOutputEventRole$outboundSchema` instead. */
  export const outboundSchema = MessageOutputEventRole$outboundSchema;
}

/** @internal */
export const MessageOutputEventContent$inboundSchema: z.ZodType<
  MessageOutputEventContent,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), OutputContentChunks$inboundSchema]);

/** @internal */
export type MessageOutputEventContent$Outbound =
  | string
  | OutputContentChunks$Outbound;

/** @internal */
export const MessageOutputEventContent$outboundSchema: z.ZodType<
  MessageOutputEventContent$Outbound,
  z.ZodTypeDef,
  MessageOutputEventContent
> = z.union([z.string(), OutputContentChunks$outboundSchema]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MessageOutputEventContent$ {
  /** @deprecated use `MessageOutputEventContent$inboundSchema` instead. */
  export const inboundSchema = MessageOutputEventContent$inboundSchema;
  /** @deprecated use `MessageOutputEventContent$outboundSchema` instead. */
  export const outboundSchema = MessageOutputEventContent$outboundSchema;
  /** @deprecated use `MessageOutputEventContent$Outbound` instead. */
  export type Outbound = MessageOutputEventContent$Outbound;
}

export function messageOutputEventContentToJSON(
  messageOutputEventContent: MessageOutputEventContent,
): string {
  return JSON.stringify(
    MessageOutputEventContent$outboundSchema.parse(messageOutputEventContent),
  );
}

export function messageOutputEventContentFromJSON(
  jsonString: string,
): SafeParseResult<MessageOutputEventContent, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => MessageOutputEventContent$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MessageOutputEventContent' from JSON`,
  );
}

/** @internal */
export const MessageOutputEvent$inboundSchema: z.ZodType<
  MessageOutputEvent,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: MessageOutputEventType$inboundSchema.default("message.output.delta"),
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  output_index: z.number().int().default(0),
  id: z.string(),
  content_index: z.number().int().default(0),
  model: z.nullable(z.string()).optional(),
  agent_id: z.nullable(z.string()).optional(),
  role: MessageOutputEventRole$inboundSchema.default("assistant"),
  content: z.union([z.string(), OutputContentChunks$inboundSchema]),
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
    "output_index": "outputIndex",
    "content_index": "contentIndex",
    "agent_id": "agentId",
  });
});

/** @internal */
export type MessageOutputEvent$Outbound = {
  type: string;
  created_at?: string | undefined;
  output_index: number;
  id: string;
  content_index: number;
  model?: string | null | undefined;
  agent_id?: string | null | undefined;
  role: string;
  content: string | OutputContentChunks$Outbound;
};

/** @internal */
export const MessageOutputEvent$outboundSchema: z.ZodType<
  MessageOutputEvent$Outbound,
  z.ZodTypeDef,
  MessageOutputEvent
> = z.object({
  type: MessageOutputEventType$outboundSchema.default("message.output.delta"),
  createdAt: z.date().transform(v => v.toISOString()).optional(),
  outputIndex: z.number().int().default(0),
  id: z.string(),
  contentIndex: z.number().int().default(0),
  model: z.nullable(z.string()).optional(),
  agentId: z.nullable(z.string()).optional(),
  role: MessageOutputEventRole$outboundSchema.default("assistant"),
  content: z.union([z.string(), OutputContentChunks$outboundSchema]),
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
    outputIndex: "output_index",
    contentIndex: "content_index",
    agentId: "agent_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MessageOutputEvent$ {
  /** @deprecated use `MessageOutputEvent$inboundSchema` instead. */
  export const inboundSchema = MessageOutputEvent$inboundSchema;
  /** @deprecated use `MessageOutputEvent$outboundSchema` instead. */
  export const outboundSchema = MessageOutputEvent$outboundSchema;
  /** @deprecated use `MessageOutputEvent$Outbound` instead. */
  export type Outbound = MessageOutputEvent$Outbound;
}

export function messageOutputEventToJSON(
  messageOutputEvent: MessageOutputEvent,
): string {
  return JSON.stringify(
    MessageOutputEvent$outboundSchema.parse(messageOutputEvent),
  );
}

export function messageOutputEventFromJSON(
  jsonString: string,
): SafeParseResult<MessageOutputEvent, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => MessageOutputEvent$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MessageOutputEvent' from JSON`,
  );
}
