/**
 * Dedicated telemetry in a warm serverless runtime.
 *
 * The client and its SDK-owned telemetry provider are initialized once per
 * module instance and reused by warm invocations. Each invocation flushes
 * completed spans before returning because the runtime may freeze immediately
 * afterward. Do not call `shutdownTelemetry` per invocation: it detaches the
 * provider, so a later warm invocation would need to configure it again.
 */

import { Mistral } from "@mistralai/mistralai";
import {
  configureTelemetry,
  flushTelemetry,
} from "@mistralai/mistralai/extra/observability";

const apiKey = process.env["MISTRAL_API_KEY"];
if (!apiKey) {
  throw new Error("missing MISTRAL_API_KEY environment variable");
}

// Serverless runtimes commonly reuse module state for warm invocations, so
// configure the client and its dedicated telemetry provider only once.
const client = new Mistral({ apiKey });
const telemetryReady = configureTelemetry(client);

export async function handler() {
  await telemetryReady;

  try {
    return await client.chat.complete({
      model: "mistral-small-latest",
      messages: [{ role: "user", content: "What is the best French cheese?" }],
    });
  } finally {
    // Await the flush: fire-and-forget work may be lost when the runtime freezes.
    // The provider remains active for later warm invocations.
    await flushTelemetry(client);
  }
}
