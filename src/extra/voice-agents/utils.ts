import type { VoiceAgentFunctionTool } from "../../models/components/index.js";

import { VoiceAgentConfigurationError } from "./errors.js";
import type { VoiceAgentErrorEvent } from "./events.js";
import {
  FunctionHandler,
  functionSignatureMismatch,
  type FunctionHandlers,
  type Tool,
} from "./tools.js";

export function decodeJsonPayload(data: unknown): unknown {
  if (data instanceof Uint8Array || data instanceof ArrayBuffer) {
    const bytes = data instanceof Uint8Array ? data : new Uint8Array(data);
    data = new TextDecoder().decode(bytes);
  }
  if (typeof data !== "string") return data;
  try {
    return JSON.parse(data);
  } catch {
    return data;
  }
}

export function errorMessage(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}

export function isMissingModuleError(
  error: unknown,
  packageName: string,
): boolean {
  return (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    (error.code === "ERR_MODULE_NOT_FOUND" ||
      error.code === "MODULE_NOT_FOUND") &&
    String("message" in error ? error.message : "").includes(packageName)
  );
}

export function localFunctionHandlers(
  tools: (Tool | FunctionHandler)[] | null | undefined,
  functionHandlers: FunctionHandlers | null | undefined,
): FunctionHandler[] {
  const inline = (tools ?? []).filter(
    (tool): tool is FunctionHandler => tool instanceof FunctionHandler,
  );
  const attached =
    functionHandlers == null
      ? []
      : Array.isArray(functionHandlers)
        ? functionHandlers
        : Object.entries(functionHandlers).map(
            ([name, handler]) => new FunctionHandler({ name, handler }),
          );
  const byName = new Map<string, FunctionHandler>();
  for (const tool of [...inline, ...attached]) {
    const existing = byName.get(tool.name);
    if (existing && existing.handler !== tool.handler) {
      throw new VoiceAgentConfigurationError(
        `Different handlers registered for function \`${tool.name}\``,
      );
    }
    // Prefer a schema-bearing tool when the same callable is also attached by name.
    if (
      !existing ||
      (existing.parameters === undefined && tool.parameters !== undefined)
    )
      byName.set(tool.name, tool);
  }
  return [...byName.values()];
}

export function checkFunctionHandlers(
  definitions: VoiceAgentFunctionTool[],
  handlers: FunctionHandler[],
): VoiceAgentErrorEvent | undefined {
  const byName = new Map(
    definitions.map((tool) => [tool.function.name, tool.function]),
  );
  const problems = [];
  const mismatches = [];
  for (const handler of handlers) {
    const definition = byName.get(handler.name);
    if (!definition) {
      problems.push(`Handler \`${handler.name}\` has no function declaration`);
      continue;
    }
    const mismatch =
      handler.parameters === undefined
        ? undefined
        : functionSignatureMismatch(definition.parameters, handler.parameters);
    if (mismatch) mismatches.push(`Handler \`${handler.name}\` ${mismatch}`);
  }
  if (mismatches.length) {
    throw new VoiceAgentConfigurationError(
      `Invalid function handlers: ${mismatches.join("; ")}`,
    );
  }
  const names = new Set(handlers.map((tool) => tool.name));
  for (const name of [...byName.keys()]
    .filter((name) => !names.has(name))
    .sort()) {
    problems.push(`Function \`${name}\` has no local handler`);
  }
  if (problems.length) {
    const message = `Invalid function handlers: ${problems.join("; ")}`;
    return {
      type: "error",
      source: "transport",
      code: "function_handler_configuration_error",
      message,
      fatal: false,
    };
  }
  return undefined;
}
