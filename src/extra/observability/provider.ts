import type { TracerProvider } from "@opentelemetry/api";

let registeredTracerProvider: TracerProvider | undefined;

/**
 * Route SDK tracing spans to a specific OpenTelemetry tracer provider.
 */
export function registerTracerProvider(tracerProvider?: TracerProvider): void {
  registeredTracerProvider = tracerProvider;
}

/**
 * Returns the currently registered tracer provider, if any.
 */
export function getRegisteredTracerProvider(): TracerProvider | undefined {
  return registeredTracerProvider;
}
