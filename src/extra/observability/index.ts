export { traceAsync } from "./otel.js";
export { MISTRAL_SDK_OTEL_TRACER_NAME } from "./otel.js";
export { getRegisteredTracerProvider, registerTracerProvider } from "./provider.js";
export {
  configureTelemetry,
  configureTelemetryForHook,
  getTelemetryTracer,
  MISTRAL_OTLP_TRACES_ENDPOINT_ENV,
  MISTRAL_SDK_TELEMETRY_ENV,
  MISTRAL_TELEMETRY_BASE_URL,
  MISTRAL_TELEMETRY_ENDPOINT,
  MISTRAL_TELEMETRY_TRACES_PATH,
  setTracerProvider,
  TELEMETRY_PROVIDER_DEDICATED,
  TELEMETRY_PROVIDER_GLOBAL,
  TelemetryConfigurationError,
  type TelemetryProvider,
  type TelemetryProviderMode,
  type TelemetrySetting,
} from "./telemetry.js";

export type { Tracer, TracerOptions, TracerProvider } from "@opentelemetry/api";
