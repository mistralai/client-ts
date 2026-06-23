import type { Tracer, TracerProvider } from "@opentelemetry/api";
import { trace } from "@opentelemetry/api";
import {
  getOrCreateOtelTracer,
  registerTracerProvider,
} from "../../../src/extra/observability/otel.js";
import { MISTRAL_SDK_TELEMETRY_ENV } from "../../../src/extra/observability/telemetry.js";
import {
  TracingHook,
  type TracingContext,
  TRACING_TRACER_KEY,
} from "../../../src/hooks/tracing.js";
import { createMockTracer } from "./helpers.js";

function createMockTracerProvider(tracer: Tracer): TracerProvider {
  return { getTracer: () => tracer } as TracerProvider;
}

function createChatRequest(): Request {
  return new Request("https://api.mistral.ai/v1/chat/completions", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "mistral-large",
      messages: [{ role: "user", content: "Hello" }],
    }),
  });
}

function createHookContext(): TracingContext {
  return {
    operationID: "chat_completion_v1",
    baseURL: "https://api.mistral.ai",
    oAuth2Scopes: null,
    retryConfig: { strategy: "none" as const },
    resolvedSecurity: null,
    options: {},
  } as TracingContext;
}

const ORIGINAL_MISTRAL_SDK_TELEMETRY = process.env[MISTRAL_SDK_TELEMETRY_ENV];

beforeEach(() => {
  delete process.env[MISTRAL_SDK_TELEMETRY_ENV];
});

afterEach(() => {
  registerTracerProvider();
  if (ORIGINAL_MISTRAL_SDK_TELEMETRY === undefined) {
    delete process.env[MISTRAL_SDK_TELEMETRY_ENV];
  } else {
    process.env[MISTRAL_SDK_TELEMETRY_ENV] = ORIGINAL_MISTRAL_SDK_TELEMETRY;
  }
});

describe("getOrCreateOtelTracer", () => {
  test("uses global provider when no provider is registered", () => {
    const globalTracer = createMockTracer("global");
    const spy = vi
      .spyOn(trace, "getTracerProvider")
      .mockReturnValue(createMockTracerProvider(globalTracer));

    const tracer = getOrCreateOtelTracer();

    expect(spy).toHaveBeenCalled();
    expect((tracer as any).label).toBe("global");
    spy.mockRestore();
  });

  test("uses registered provider before the global provider", () => {
    const registeredTracer = createMockTracer("registered");
    const spy = vi.spyOn(trace, "getTracerProvider");

    registerTracerProvider(createMockTracerProvider(registeredTracer));
    const tracer = getOrCreateOtelTracer();

    expect(spy).not.toHaveBeenCalled();
    expect((tracer as any).label).toBe("registered");
    spy.mockRestore();
  });

  test("can bypass registered provider for explicit global mode", () => {
    const registeredTracer = createMockTracer("registered");
    const globalTracer = createMockTracer("global");
    registerTracerProvider(createMockTracerProvider(registeredTracer));
    const spy = vi
      .spyOn(trace, "getTracerProvider")
      .mockReturnValue(createMockTracerProvider(globalTracer));

    const tracer = getOrCreateOtelTracer(undefined, { useRegisteredProvider: false });

    expect(spy).toHaveBeenCalled();
    expect((tracer as any).label).toBe("global");
    spy.mockRestore();
  });
});

describe("TracingHook with registered TracerProvider", () => {
  test("beforeRequest uses registered tracerProvider", async () => {
    const hook = new TracingHook();
    const registeredTracer = createMockTracer("registered");
    const ctx = createHookContext();

    registerTracerProvider(createMockTracerProvider(registeredTracer));

    await hook.beforeRequest(ctx, createChatRequest());

    expect((ctx[TRACING_TRACER_KEY] as any).label).toBe("registered");
  });

  test("beforeRequest uses global provider when env telemetry opts in", async () => {
    const hook = new TracingHook();
    const globalTracer = createMockTracer("global");
    const spy = vi
      .spyOn(trace, "getTracerProvider")
      .mockReturnValue(createMockTracerProvider(globalTracer));

    process.env[MISTRAL_SDK_TELEMETRY_ENV] = "global";
    const ctx = createHookContext();
    await hook.beforeRequest(ctx, createChatRequest());

    expect(spy).toHaveBeenCalled();
    expect((ctx[TRACING_TRACER_KEY] as any).label).toBe("global");
    spy.mockRestore();
  });

  test("beforeRequest global telemetry bypasses registered provider", async () => {
    const hook = new TracingHook();
    const registeredTracer = createMockTracer("registered");
    const globalTracer = createMockTracer("global");
    registerTracerProvider(createMockTracerProvider(registeredTracer));
    const spy = vi
      .spyOn(trace, "getTracerProvider")
      .mockReturnValue(createMockTracerProvider(globalTracer));

    process.env[MISTRAL_SDK_TELEMETRY_ENV] = "global";
    const ctx = createHookContext();
    await hook.beforeRequest(ctx, createChatRequest());

    expect(spy).toHaveBeenCalled();
    expect((ctx[TRACING_TRACER_KEY] as any).label).toBe("global");
    spy.mockRestore();
  });

  test("beforeRequest does not use global provider without Mistral telemetry", async () => {
    const hook = new TracingHook();
    const globalTracer = createMockTracer("global");
    const spy = vi
      .spyOn(trace, "getTracerProvider")
      .mockReturnValue(createMockTracerProvider(globalTracer));

    const ctx = createHookContext();
    await hook.beforeRequest(ctx, createChatRequest());

    expect(spy).not.toHaveBeenCalled();
    expect(ctx[TRACING_TRACER_KEY]).toBeUndefined();
    spy.mockRestore();
  });
});
