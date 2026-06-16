/**
 * Unit tests for OTEL formatting helpers.
 */

import {
  formatInputMessage,
  formatOutputMessage,
  formatToolDefinition,
} from "../../../src/extra/observability/formatting.js";

describe("formatInputMessage", () => {
  test("user message with text content", () => {
    const result = formatInputMessage({ role: "user", content: "hello" });
    expect(result).toEqual({
      role: "user",
      parts: [{ type: "text", content: "hello" }],
    });
  });

  test("assistant message with tool calls", () => {
    const msg = {
      role: "assistant",
      content: "",
      tool_calls: [{ id: "tc1", function: { name: "get_weather", arguments: '{"city":"Paris"}' } }],
    };
    const result = formatInputMessage(msg);
    expect(result.role).toBe("assistant");
    expect(result.parts).toContainEqual({
      type: "tool_call",
      name: "get_weather",
      id: "tc1",
      arguments: '{"city":"Paris"}',
    });
  });

  test("tool message", () => {
    const result = formatInputMessage({ role: "tool", content: "sunny", tool_call_id: "tc1" });
    expect(result).toEqual({
      role: "tool",
      parts: [{ type: "tool_call_response", response: "sunny", id: "tc1" }],
    });
  });

  test("function.result entry (conversations API)", () => {
    const msg = { type: "function.result", result: '{"status":"ok"}', tool_call_id: "tc1" };
    const result = formatInputMessage(msg);
    expect(result).toEqual({
      role: "tool",
      parts: [{ type: "tool_call_response", response: '{"status":"ok"}', id: "tc1" }],
    });
  });

  test("thinking chunk converts to reasoning", () => {
    const content = [{ type: "thinking", thinking: [{ type: "text", text: "step 1" }] }];
    const result = formatInputMessage({ role: "assistant", content });
    expect(result.parts).toEqual([{ type: "reasoning", content: "step 1" }]);
  });

  test("image_url chunk", () => {
    const content = [{ type: "image_url", image_url: { url: "https://example.com/img.png" } }];
    const result = formatInputMessage({ role: "user", content });
    expect(result.parts).toEqual([{ type: "uri", modality: "image", uri: "https://example.com/img.png" }]);
  });
});

describe("formatOutputMessage", () => {
  test("simple response", () => {
    const choice = { message: { role: "assistant", content: "hello" }, finish_reason: "stop" };
    const result = formatOutputMessage(choice);
    expect(result).toEqual({
      role: "assistant",
      parts: [{ type: "text", content: "hello" }],
      finish_reason: "stop",
    });
  });

  test("tool calls response", () => {
    const choice = {
      message: {
        role: "assistant",
        content: null,
        tool_calls: [{ id: "tc1", function: { name: "f", arguments: "{}" } }],
      },
      finish_reason: "tool_calls",
    };
    const result = formatOutputMessage(choice);
    expect(result.finish_reason).toBe("tool_calls");
    expect((result.parts as Array<Record<string, unknown>>)[0].type).toBe("tool_call");
  });
});

describe("formatToolDefinition", () => {
  test("full definition", () => {
    const tool = {
      type: "function",
      function: { name: "get_weather", description: "Get weather", parameters: { type: "object" } },
    };
    const result = formatToolDefinition(tool);
    expect(result).toEqual({
      type: "function",
      name: "get_weather",
      description: "Get weather",
      parameters: { type: "object" },
    });
  });

  test("returns null when no function name", () => {
    expect(formatToolDefinition({ type: "function" })).toBeNull();
    expect(formatToolDefinition({ function: {} })).toBeNull();
  });
});
