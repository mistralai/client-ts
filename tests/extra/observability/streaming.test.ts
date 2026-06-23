/**
 * Tests for streaming SSE parsing and chunk accumulation.
 */

import {
  parseSseChunks,
  accumulateChunksToResponseDict,
} from "../../../src/extra/observability/streaming.js";

function chunk(opts: {
  content?: string;
  role?: string;
  toolCalls?: Array<{ id?: string; index?: number; function: { name?: string; arguments?: string } }>;
  finishReason?: string | null;
  usage?: { prompt_tokens?: number; completion_tokens?: number; total_tokens?: number };
}): Record<string, unknown> {
  const delta: Record<string, unknown> = {};
  if (opts.role) delta.role = opts.role;
  if (opts.content !== undefined) delta.content = opts.content;
  if (opts.toolCalls) {
    delta.tool_calls = opts.toolCalls.map((tc) => ({
      id: tc.id ?? "null",
      index: tc.index ?? 0,
      function: { name: tc.function.name ?? "", arguments: tc.function.arguments ?? "" },
    }));
  }
  return {
    id: "id-1",
    model: "m",
    choices: [{ index: 0, delta, finish_reason: opts.finishReason ?? null }],
    usage: opts.usage,
  };
}

function toSse(chunks: Record<string, unknown>[]): string {
  return chunks.map((c) => `data: ${JSON.stringify(c)}`).join("\n\n") + "\n\ndata: [DONE]\n\n";
}

describe("parseSseChunks", () => {
  test("parses valid chunks and skips [DONE]", () => {
    const result = parseSseChunks(toSse([chunk({ content: "hello" }), chunk({ content: " world" })]));
    expect(result.length).toBe(2);
    expect(result[0].choices[0].delta.content).toBe("hello");
  });

  test("normalizes nullable optional fields without dropping first content chunk", () => {
    const firstChunk = chunk({ role: "assistant", content: "Bonjour" });
    firstChunk["usage"] = null;
    firstChunk["object"] = null;
    const choice = (firstChunk["choices"] as Array<Record<string, unknown>>)[0]!;
    delete choice["finish_reason"];

    const result = parseSseChunks(toSse([firstChunk, chunk({ content: " monde" })]));

    expect(result.map((c) => c.choices[0].delta.content)).toEqual(["Bonjour", " monde"]);
  });

  test("skips invalid json", () => {
    expect(parseSseChunks("data: {invalid}\n\ndata: [DONE]\n\n")).toEqual([]);
  });

  test("empty input", () => {
    expect(parseSseChunks("")).toEqual([]);
  });
});

describe("accumulateChunksToResponseDict", () => {
  test("concatenates content across chunks", () => {
    const chunks = parseSseChunks(toSse([
      chunk({ role: "assistant", content: "Hello" }),
      chunk({ content: " world", finishReason: "stop", usage: { prompt_tokens: 10, completion_tokens: 5, total_tokens: 15 } }),
    ]));
    const result = accumulateChunksToResponseDict(chunks);
    expect(result.choices).toEqual([{ message: { role: "assistant", content: "Hello world" }, finish_reason: "stop" }]);
    expect(result.usage).toEqual({ prompt_tokens: 10, completion_tokens: 5, total_tokens: 15 });
  });

  test("accumulates fragmented tool call arguments", () => {
    const chunks = parseSseChunks(toSse([
      chunk({ role: "assistant", content: "", toolCalls: [{ id: "tc-1", index: 0, function: { name: "f", arguments: '{"a"' } }] }),
      chunk({ toolCalls: [{ index: 0, function: { arguments: ': 1}' } }], finishReason: "tool_calls" }),
    ]));
    const result = accumulateChunksToResponseDict(chunks) as {
      choices: Array<{ message: { tool_calls?: Array<{ id: string; function: { name: string; arguments: string } }> } }>;
    };
    expect(result.choices[0].message.tool_calls).toEqual([
      { id: "tc-1", function: { name: "f", arguments: '{"a": 1}' } },
    ]);
  });

  test("accumulates content when delta.content is an array of ContentChunk objects", () => {
    const arrayContentChunk: Record<string, unknown> = {
      id: "id-1",
      model: "m",
      choices: [{
        index: 0,
        delta: {
          role: "assistant",
          content: [{ type: "text", text: "Bonjour" }],
        },
        finish_reason: null,
      }],
    };
    const chunks = parseSseChunks(toSse([
      arrayContentChunk,
      chunk({ content: " monde", finishReason: "stop" }),
    ]));
    const result = accumulateChunksToResponseDict(chunks);
    expect(result.choices).toEqual([{
      message: { role: "assistant", content: "Bonjour monde" },
      finish_reason: "stop",
    }]);
  });

  test("handles empty chunks", () => {
    expect(accumulateChunksToResponseDict([])).toEqual({ id: undefined, model: undefined, choices: [] });
  });
});
