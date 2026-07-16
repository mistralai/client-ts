/**
 * Global provider mode with application-owned redaction.
 *
 * In global (or custom TracerProvider) mode your application owns the OTEL
 * export pipeline, so `configureTelemetry`'s redaction argument is ignored (a
 * warning is logged). To redact spans you wrap your own exporter with
 * `RedactingSpanExporter`.
 */

import { trace } from "@opentelemetry/api";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-http";
import {
    BasicTracerProvider,
    BatchSpanProcessor,
} from "@opentelemetry/sdk-trace-base";

import { Mistral } from "@mistralai/mistralai";
import {
    configureTelemetry,
    RedactingSpanExporter,
} from "@mistralai/mistralai/extra/observability";

const apiKey = process.env["MISTRAL_API_KEY"];
if (!apiKey) {
  throw new Error("missing MISTRAL_API_KEY environment variable");
}

// Build your own provider and wrap the exporter with redaction.
const provider = new BasicTracerProvider({
  spanProcessors: [
    new BatchSpanProcessor(new RedactingSpanExporter(new OTLPTraceExporter())),
  ],
});
trace.setGlobalTracerProvider(provider);

const client = new Mistral({ apiKey });

// SDK spans flow through the global provider configured above (already redacted
// by the RedactingSpanExporter). Passing `redaction: false` tells the SDK we are
// handling redaction ourselves, which suppresses the "redaction ignored in
// global mode" warning.
await configureTelemetry(client, "global", { redaction: false });

const response = await client.chat.complete({
  model: "mistral-small-latest",
  messages: [{ role: "user", content: "Say hello." }],
});

console.log(response.choices?.[0]?.message?.content);
