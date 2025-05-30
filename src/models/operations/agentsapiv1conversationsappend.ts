/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AgentsApiV1ConversationsAppendRequest = {
  /**
   * ID of the conversation to which we append entries.
   */
  conversationId: string;
  conversationAppendRequest: components.ConversationAppendRequest;
};

/** @internal */
export const AgentsApiV1ConversationsAppendRequest$inboundSchema: z.ZodType<
  AgentsApiV1ConversationsAppendRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  conversation_id: z.string(),
  ConversationAppendRequest: components.ConversationAppendRequest$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "conversation_id": "conversationId",
    "ConversationAppendRequest": "conversationAppendRequest",
  });
});

/** @internal */
export type AgentsApiV1ConversationsAppendRequest$Outbound = {
  conversation_id: string;
  ConversationAppendRequest: components.ConversationAppendRequest$Outbound;
};

/** @internal */
export const AgentsApiV1ConversationsAppendRequest$outboundSchema: z.ZodType<
  AgentsApiV1ConversationsAppendRequest$Outbound,
  z.ZodTypeDef,
  AgentsApiV1ConversationsAppendRequest
> = z.object({
  conversationId: z.string(),
  conversationAppendRequest:
    components.ConversationAppendRequest$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    conversationId: "conversation_id",
    conversationAppendRequest: "ConversationAppendRequest",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AgentsApiV1ConversationsAppendRequest$ {
  /** @deprecated use `AgentsApiV1ConversationsAppendRequest$inboundSchema` instead. */
  export const inboundSchema =
    AgentsApiV1ConversationsAppendRequest$inboundSchema;
  /** @deprecated use `AgentsApiV1ConversationsAppendRequest$outboundSchema` instead. */
  export const outboundSchema =
    AgentsApiV1ConversationsAppendRequest$outboundSchema;
  /** @deprecated use `AgentsApiV1ConversationsAppendRequest$Outbound` instead. */
  export type Outbound = AgentsApiV1ConversationsAppendRequest$Outbound;
}

export function agentsApiV1ConversationsAppendRequestToJSON(
  agentsApiV1ConversationsAppendRequest: AgentsApiV1ConversationsAppendRequest,
): string {
  return JSON.stringify(
    AgentsApiV1ConversationsAppendRequest$outboundSchema.parse(
      agentsApiV1ConversationsAppendRequest,
    ),
  );
}

export function agentsApiV1ConversationsAppendRequestFromJSON(
  jsonString: string,
): SafeParseResult<AgentsApiV1ConversationsAppendRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AgentsApiV1ConversationsAppendRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AgentsApiV1ConversationsAppendRequest' from JSON`,
  );
}
