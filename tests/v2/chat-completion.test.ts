import { describe, it, expect } from "vitest";
import {
  ChatCompletionResponse$inboundSchema,
  chatCompletionResponseFromJSON,
} from "../../src/models/components/chatcompletionresponse.js";
import {
  CompletionChunk$inboundSchema,
} from "../../src/models/components/completionchunk.js";
import {
  UsageInfo$inboundSchema,
  UsageInfo$outboundSchema,
} from "../../src/models/components/usageinfo.js";
import {
  AssistantMessage$outboundSchema,
} from "../../src/models/components/assistantmessage.js";
import {
  ToolCall$outboundSchema,
} from "../../src/models/components/toolcall.js";

const makeResponse = (overrides: Record<string, unknown> = {}) => ({
  id: "chatcmpl-1",
  object: "chat.completion",
  model: "mistral-small-latest",
  usage: { prompt_tokens: 1, completion_tokens: 1, total_tokens: 2 },
  created: 1700000000,
  choices: [{
    index: 0,
    message: { role: "assistant", content: "ok" },
    finish_reason: "stop",
  }],
  ...overrides,
});

describe("ChatCompletionResponse real scenarios", () => {
  it("parses a tool-calling response (content null, tool_calls present)", () => {
    const raw = makeResponse({
      choices: [{
        index: 0,
        message: {
          role: "assistant",
          content: null,
          tool_calls: [{
            id: "call_abc",
            type: "function",
            function: { name: "getWeather", arguments: '{"city":"Paris"}' },
          }],
        },
        finish_reason: "tool_calls",
      }],
    });
    const parsed = ChatCompletionResponse$inboundSchema.parse(raw);
    expect(parsed.choices[0].message.content).toBeNull();
    expect(parsed.choices[0].finishReason).toBe("tool_calls");
    expect(parsed.choices[0].message.toolCalls![0].function.name).toBe("getWeather");
    expect(parsed.choices[0].message.toolCalls![0].function.arguments).toBe('{"city":"Paris"}');
  });

  it("usage preserves extra unknown fields from future API versions (catchall)", () => {
    const parsed = ChatCompletionResponse$inboundSchema.parse(
      makeResponse({
        usage: {
          prompt_tokens: 5, completion_tokens: 10, total_tokens: 15,
          cached_tokens: 3, reasoning_tokens: 7,
        },
      }),
    );
    expect(parsed.usage.promptTokens).toBe(5);
    const usage = parsed.usage as Record<string, unknown>;
    expect(usage["cached_tokens"]).toBe(3);
    expect(usage["reasoning_tokens"]).toBe(7);
  });

  it("tool_calls as null vs empty array vs omitted", () => {
    const withNull = ChatCompletionResponse$inboundSchema.parse(
      makeResponse({ choices: [{ index: 0, message: { content: "hi", tool_calls: null }, finish_reason: "stop" }] }),
    );
    const withEmpty = ChatCompletionResponse$inboundSchema.parse(
      makeResponse({ choices: [{ index: 0, message: { content: "hi", tool_calls: [] }, finish_reason: "stop" }] }),
    );
    const omitted = ChatCompletionResponse$inboundSchema.parse(
      makeResponse({ choices: [{ index: 0, message: { content: "hi" }, finish_reason: "stop" }] }),
    );
    expect(withNull.choices[0].message.toolCalls).toBeNull();
    expect(withEmpty.choices[0].message.toolCalls).toEqual([]);
    expect(omitted.choices[0].message.toolCalls).toBeUndefined();
  });

  it("rejects response missing required fields", () => {
    expect(() => ChatCompletionResponse$inboundSchema.parse({ id: "bad" })).toThrow();
  });

  it("fromJSON safe parse: bad input returns ok:false, good input returns ok:true", () => {
    expect(chatCompletionResponseFromJSON("not json").ok).toBe(false);
    expect(chatCompletionResponseFromJSON(JSON.stringify({ wrong: true })).ok).toBe(false);

    const good = chatCompletionResponseFromJSON(JSON.stringify(makeResponse()));
    expect(good.ok).toBe(true);
    if (good.ok) expect(good.value.id).toBe("chatcmpl-1");
  });
});

describe("CompletionChunk (streaming) real scenarios", () => {
  it("bare-minimum streaming chunk: all optionals can be omitted", () => {
    const parsed = CompletionChunk$inboundSchema.parse({
      id: "s-1",
      model: "mistral-small-latest",
      choices: [{ index: 0, delta: { content: "tok" }, finish_reason: null }],
    });
    expect(parsed.id).toBe("s-1");
    expect(parsed.object).toBeUndefined();
    expect(parsed.created).toBeUndefined();
    expect(parsed.usage).toBeUndefined();
  });

  it("final chunk with usage and finish_reason", () => {
    const parsed = CompletionChunk$inboundSchema.parse({
      id: "s-2",
      model: "mistral-small-latest",
      usage: { prompt_tokens: 10, completion_tokens: 5, total_tokens: 15 },
      choices: [{ index: 0, delta: { content: "" }, finish_reason: "stop" }],
    });
    expect(parsed.usage!.totalTokens).toBe(15);
    expect(parsed.choices[0].finishReason).toBe("stop");
  });
});

describe("SDK → wire format roundtrip (outbound schemas)", () => {
  it("UsageInfo: camelCase serializes back to snake_case", () => {
    const sdk = { promptTokens: 10, completionTokens: 20, totalTokens: 30 };
    const wire = UsageInfo$outboundSchema.parse(sdk);
    expect(wire).toHaveProperty("prompt_tokens", 10);
    expect(wire).toHaveProperty("completion_tokens", 20);
    expect(wire).toHaveProperty("total_tokens", 30);
    expect(wire).not.toHaveProperty("promptTokens");
  });

  it("UsageInfo roundtrip: inbound → outbound preserves values", () => {
    const original = { prompt_tokens: 7, completion_tokens: 13, total_tokens: 20 };
    const sdk = UsageInfo$inboundSchema.parse(original);
    const wire = UsageInfo$outboundSchema.parse(sdk);
    expect(wire).toEqual(expect.objectContaining(original));
  });

  it("UsageInfo roundtrip: extra API fields survive through catchall", () => {
    const original = { prompt_tokens: 1, completion_tokens: 2, total_tokens: 3, cached_tokens: 1 };
    const sdk = UsageInfo$inboundSchema.parse(original);
    const wire = UsageInfo$outboundSchema.parse(sdk);
    expect(wire).toHaveProperty("cached_tokens", 1);
  });

  it("AssistantMessage: toolCalls serializes back to tool_calls", () => {
    const sdk = {
      role: "assistant" as const,
      content: null,
      toolCalls: [{ id: "c1", function: { name: "fn", arguments: "{}" }, index: 0 }],
      prefix: false,
    };
    const wire = AssistantMessage$outboundSchema.parse(sdk);
    expect(wire).toHaveProperty("tool_calls");
    expect(wire).not.toHaveProperty("toolCalls");
    expect(wire.tool_calls?.[0].function.name).toBe("fn");
  });

  it("ToolCall: outbound applies defaults for id and index", () => {
    const wire = ToolCall$outboundSchema.parse({ function: { name: "fn", arguments: "{}" } });
    expect(wire).toHaveProperty("id", "null");
    expect(wire).toHaveProperty("index", 0);
  });
});
