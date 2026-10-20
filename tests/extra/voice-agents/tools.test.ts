import { expect, test } from "vitest";
import * as z from "zod/v4";

import { VoiceAgentConfigurationError } from "../../../src/extra/voice-agents/errors.js";
import {
  functionTool,
  toWireTool,
  VoiceAgentTool,
} from "../../../src/extra/voice-agents/tools.js";

test.each([
  { type: "web_search", wait: true },
  { type: "web_search", toolConfiguration: undefined, bogus: 1 },
])("rejects unknown fields on %o", (tool) => {
  expect(() => toWireTool(tool as never)).toThrow(/Unknown tool fields/);
});

test("rejects unknown fields on a wrapped declaration", () => {
  const tool = new VoiceAgentTool({ type: "web_search", wait: true } as never, {
    filler: { text: "Searching" },
  });

  expect(() => tool.toWire()).toThrow(/Unknown tool fields: wait/);
});

test("rejects a timeoutMs outside the backend bounds", () => {
  expect(() =>
    functionTool({
      name: "lookup",
      parameters: z.object({ city: z.string() }),
      timeoutMs: 0,
      handler: () => "",
    }),
  ).toThrow(VoiceAgentConfigurationError);
});

test.each([
  { type: "function", name: "lookup" },
  { type: "connector" },
  null,
  "web_search",
])("reports %o as a configuration error", (tool) => {
  expect(() => toWireTool(tool as never)).toThrow(VoiceAgentConfigurationError);
});

test("keeps the filler on a known declaration", () => {
  const wire = new VoiceAgentTool(
    { type: "web_search" },
    { filler: { text: "Searching" } },
  ).toWire();

  expect(wire).toEqual({
    type: "web_search",
    filler: { type: "static", text: "Searching" },
  });
});
