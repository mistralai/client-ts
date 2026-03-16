import { describe, it, expect } from "vitest";
import {
  EmbeddingResponse$inboundSchema,
} from "../../src/models/components/embeddingresponse.js";

describe("EmbeddingResponse parsing", () => {
  it("parses embedding data with float arrays and index ordering", () => {
    const raw = {
      id: "embd-1",
      object: "list",
      model: "mistral-embed",
      usage: { prompt_tokens: 10, completion_tokens: 0, total_tokens: 10 },
      data: [
        { object: "embedding", embedding: [0.1, -0.5, 0.99], index: 0 },
        { object: "embedding", embedding: [0.2, 0.3, -0.1], index: 1 },
      ],
    };
    const parsed = EmbeddingResponse$inboundSchema.parse(raw);
    expect(parsed.data).toHaveLength(2);
    expect(parsed.data[0].embedding).toEqual([0.1, -0.5, 0.99]);
    expect(parsed.data[1].index).toBe(1);
    expect(parsed.usage.promptTokens).toBe(10);
  });

  it("handles empty data array", () => {
    const raw = {
      id: "embd-2", object: "list", model: "mistral-embed",
      usage: { prompt_tokens: 0, total_tokens: 0 }, data: [],
    };
    const parsed = EmbeddingResponse$inboundSchema.parse(raw);
    expect(parsed.data).toEqual([]);
  });
});
