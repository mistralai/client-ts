export { traceAsync } from "./otel.js";
export { MISTRAL_SDK_OTEL_TRACER_NAME } from "./otel.js";
export { getRegisteredTracerProvider, registerTracerProvider } from "./provider.js";
export {
  configureTelemetry,
  configureTelemetryForHook,
  flushTelemetry,
  getTelemetryTracer,
  MISTRAL_OTLP_TRACES_ENDPOINT_ENV,
  MISTRAL_SDK_TELEMETRY_ENV,
  MISTRAL_TELEMETRY_BASE_URL,
  MISTRAL_TELEMETRY_ENDPOINT,
  MISTRAL_TELEMETRY_TRACES_PATH,
  setTracerProvider,
  shutdownTelemetry,
  TELEMETRY_PROVIDER_DEDICATED,
  TELEMETRY_PROVIDER_GLOBAL,
  TelemetryConfigurationError,
  type ConfigureTelemetryOptions,
  type TelemetryProvider,
  type TelemetryProviderMode,
  type TelemetrySetting,
} from "./telemetry.js";
export {
  RedactingSpanExporter,
  resolveRedaction,
  type ExportResultLike,
  type ReadableSpanLike,
  type RedactionSetting,
  type SpanExporterLike,
} from "./redaction.js";
export {
  AttributeRedactionPolicy,
  CallbackRedactionPolicy,
  DEFAULT_PII_SECRET_PATTERNS,
  DEFAULT_REDACTED_VALUE,
  DEFAULT_SAFE_ATTRIBUTE_KEYS,
  DEFAULT_SENSITIVE_ATTRIBUTE_FRAGMENTS,
  DEFAULT_SENSITIVE_ATTRIBUTE_KEYS,
  DEFAULT_TOKEN_PATTERNS,
  defaultRedactionPolicy,
  RedactionPolicy,
  RegexRedactionPolicy,
  type AttributeMaskCallback,
} from "./redaction-policies.js";

export type { Tracer, TracerOptions, TracerProvider } from "@opentelemetry/api";
