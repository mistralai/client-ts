import { expect, test, vi } from "vitest";

import { initSession } from "../../../src/extra/voice-agents/browser.js";
import { VoiceAgentConfigurationError } from "../../../src/extra/voice-agents/errors.js";

const loading = vi.hoisted(() => ({ order: [] as string[] }));

vi.mock("../../../src/extra/voice-agents/transport/browser.js", () => {
  loading.order.push("transport");
  return { BrowserTransport: class {} };
});

test("a malformed tool fails before the transport loads", async () => {
  const createSession = vi.fn();

  await expect(
    initSession({
      tools: [{ type: "nope" } as never],
      createSession: createSession as never,
      deleteSession: async () => {},
    }),
  ).rejects.toThrow(VoiceAgentConfigurationError);

  expect(loading.order).toEqual([]);
  expect(createSession).not.toHaveBeenCalled();
});

test("the browser transport loads before the backend creates a session", async () => {
  const createSession = vi.fn(async () => {
    loading.order.push("createSession");
    return { id: "session-1" };
  });

  await initSession({
    createSession: createSession as never,
    deleteSession: async () => {},
  });

  expect(loading.order).toEqual(["transport", "createSession"]);
});
