import { expect, test } from "vitest";

import { isMissingModuleError } from "../../../src/extra/voice-agents/utils.js";

test.each([
  { error: new Error("livekit-client failed to join"), expected: false },
  {
    error: Object.assign(new Error("Cannot find package 'livekit-client'"), {
      code: "ERR_MODULE_NOT_FOUND",
    }),
    expected: true,
  },
])("only a module-not-found code names a missing package", (
  { error, expected },
) => {
  expect(isMissingModuleError(error, "livekit-client")).toBe(expected);
});
