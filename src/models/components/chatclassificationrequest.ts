/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  AssistantMessage,
  AssistantMessage$inboundSchema,
  AssistantMessage$Outbound,
  AssistantMessage$outboundSchema,
} from "./assistantmessage.js";
import {
  SystemMessage,
  SystemMessage$inboundSchema,
  SystemMessage$Outbound,
  SystemMessage$outboundSchema,
} from "./systemmessage.js";
import {
  ToolMessage,
  ToolMessage$inboundSchema,
  ToolMessage$Outbound,
  ToolMessage$outboundSchema,
} from "./toolmessage.js";
import {
  UserMessage,
  UserMessage$inboundSchema,
  UserMessage$Outbound,
  UserMessage$outboundSchema,
} from "./usermessage.js";

export type Two =
  | (SystemMessage & { role: "system" })
  | (UserMessage & { role: "user" })
  | (AssistantMessage & { role: "assistant" })
  | (ToolMessage & { role: "tool" });

export type One =
  | (SystemMessage & { role: "system" })
  | (UserMessage & { role: "user" })
  | (AssistantMessage & { role: "assistant" })
  | (ToolMessage & { role: "tool" });

/**
 * Chat to classify
 */
export type ChatClassificationRequestInputs =
  | Array<
    | (SystemMessage & { role: "system" })
    | (UserMessage & { role: "user" })
    | (AssistantMessage & { role: "assistant" })
    | (ToolMessage & { role: "tool" })
  >
  | Array<
    Array<
      | (SystemMessage & { role: "system" })
      | (UserMessage & { role: "user" })
      | (AssistantMessage & { role: "assistant" })
      | (ToolMessage & { role: "tool" })
    >
  >;

export type ChatClassificationRequest = {
  /**
   * Chat to classify
   */
  inputs:
    | Array<
      | (SystemMessage & { role: "system" })
      | (UserMessage & { role: "user" })
      | (AssistantMessage & { role: "assistant" })
      | (ToolMessage & { role: "tool" })
    >
    | Array<
      Array<
        | (SystemMessage & { role: "system" })
        | (UserMessage & { role: "user" })
        | (AssistantMessage & { role: "assistant" })
        | (ToolMessage & { role: "tool" })
      >
    >;
  model: string | null;
};

/** @internal */
export const Two$inboundSchema: z.ZodType<Two, z.ZodTypeDef, unknown> = z.union(
  [
    SystemMessage$inboundSchema.and(
      z.object({ role: z.literal("system") }).transform((v) => ({
        role: v.role,
      })),
    ),
    UserMessage$inboundSchema.and(
      z.object({ role: z.literal("user") }).transform((v) => ({
        role: v.role,
      })),
    ),
    AssistantMessage$inboundSchema.and(
      z.object({ role: z.literal("assistant") }).transform((v) => ({
        role: v.role,
      })),
    ),
    ToolMessage$inboundSchema.and(
      z.object({ role: z.literal("tool") }).transform((v) => ({
        role: v.role,
      })),
    ),
  ],
);

/** @internal */
export type Two$Outbound =
  | (SystemMessage$Outbound & { role: "system" })
  | (UserMessage$Outbound & { role: "user" })
  | (AssistantMessage$Outbound & { role: "assistant" })
  | (ToolMessage$Outbound & { role: "tool" });

/** @internal */
export const Two$outboundSchema: z.ZodType<Two$Outbound, z.ZodTypeDef, Two> = z
  .union([
    SystemMessage$outboundSchema.and(
      z.object({ role: z.literal("system") }).transform((v) => ({
        role: v.role,
      })),
    ),
    UserMessage$outboundSchema.and(
      z.object({ role: z.literal("user") }).transform((v) => ({
        role: v.role,
      })),
    ),
    AssistantMessage$outboundSchema.and(
      z.object({ role: z.literal("assistant") }).transform((v) => ({
        role: v.role,
      })),
    ),
    ToolMessage$outboundSchema.and(
      z.object({ role: z.literal("tool") }).transform((v) => ({
        role: v.role,
      })),
    ),
  ]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Two$ {
  /** @deprecated use `Two$inboundSchema` instead. */
  export const inboundSchema = Two$inboundSchema;
  /** @deprecated use `Two$outboundSchema` instead. */
  export const outboundSchema = Two$outboundSchema;
  /** @deprecated use `Two$Outbound` instead. */
  export type Outbound = Two$Outbound;
}

/** @internal */
export const One$inboundSchema: z.ZodType<One, z.ZodTypeDef, unknown> = z.union(
  [
    SystemMessage$inboundSchema.and(
      z.object({ role: z.literal("system") }).transform((v) => ({
        role: v.role,
      })),
    ),
    UserMessage$inboundSchema.and(
      z.object({ role: z.literal("user") }).transform((v) => ({
        role: v.role,
      })),
    ),
    AssistantMessage$inboundSchema.and(
      z.object({ role: z.literal("assistant") }).transform((v) => ({
        role: v.role,
      })),
    ),
    ToolMessage$inboundSchema.and(
      z.object({ role: z.literal("tool") }).transform((v) => ({
        role: v.role,
      })),
    ),
  ],
);

/** @internal */
export type One$Outbound =
  | (SystemMessage$Outbound & { role: "system" })
  | (UserMessage$Outbound & { role: "user" })
  | (AssistantMessage$Outbound & { role: "assistant" })
  | (ToolMessage$Outbound & { role: "tool" });

/** @internal */
export const One$outboundSchema: z.ZodType<One$Outbound, z.ZodTypeDef, One> = z
  .union([
    SystemMessage$outboundSchema.and(
      z.object({ role: z.literal("system") }).transform((v) => ({
        role: v.role,
      })),
    ),
    UserMessage$outboundSchema.and(
      z.object({ role: z.literal("user") }).transform((v) => ({
        role: v.role,
      })),
    ),
    AssistantMessage$outboundSchema.and(
      z.object({ role: z.literal("assistant") }).transform((v) => ({
        role: v.role,
      })),
    ),
    ToolMessage$outboundSchema.and(
      z.object({ role: z.literal("tool") }).transform((v) => ({
        role: v.role,
      })),
    ),
  ]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace One$ {
  /** @deprecated use `One$inboundSchema` instead. */
  export const inboundSchema = One$inboundSchema;
  /** @deprecated use `One$outboundSchema` instead. */
  export const outboundSchema = One$outboundSchema;
  /** @deprecated use `One$Outbound` instead. */
  export type Outbound = One$Outbound;
}

/** @internal */
export const ChatClassificationRequestInputs$inboundSchema: z.ZodType<
  ChatClassificationRequestInputs,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.array(
    z.union([
      SystemMessage$inboundSchema.and(
        z.object({ role: z.literal("system") }).transform((v) => ({
          role: v.role,
        })),
      ),
      UserMessage$inboundSchema.and(
        z.object({ role: z.literal("user") }).transform((v) => ({
          role: v.role,
        })),
      ),
      AssistantMessage$inboundSchema.and(
        z.object({ role: z.literal("assistant") }).transform((v) => ({
          role: v.role,
        })),
      ),
      ToolMessage$inboundSchema.and(
        z.object({ role: z.literal("tool") }).transform((v) => ({
          role: v.role,
        })),
      ),
    ]),
  ),
  z.array(
    z.array(
      z.union([
        SystemMessage$inboundSchema.and(
          z.object({ role: z.literal("system") }).transform((v) => ({
            role: v.role,
          })),
        ),
        UserMessage$inboundSchema.and(
          z.object({ role: z.literal("user") }).transform((v) => ({
            role: v.role,
          })),
        ),
        AssistantMessage$inboundSchema.and(
          z.object({ role: z.literal("assistant") }).transform((v) => ({
            role: v.role,
          })),
        ),
        ToolMessage$inboundSchema.and(
          z.object({ role: z.literal("tool") }).transform((v) => ({
            role: v.role,
          })),
        ),
      ]),
    ),
  ),
]);

/** @internal */
export type ChatClassificationRequestInputs$Outbound =
  | Array<
    | (SystemMessage$Outbound & { role: "system" })
    | (UserMessage$Outbound & { role: "user" })
    | (AssistantMessage$Outbound & { role: "assistant" })
    | (ToolMessage$Outbound & { role: "tool" })
  >
  | Array<
    Array<
      | (SystemMessage$Outbound & { role: "system" })
      | (UserMessage$Outbound & { role: "user" })
      | (AssistantMessage$Outbound & { role: "assistant" })
      | (ToolMessage$Outbound & { role: "tool" })
    >
  >;

/** @internal */
export const ChatClassificationRequestInputs$outboundSchema: z.ZodType<
  ChatClassificationRequestInputs$Outbound,
  z.ZodTypeDef,
  ChatClassificationRequestInputs
> = z.union([
  z.array(
    z.union([
      SystemMessage$outboundSchema.and(
        z.object({ role: z.literal("system") }).transform((v) => ({
          role: v.role,
        })),
      ),
      UserMessage$outboundSchema.and(
        z.object({ role: z.literal("user") }).transform((v) => ({
          role: v.role,
        })),
      ),
      AssistantMessage$outboundSchema.and(
        z.object({ role: z.literal("assistant") }).transform((v) => ({
          role: v.role,
        })),
      ),
      ToolMessage$outboundSchema.and(
        z.object({ role: z.literal("tool") }).transform((v) => ({
          role: v.role,
        })),
      ),
    ]),
  ),
  z.array(
    z.array(
      z.union([
        SystemMessage$outboundSchema.and(
          z.object({ role: z.literal("system") }).transform((v) => ({
            role: v.role,
          })),
        ),
        UserMessage$outboundSchema.and(
          z.object({ role: z.literal("user") }).transform((v) => ({
            role: v.role,
          })),
        ),
        AssistantMessage$outboundSchema.and(
          z.object({ role: z.literal("assistant") }).transform((v) => ({
            role: v.role,
          })),
        ),
        ToolMessage$outboundSchema.and(
          z.object({ role: z.literal("tool") }).transform((v) => ({
            role: v.role,
          })),
        ),
      ]),
    ),
  ),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatClassificationRequestInputs$ {
  /** @deprecated use `ChatClassificationRequestInputs$inboundSchema` instead. */
  export const inboundSchema = ChatClassificationRequestInputs$inboundSchema;
  /** @deprecated use `ChatClassificationRequestInputs$outboundSchema` instead. */
  export const outboundSchema = ChatClassificationRequestInputs$outboundSchema;
  /** @deprecated use `ChatClassificationRequestInputs$Outbound` instead. */
  export type Outbound = ChatClassificationRequestInputs$Outbound;
}

/** @internal */
export const ChatClassificationRequest$inboundSchema: z.ZodType<
  ChatClassificationRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  input: z.union([
    z.array(
      z.union([
        SystemMessage$inboundSchema.and(
          z.object({ role: z.literal("system") }).transform((v) => ({
            role: v.role,
          })),
        ),
        UserMessage$inboundSchema.and(
          z.object({ role: z.literal("user") }).transform((v) => ({
            role: v.role,
          })),
        ),
        AssistantMessage$inboundSchema.and(
          z.object({ role: z.literal("assistant") }).transform((v) => ({
            role: v.role,
          })),
        ),
        ToolMessage$inboundSchema.and(
          z.object({ role: z.literal("tool") }).transform((v) => ({
            role: v.role,
          })),
        ),
      ]),
    ),
    z.array(
      z.array(
        z.union([
          SystemMessage$inboundSchema.and(
            z.object({ role: z.literal("system") }).transform((v) => ({
              role: v.role,
            })),
          ),
          UserMessage$inboundSchema.and(
            z.object({ role: z.literal("user") }).transform((v) => ({
              role: v.role,
            })),
          ),
          AssistantMessage$inboundSchema.and(
            z.object({ role: z.literal("assistant") }).transform((v) => ({
              role: v.role,
            })),
          ),
          ToolMessage$inboundSchema.and(
            z.object({ role: z.literal("tool") }).transform((v) => ({
              role: v.role,
            })),
          ),
        ]),
      ),
    ),
  ]),
  model: z.nullable(z.string()),
}).transform((v) => {
  return remap$(v, {
    "input": "inputs",
  });
});

/** @internal */
export type ChatClassificationRequest$Outbound = {
  input:
    | Array<
      | (SystemMessage$Outbound & { role: "system" })
      | (UserMessage$Outbound & { role: "user" })
      | (AssistantMessage$Outbound & { role: "assistant" })
      | (ToolMessage$Outbound & { role: "tool" })
    >
    | Array<
      Array<
        | (SystemMessage$Outbound & { role: "system" })
        | (UserMessage$Outbound & { role: "user" })
        | (AssistantMessage$Outbound & { role: "assistant" })
        | (ToolMessage$Outbound & { role: "tool" })
      >
    >;
  model: string | null;
};

/** @internal */
export const ChatClassificationRequest$outboundSchema: z.ZodType<
  ChatClassificationRequest$Outbound,
  z.ZodTypeDef,
  ChatClassificationRequest
> = z.object({
  inputs: z.union([
    z.array(
      z.union([
        SystemMessage$outboundSchema.and(
          z.object({ role: z.literal("system") }).transform((v) => ({
            role: v.role,
          })),
        ),
        UserMessage$outboundSchema.and(
          z.object({ role: z.literal("user") }).transform((v) => ({
            role: v.role,
          })),
        ),
        AssistantMessage$outboundSchema.and(
          z.object({ role: z.literal("assistant") }).transform((v) => ({
            role: v.role,
          })),
        ),
        ToolMessage$outboundSchema.and(
          z.object({ role: z.literal("tool") }).transform((v) => ({
            role: v.role,
          })),
        ),
      ]),
    ),
    z.array(
      z.array(
        z.union([
          SystemMessage$outboundSchema.and(
            z.object({ role: z.literal("system") }).transform((v) => ({
              role: v.role,
            })),
          ),
          UserMessage$outboundSchema.and(
            z.object({ role: z.literal("user") }).transform((v) => ({
              role: v.role,
            })),
          ),
          AssistantMessage$outboundSchema.and(
            z.object({ role: z.literal("assistant") }).transform((v) => ({
              role: v.role,
            })),
          ),
          ToolMessage$outboundSchema.and(
            z.object({ role: z.literal("tool") }).transform((v) => ({
              role: v.role,
            })),
          ),
        ]),
      ),
    ),
  ]),
  model: z.nullable(z.string()),
}).transform((v) => {
  return remap$(v, {
    inputs: "input",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatClassificationRequest$ {
  /** @deprecated use `ChatClassificationRequest$inboundSchema` instead. */
  export const inboundSchema = ChatClassificationRequest$inboundSchema;
  /** @deprecated use `ChatClassificationRequest$outboundSchema` instead. */
  export const outboundSchema = ChatClassificationRequest$outboundSchema;
  /** @deprecated use `ChatClassificationRequest$Outbound` instead. */
  export type Outbound = ChatClassificationRequest$Outbound;
}