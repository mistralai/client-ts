/**
 * Dedicated telemetry mode.
 *
 * The SDK creates and owns an OTLP exporter that ships spans to the Mistral
 * telemetry endpoint. Spans are redacted before export.
 */

import { Mistral } from "@mistralai/mistralai";
import {
  configureTelemetry,
  shutdownTelemetry,
} from "@mistralai/mistralai/extra/observability";

const apiKey = process.env["MISTRAL_API_KEY"];
if (!apiKey) {
  throw new Error("missing MISTRAL_API_KEY environment variable");
}

const client = new Mistral({ apiKey });

// Dedicated mode is the default; redaction is on by default.
await configureTelemetry(client);

const response = await client.chat.complete({
  model: "mistral-small-latest",
  messages: [{ role: "user", content: "What is the best French cheese?" }],
});

console.log(response.choices?.[0]?.message?.content);

// Dedicated mode buffers spans in a BatchSpanProcessor. Flush and shut it down
// so the span is exported before this short-lived script exits.
await shutdownTelemetry(client);
