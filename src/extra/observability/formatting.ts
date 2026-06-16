/**
 * Formatting helpers for converting Mistral API payloads to OTEL GenAI convention formats.
 *
 * These are pure functions with no OTEL dependencies - they transform objects to objects
 * matching the GenAI semantic convention schemas for input/output messages and tool definitions.
 * The caller is responsible for the final JSON serialization (single JSON.stringify on the whole
 * collection) before setting span attributes.
 *
 * Schemas:
 * - Input messages: https://github.com/open-telemetry/semantic-conventions/blob/main/docs/gen-ai/gen-ai-input-messages.json
 * - Output messages: https://github.com/open-telemetry/semantic-conventions/blob/main/docs/gen-ai/gen-ai-output-messages.json
 * - Tool definitions: https://github.com/Cirilla-zmh/semantic-conventions/blob/cc4d07e7e56b80e9aa5904a3d524c134699da37f/docs/gen-ai/gen-ai-tool-definitions.json
 */

/**
 * Convert Mistral message content to OTEL parts array.
 *
 * Mistral content is either a string or an array of content chunks.
 */
function contentToParts(content: unknown): Array<Record<string, unknown>> {
  if (content == null) {
    return [];
  }
  if (typeof content === "string") {
    return [{ type: "text", content }];
  }
  if (!Array.isArray(content)) {
    return [];
  }
  // Content chunks array - map known Mistral types to OTEL part types
  const parts: Array<Record<string, unknown>> = [];
  for (const chunk of content) {
    if (typeof chunk === "string") {
      parts.push({ type: "text", content: chunk });
    } else if (typeof chunk === "object" && chunk !== null) {
      const c = chunk as Record<string, unknown>;
      const chunkType = (c["type"] as string) || "";
      if (chunkType === "text") {
        parts.push({ type: "text", content: c["text"] || "" });
      } else if (chunkType === "thinking") {
        const thinking = c["thinking"];
        let contentStr: string;
        if (Array.isArray(thinking)) {
          const textParts = thinking
            .filter(
              (sub): sub is Record<string, unknown> =>
                typeof sub === "object" && sub !== null && (sub as Record<string, unknown>)["type"] === "text"
            )
            .map((sub) => (sub["text"] as string) || "");
          contentStr = textParts.join("\n");
        } else {
          contentStr = String(thinking || "");
        }
        parts.push({ type: "reasoning", content: contentStr });
      } else if (chunkType === "image_url") {
        const url = c["image_url"];
        const uri =
          typeof url === "object" && url !== null
            ? ((url as Record<string, unknown>)["url"] as string) || ""
            : String(url || "");
        parts.push({ type: "uri", modality: "image", uri });
      } else {
        // Catch-all for other content chunk types
        parts.push({ type: chunkType });
      }
    }
  }
  return parts;
}

/**
 * Convert Mistral tool_calls to OTEL ToolCallRequestPart entries.
 */
function toolCallsToParts(toolCalls: unknown): Array<Record<string, unknown>> {
  if (!toolCalls || !Array.isArray(toolCalls)) {
    return [];
  }
  const parts: Array<Record<string, unknown>> = [];
  for (const tc of toolCalls) {
    if (typeof tc !== "object" || tc === null) continue;
    const tcObj = tc as Record<string, unknown>;
    const func = (tcObj["function"] as Record<string, unknown>) || {};
    const part: Record<string, unknown> = {
      type: "tool_call",
      name: func["name"] || "",
    };
    const tcId = tcObj["id"];
    if (tcId != null) {
      part["id"] = tcId;
    }
    const args = func["arguments"];
    if (args != null) {
      part["arguments"] = args;
    }
    parts.push(part);
  }
  return parts;
}

/**
 * Format a single input message per the OTEL GenAI convention.
 *
 * Schema: https://github.com/open-telemetry/semantic-conventions/blob/main/docs/gen-ai/gen-ai-input-messages.json
 * ChatMessage: {role (required), parts (required), name?}
 *
 * Conversation entry objects (e.g. function.result) don't carry a "role"
 * field - they are detected via their "type" and mapped to the closest OTEL role.
 */
export function formatInputMessage(message: Record<string, unknown>): Record<string, unknown> {
  const entryType = message["type"];

  // Conversation entry: function.result to OTEL tool role
  if (entryType === "function.result") {
    const part: Record<string, unknown> = { type: "tool_call_response", response: message["result"] };
    const toolCallId = message["tool_call_id"];
    if (toolCallId != null) {
      part["id"] = toolCallId;
    }
    return { role: "tool", parts: [part] };
  }

  // TODO: may need to handle other types for conversations (e.g. agent handoff)

  const role = (message["role"] as string) || "unknown";
  const parts: Array<Record<string, unknown>> = [];

  if (role === "tool") {
    // Tool messages are responses to tool calls
    const toolPart: Record<string, unknown> = {
      type: "tool_call_response",
      response: message["content"],
    };
    const toolCallId = message["tool_call_id"];
    if (toolCallId != null) {
      toolPart["id"] = toolCallId;
    }
    parts.push(toolPart);
  } else {
    parts.push(...contentToParts(message["content"]));
    parts.push(...toolCallsToParts(message["tool_calls"]));
  }

  return { role, parts };
}

/**
 * Format a single output choice/message per the OTEL GenAI convention.
 *
 * Schema: https://github.com/open-telemetry/semantic-conventions/blob/main/docs/gen-ai/gen-ai-output-messages.json
 * OutputMessage: {role (required), parts (required), finish_reason (required), name?}
 */
export function formatOutputMessage(choice: Record<string, unknown>): Record<string, unknown> {
  const message = (choice["message"] as Record<string, unknown>) || {};
  const parts: Array<Record<string, unknown>> = [];
  parts.push(...contentToParts(message["content"]));
  parts.push(...toolCallsToParts(message["tool_calls"]));

  return {
    role: message["role"] || "assistant",
    parts,
    finish_reason: choice["finish_reason"] || "",
  };
}

/**
 * Flatten a Mistral tool definition to the OTEL GenAI convention schema.
 *
 * Mistral format: {"type": "function", "function": {"name": ..., "description": ..., "parameters": ...}}
 * OTEL format: {"type": "function", "name": ..., "description": ..., "parameters": ...}
 *
 * Schema, still under review: https://github.com/open-telemetry/semantic-conventions
 */
export function formatToolDefinition(tool: Record<string, unknown>): Record<string, unknown> | null {
  // Early exit conditions: only functions supported for now, and name is required
  const type = (tool["type"] as string) || "function";
  const func = tool["function"] as Record<string, unknown> | undefined;
  if (!func) {
    return null;
  }
  const name = func["name"];
  if (!name) {
    return null;
  }
  const formatted: Record<string, unknown> = { type, name };
  const description = func["description"];
  if (description != null) {
    formatted["description"] = description;
  }
  const parameters = func["parameters"];
  if (parameters != null) {
    formatted["parameters"] = parameters;
  }
  return formatted;
}
