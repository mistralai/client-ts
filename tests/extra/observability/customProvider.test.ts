import type { Tracer, TracerProvider } from "@opentelemetry/api";
import { trace } from "@opentelemetry/api";
import {
  getOrCreateOtelTracer,
  registerTracerProvider,
} from "../../../src/extra/observability/otel.js";
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

afterEach(() => {
  registerTracerProvider();
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

  test("beforeRequest falls back to global provider when no provider is registered", async () => {
    const hook = new TracingHook();
    const globalTracer = createMockTracer("global");
    const spy = vi
      .spyOn(trace, "getTracerProvider")
      .mockReturnValue(createMockTracerProvider(globalTracer));

    const ctx = createHookContext();
    await hook.beforeRequest(ctx, createChatRequest());

    expect(spy).toHaveBeenCalled();
    expect((ctx[TRACING_TRACER_KEY] as any).label).toBe("global");
    spy.mockRestore();
  });
});
