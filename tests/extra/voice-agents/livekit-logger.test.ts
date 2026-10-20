import { createRequire } from "node:module";
import { dirname, join } from "node:path";
import { expect, test } from "vitest";

// The node transport quiets this logger by resolving the file directly,
// because rtc-node publishes only "." in its exports map. If upstream moves or
// renames it, the silencing degrades to a no-op and LiveKit's per-frame debug
// output reappears in our users' stdout. This is the canary for that.
test("rtc-node's logger is still reachable by path", () => {
  const require_ = createRequire(import.meta.url);
  const entry = require_.resolve("@livekit/rtc-node");
  const loaded = require_(join(dirname(entry), "log.cjs")) as {
    log?: { level?: string };
  };

  expect(typeof loaded.log?.level).toBe("string");
});
