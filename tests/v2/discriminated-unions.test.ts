import { describe, it, expect } from "vitest";
import {
  ContentChunk$inboundSchema,
} from "../../src/models/components/contentchunk.js";
import { isUnknown } from "../../src/types/discriminatedUnion.js";

describe("ContentChunk Unknown fallback behavior", () => {
  it("unknown type returns Unknown with isUnknown() = true and type = 'UNKNOWN'", () => {
    const raw = { type: "video_url", videoUrl: "https://example.com/video.mp4" };
    const parsed = ContentChunk$inboundSchema.parse(raw);
    expect(isUnknown(parsed)).toBe(true);
    expect(parsed.type).toBe("UNKNOWN");
  });

  it("unknown type preserves the full raw payload for inspection", () => {
    const raw = {
      type: "hologram",
      data: { coordinates: [1, 2, 3] },
      metadata: { resolution: "4k" },
    };
    const parsed = ContentChunk$inboundSchema.parse(raw);
    expect(isUnknown(parsed)).toBe(true);
    if (isUnknown(parsed)) {
      expect(parsed.raw).toEqual(raw);
      expect(parsed.isUnknown).toBe(true);
    }
  });

  it("known type with missing required fields falls back to Unknown instead of throwing", () => {
    // type "text" is known, but text field is missing — graceful degradation, not crash
    const parsed = ContentChunk$inboundSchema.parse({ type: "text" });
    expect(isUnknown(parsed)).toBe(true);
    if (isUnknown(parsed)) {
      expect(parsed.raw).toEqual({ type: "text" });
    }
  });

  it("missing discriminator field falls back to Unknown", () => {
    const parsed = ContentChunk$inboundSchema.parse({ content: "no type field" });
    expect(isUnknown(parsed)).toBe(true);
  });

  it("non-object input falls back to Unknown", () => {
    expect(isUnknown(ContentChunk$inboundSchema.parse("string"))).toBe(true);
    expect(isUnknown(ContentChunk$inboundSchema.parse(null))).toBe(true);
    expect(isUnknown(ContentChunk$inboundSchema.parse(42))).toBe(true);
  });

  it("known types are NOT Unknown (positive contract)", () => {
    expect(isUnknown(ContentChunk$inboundSchema.parse({ type: "text", text: "hi" }))).toBe(false);
    expect(isUnknown(ContentChunk$inboundSchema.parse({ type: "image_url", image_url: "http://x" }))).toBe(false);
  });
});
