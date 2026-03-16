import { describe, it, expect } from "vitest";
import {
  ClassificationResponse$inboundSchema,
} from "../../src/models/components/classificationresponse.js";
import {
  ModerationResponse$inboundSchema,
} from "../../src/models/components/moderationresponse.js";

describe("ClassificationResponse parsing", () => {
  it("parses classification result with dynamic category keys (Record type)", () => {
    const raw = {
      id: "cls-1",
      model: "mistral-moderation-latest",
      results: [{
        sexual: { scores: { "default": 0.01 } },
        violence: { scores: { "default": 0.85 } },
        hate: { scores: { "default": 0.0 } },
        self_harm: { scores: { "default": 0.001 } },
      }],
    };
    const parsed = ClassificationResponse$inboundSchema.parse(raw);
    expect(parsed.results[0].violence.scores["default"]).toBe(0.85);
    expect(Object.keys(parsed.results[0])).toHaveLength(4);
  });
});

describe("ModerationResponse parsing", () => {
  it("parses moderation with categories booleans and category_scores remapping", () => {
    const raw = {
      id: "mod-1",
      model: "mistral-moderation-latest",
      results: [{
        categories: { sexual: false, violence: true, hate: false },
        category_scores: { sexual: 0.01, violence: 0.95, hate: 0.02 },
      }],
    };
    const parsed = ModerationResponse$inboundSchema.parse(raw);
    expect(parsed.results[0].categories?.violence).toBe(true);
    expect(parsed.results[0].categoryScores?.violence).toBe(0.95);
  });
});
