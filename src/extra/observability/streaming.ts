/**
 * Streaming response helpers for OTEL tracing.
 *
 * Pure functions that parse SSE byte streams and accumulate CompletionChunk
 * deltas into a ChatCompletionResponse-shaped dict suitable for span enrichment.
 *
 * NOTE: The SSE bytes are re-parsed here even though EventStream already
 * parsed them during iteration.
 * TracedResponse sits below EventStream and can only accumulate raw bytes; it
 * has no access to the decoded events. Hooking into EventStream could eliminate
 * this double-parse, but EventStream is Speakeasy-generated code.
 */

import {
  CompletionChunk,
  completionChunkFromJSON,
} from "../../models/components/completionchunk.js";
import {
  UsageInfo,
  UsageInfo$outboundSchema,
} from "../../models/components/usageinfo.js";

type AccumulatedChoice = {
  message: {
    role: string;
    content: string;
    tool_calls?: Array<{
      id: string | null;
      function: {
        name: string;
        arguments: string;
      };
    }>;
  };
  finish_reason: string;
};

function normalizeCompletionChunkPayload(payload: string): string {
  const parsed = JSON.parse(payload) as unknown;
  if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
    return payload;
  }

  const chunk = parsed as Record<string, unknown>;

  // Python accepts null for these optional fields; the TS schema expects omission.
  for (const field of ["object", "created", "usage"]) {
    if (chunk[field] === null) {
      delete chunk[field];
    }
  }

  const choices = chunk["choices"];
  if (Array.isArray(choices)) {
    for (const choice of choices) {
      if (typeof choice === "object" && choice !== null && !Array.isArray(choice)) {
        const choiceObj = choice as Record<string, unknown>;
        if (!("finish_reason" in choiceObj)) {
          choiceObj["finish_reason"] = null;
        }
      }
    }
  }

  return JSON.stringify(chunk);
}

/**
 * Parse raw SSE text into a list of typed CompletionChunk models.
 *
 * Only CompletionChunk is handled. If new SSE-streamed response types
 * are added, parsing and typing here will need updating.
 */
export function parseSseChunks(rawSseText: string): CompletionChunk[] {
  const chunks: CompletionChunk[] = [];
  const lines = rawSseText.split("\n");
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed.startsWith("data: ")) {
      continue;
    }
    const payload = trimmed.slice(6);
    if (payload === "[DONE]") {
      continue;
    }
    try {
      const result = completionChunkFromJSON(normalizeCompletionChunkPayload(payload));
      if (result.ok) {
        chunks.push(result.value);
      }
    } catch {
      continue;
    }
  }
  return chunks;
}

/**
 * Accumulate streaming CompletionChunk deltas into a ChatCompletionResponse-shaped dict.
 */
export function accumulateChunksToResponseDict(
  chunks: CompletionChunk[]
): Record<string, unknown> {
  let responseId: string | undefined;
  let model: string | undefined;
  let usage: UsageInfo | undefined;
  const choices: Map<number, AccumulatedChoice> = new Map();

  for (const chunk of chunks) {
    responseId = responseId || chunk.id;
    model = model || chunk.model;
    usage = usage || chunk.usage;

    for (const choice of chunk.choices) {
      let accumulated = choices.get(choice.index);
      if (!accumulated) {
        accumulated = {
          message: { role: "assistant", content: "" },
          finish_reason: "",
        };
        choices.set(choice.index, accumulated);
      }
      const msg = accumulated.message;
      const delta = choice.delta;
      if (typeof delta.role === "string") {
        msg.role = delta.role;
      }
      if (typeof delta.content === "string" && delta.content) {
        msg.content += delta.content;
      }
      if (typeof choice.finishReason === "string") {
        accumulated.finish_reason = choice.finishReason;
      }
      if (Array.isArray(delta.toolCalls)) {
        if (!msg.tool_calls) {
          msg.tool_calls = [];
        }
        const toolCalls = msg.tool_calls;
        for (const tc of delta.toolCalls) {
          const tcIdx = tc.index != null ? tc.index : toolCalls.length;
          while (toolCalls.length <= tcIdx) {
            toolCalls.push({
              id: null,
              function: { name: "", arguments: "" },
            });
          }
          const existing = toolCalls[tcIdx]!;
          // ToolCall.id defaults to "null" string in some cases (Speakeasy codegen quirk)
          if (tc.id != null && tc.id !== "null") {
            existing.id = tc.id;
          }
          if (tc.function.name) {
            existing.function.name += tc.function.name;
          }
          if (typeof tc.function.arguments === "string" && tc.function.arguments) {
            existing.function.arguments += tc.function.arguments;
          }
        }
      }
    }
  }

  const sortedIndices = Array.from(choices.keys()).sort((a, b) => a - b);
  const result: Record<string, unknown> = {
    id: responseId,
    model,
    choices: sortedIndices.map((idx) => choices.get(idx)),
  };
  if (usage != null) {
    // Convert to snake_case JSON format for OTEL attributes
    result["usage"] = UsageInfo$outboundSchema.parse(usage);
  }
  return result;
}
