import * as z from "zod/v4";

import {
  HangUpTool$inboundSchema,
  HangUpTool$outboundSchema,
  TransferCallTool$inboundSchema,
  TransferCallTool$outboundSchema,
  VoiceAgentCustomConnector$inboundSchema,
  VoiceAgentCustomConnector$outboundSchema,
  VoiceAgentDocumentLibraryTool$inboundSchema,
  VoiceAgentDocumentLibraryTool$outboundSchema,
  VoiceAgentFunctionTool$inboundSchema,
  VoiceAgentFunctionToolRequest$outboundSchema,
  VoiceAgentWebSearchTool$inboundSchema,
  VoiceAgentWebSearchTool$outboundSchema,
} from "../../models/components/index.js";
import type {
  AudioSessionCreateRequestTool,
  AudioSessionCreateRequestTool$Outbound,
  CustomConnector,
  DocumentLibraryTool,
  FunctionTool,
  HangUpTool,
  StaticToolFiller,
  TransferCallTool,
  WebSearchTool,
} from "../../models/components/index.js";
import { VoiceAgentConfigurationError, VoiceAgentError } from "./errors.js";

export type {
  CustomConnector,
  DocumentLibraryTool,
  FunctionTool,
  HangUpTool,
  PhoneDestination,
  SipDestination,
  StaticToolFiller,
  ToolConfiguration,
  TransferCallTool,
  TransferTarget,
  WebSearchTool,
} from "../../models/components/index.js";

export type Declaration =
  | WebSearchTool
  | DocumentLibraryTool
  | CustomConnector
  | FunctionTool
  | TransferCallTool
  | HangUpTool;
export type AudioTool = AudioSessionCreateRequestTool;
export type WireTool = AudioSessionCreateRequestTool$Outbound;
export const toolInboundSchema = {
  parse(value: unknown): AudioTool {
    if (typeof value !== "object" || value === null || !("type" in value))
      throw new VoiceAgentConfigurationError(
        "Expected a voice tool declaration",
      );
    const tool = wrapToolError(() => parseDeclaration(value));
    rejectUnknownFields(value, tool);
    return tool;
  },
};

const TIMEOUT_MS_MAX = 4294967295;

function unsupportedToolType(kind: unknown): VoiceAgentConfigurationError {
  return new VoiceAgentConfigurationError(
    `Unsupported voice tool type: ${JSON.stringify(kind) ?? String(kind)}`,
  );
}

function wrapToolError<T>(parse: () => T): T {
  try {
    return parse();
  } catch (error) {
    if (error instanceof VoiceAgentError) throw error;
    throw new VoiceAgentConfigurationError(
      `Invalid voice tool declaration: ${error instanceof Error ? error.message : String(error)}`,
      { cause: error },
    );
  }
}

function rejectUnknownFields(input: object, kept: object): void {
  const canonical = (key: string) => key.replace(/_/g, "").toLowerCase();
  const known = new Set(Object.keys(kept).map(canonical));
  const unknown = Object.keys(input)
    .filter(
      (key) =>
        (input as Record<string, unknown>)[key] !== undefined &&
        !known.has(canonical(key)),
    )
    .sort();
  if (unknown.length > 0)
    throw new VoiceAgentConfigurationError(
      `Unknown tool fields: ${unknown.join(", ")}`,
    );
}

function parseDeclaration(value: { type?: unknown }): AudioTool {
  switch (value.type) {
    case "web_search":
      return VoiceAgentWebSearchTool$inboundSchema.parse(value);
    case "document_library":
      return VoiceAgentDocumentLibraryTool$inboundSchema.parse(value);
    case "connector":
      return VoiceAgentCustomConnector$inboundSchema.parse(value);
    case "function":
      // Only the request variant is generated inbound-less, and codegen makes
      // the response variant's discriminator optional. The two function
      // payloads are structurally identical, so parse as the response variant
      // and pin the discriminator this branch has already selected.
      return {
        ...VoiceAgentFunctionTool$inboundSchema.parse(value),
        type: "function",
      };
    case "transfer_call":
      return TransferCallTool$inboundSchema.parse(value);
    case "hang_up":
      return HangUpTool$inboundSchema.parse(value);
    default:
      throw unsupportedToolType(value.type);
  }
}

export const wireToolSchema = {
  parse(value: unknown): WireTool {
    return serializeDeclaration(toolInboundSchema.parse(value));
  },
};
export const functionCallSchema = z.object({
  name: z.string(),
  arguments: z.record(z.string(), z.unknown()).optional(),
});

function serializeDeclaration(tool: Declaration | AudioTool): WireTool {
  const wire = serializeVariant(tool);
  rejectUnknownFields(tool, wire);
  return wire;
}

function serializeVariant(tool: Declaration | AudioTool): WireTool {
  return wrapToolError(() => {
    switch (tool.type) {
      case "web_search":
        return VoiceAgentWebSearchTool$outboundSchema.parse(tool);
      case "document_library":
        return VoiceAgentDocumentLibraryTool$outboundSchema.parse(tool);
      case "connector":
        return VoiceAgentCustomConnector$outboundSchema.parse(tool);
      case "function":
        return VoiceAgentFunctionToolRequest$outboundSchema.parse({
          ...tool,
          type: "function",
        });
      case "transfer_call":
        return TransferCallTool$outboundSchema.parse(tool);
      case "hang_up":
        return HangUpTool$outboundSchema.parse(tool);
      default:
        throw unsupportedToolType((tool as { type?: unknown }).type);
    }
  });
}

export type Tool = Declaration | AudioTool | WireTool | VoiceAgentTool;

export function toWireTool(input: Tool | FunctionHandler): WireTool {
  if (input instanceof FunctionHandler || input instanceof VoiceAgentTool)
    return input.toWire();
  if (typeof input !== "object" || input === null)
    throw new VoiceAgentConfigurationError("Expected a voice tool declaration");
  // Generated models use camelCase; flat wire dictionaries use snake_case.
  // Avoid losing optional toolConfiguration to an inbound parser's unknown-key handling.
  if (
    "toolConfiguration" in input ||
    "connectorId" in input ||
    "libraryIds" in input ||
    "timeoutMs" in input
  ) {
    return serializeDeclaration(input);
  }
  return wireToolSchema.parse(input);
}

/**
 * Normalise any accepted declaration to the camelCase shape
 * `client.audio.sessions.create()` takes. Browser callers need this: their
 * declarations are authored client-side but submitted by a backend.
 */
export function toAudioTool(input: Tool | FunctionHandler): AudioTool {
  return toolInboundSchema.parse(toWireTool(input));
}

export class VoiceAgentTool {
  constructor(
    readonly tool: Declaration | AudioTool,
    readonly options: { filler?: StaticToolFiller; timeoutMs?: number } = {},
  ) {}
  toWire(): WireTool {
    const tool = serializeDeclaration(this.tool);
    const { filler, timeoutMs } = this.options;
    if (timeoutMs !== undefined) {
      if (
        !Number.isInteger(timeoutMs) ||
        timeoutMs < 1 ||
        timeoutMs > TIMEOUT_MS_MAX
      )
        throw new VoiceAgentConfigurationError(
          `timeoutMs must be an integer between 1 and ${TIMEOUT_MS_MAX}`,
        );
      if (tool.type !== "function")
        throw new VoiceAgentConfigurationError(
          "timeoutMs is only supported for function tools",
        );
    }
    return wireToolSchema.parse({
      ...tool,
      ...(filler === undefined ? {} : { filler }),
      ...(timeoutMs === undefined ? {} : { timeout_ms: timeoutMs }),
    });
  }
}

/** A handler-only map has no local schema; startup checks its names only. */
export type FunctionHandlerFn = (
  args: Record<string, unknown>,
) => unknown | Promise<unknown>;
export type FunctionHandlers =
  | FunctionHandler[]
  | Record<string, FunctionHandlerFn>;

export interface FunctionToolDef<S extends z.ZodType> {
  name: string;
  description?: string;
  parameters: S;
  timeoutMs?: number;
  filler?: StaticToolFiller;
  handler: (args: z.infer<S>) => unknown | Promise<unknown>;
}
export class FunctionHandler {
  readonly name: string;
  readonly handler: (args: never) => unknown;
  readonly parameters: Record<string, unknown> | undefined;
  private readonly wire: WireTool | undefined;
  constructor(
    def:
      | {
          name: string;
          declaration: FunctionTool;
          filler?: StaticToolFiller;
          timeoutMs?: number;
          invoke: (args: unknown) => Promise<unknown>;
          handler?: (args: never) => unknown;
        }
      | { name: string; handler: FunctionHandlerFn },
  ) {
    this.name = def.name;
    if (!("declaration" in def)) {
      this.handler = def.handler;
      this.parameters = undefined;
      this.invokeHandler = async (raw) =>
        def.handler(z.record(z.string(), z.unknown()).parse(raw));
      this.wire = undefined;
      return;
    }
    this.handler = def.handler ?? def.invoke;
    this.parameters = def.declaration.function.parameters;
    this.invokeHandler = def.invoke;
    this.wire = new VoiceAgentTool(def.declaration, {
      timeoutMs: def.timeoutMs ?? 15000,
      ...(def.filler === undefined ? {} : { filler: def.filler }),
    }).toWire();
  }
  private readonly invokeHandler: (args: unknown) => Promise<unknown>;
  toWire(): WireTool {
    if (this.wire === undefined)
      throw new VoiceAgentConfigurationError(
        "Handler-only entries belong in functionHandlers, not tools",
      );
    return structuredClone(this.wire);
  }
  async invoke(raw: string | undefined): Promise<string> {
    const result = await this.invokeHandler(raw ? JSON.parse(raw) : {});
    return result == null
      ? ""
      : typeof result === "string"
        ? result
        : JSON.stringify(result);
  }
}
export function functionTool<S extends z.ZodType>(
  def: FunctionToolDef<S>,
): FunctionHandler {
  return new FunctionHandler({
    name: def.name,
    declaration: {
      type: "function",
      function: {
        name: def.name,
        parameters: z
          .record(z.string(), z.unknown())
          .parse(JSON.parse(JSON.stringify(z.toJSONSchema(def.parameters)))),
        ...(def.description === undefined
          ? {}
          : { description: def.description }),
      },
    },
    handler: def.handler,
    invoke: async (raw) => def.handler(def.parameters.parse(raw)),
    ...(def.timeoutMs === undefined ? {} : { timeoutMs: def.timeoutMs }),
    ...(def.filler === undefined ? {} : { filler: def.filler }),
  });
}

/** Compare static names, not full JSON Schema compatibility. RPC still validates each call. */
export function functionSignatureMismatch(
  declared: Record<string, unknown>,
  local: Record<string, unknown>,
): string | undefined {
  const properties = z
    .record(z.string(), z.unknown())
    .safeParse(declared["properties"] ?? {});
  const localProperties = z
    .record(z.string(), z.unknown())
    .safeParse(local["properties"] ?? {});
  if (!properties.success || !localProperties.success) return undefined;
  const required = z.array(z.string()).safeParse(local["required"] ?? []);
  if (!required.success) return undefined;
  const dropped = Object.keys(properties.data)
    .filter((name) => !(name in localProperties.data))
    .sort();
  const missing = required.data
    .filter((name) => !(name in properties.data))
    .sort();
  const problems = [];
  if (dropped.length) problems.push(`does not accept ${dropped.join(", ")}`);
  if (missing.length)
    problems.push(
      `requires ${missing.join(", ")}, which the model never sends`,
    );
  return problems.length ? problems.join("; ") : undefined;
}
