import { trace, type Span, type TracerProvider } from "@opentelemetry/api";

import { Mistral } from "../../../src/index.js";
import {
  configureTelemetry,
  configureTelemetryForHook,
  MISTRAL_OTLP_TRACES_ENDPOINT_ENV,
  MISTRAL_SDK_TELEMETRY_ENV,
  MISTRAL_TELEMETRY_ENDPOINT,
  setTracerProvider,
  TelemetryConfigurationError,
  _createTelemetryTracerProvider,
} from "../../../src/extra/observability/telemetry.js";
import { TracingHook } from "../../../src/hooks/tracing.js";
import type { HookContext } from "../../../src/hooks/types.js";

type FakeProvider = TracerProvider & {
  shutdownCalled: boolean;
  shutdown: () => void;
};

function createSpan(): Span {
  const span = {
    spanContext: () => ({ traceId: "", spanId: "", traceFlags: 0 }),
    setAttribute: () => span,
    setAttributes: () => span,
    addEvent: () => span,
    addLink: () => span,
    addLinks: () => span,
    setStatus: () => span,
    updateName: () => span,
    end: () => undefined,
    isRecording: () => false,
    recordException: () => undefined,
  } as Span;
  return span;
}

function createProvider(): FakeProvider {
  const provider = {
    shutdownCalled: false,
    getTracer: () => ({
      startSpan: () => createSpan(),
      startActiveSpan: () => undefined as never,
    }),
    shutdown() {
      provider.shutdownCalled = true;
    },
  } as FakeProvider;
  return provider;
}

function createTelemetryModuleLoader(exporterInstances: Array<{ config: unknown }>) {
  return vi.fn(async (specifier: string) => {
    if (specifier === "@opentelemetry/sdk-trace-base") {
      return {
        BasicTracerProvider: class {
          spanProcessors: unknown[] = [];

          constructor(public config: unknown) {}

          addSpanProcessor(processor: unknown) {
            this.spanProcessors.push(processor);
          }

          getTracer = vi.fn();
          shutdown = vi.fn();
        },
        BatchSpanProcessor: class {
          constructor(public exporter: unknown) {}
        },
      };
    }
    if (specifier === "@opentelemetry/exporter-trace-otlp-http") {
      return {
        OTLPTraceExporter: class {
          constructor(public config: unknown) {
            exporterInstances.push(this);
          }
        },
      };
    }
    if (specifier === "@opentelemetry/resources") {
      return {
        resourceFromAttributes: (attributes: Record<string, string>) => ({ attributes }),
      };
    }
    throw new Error(`Unexpected module ${specifier}`);
  });
}

function createContext(
  options: HookContext["options"] = { apiKey: "test-key" },
): HookContext {
  return {
    operationID: "chat_completion_v1",
    baseURL: "https://api.mistral.ai",
    oAuth2Scopes: null,
    retryConfig: { strategy: "none" },
    resolvedSecurity: null,
    options,
  } as HookContext;
}

function createClient(apiKey: string | undefined = "test-key"): Mistral {
  return new Mistral(apiKey === undefined ? {} : { apiKey });
}

function getTestTracingHook(client: Mistral): TracingHook {
  return client._options.hooks!.beforeRequestHooks
    .find((candidate: unknown) => candidate instanceof TracingHook) as TracingHook;
}

async function withEnv<T>(
  env: Record<string, string | undefined>,
  fn: () => T | Promise<T>,
): Promise<T> {
  const previous: Record<string, string | undefined> = {};
  for (const key of Object.keys(env)) {
    previous[key] = process.env[key];
  }

  try {
    for (const [key, value] of Object.entries(env)) {
      if (value === undefined) {
        delete process.env[key];
      } else {
        process.env[key] = value;
      }
    }
    return await fn();
  } finally {
    for (const [key, value] of Object.entries(previous)) {
      if (value === undefined) {
        delete process.env[key];
      } else {
        process.env[key] = value;
      }
    }
  }
}

describe("configureTelemetryForHook", () => {
  test("defaults to disabled when Mistral telemetry env is absent", async () => {
    await withEnv({ [MISTRAL_SDK_TELEMETRY_ENV]: undefined }, async () => {
      const hook = new TracingHook();
      const createTelemetryTracerProvider = vi.fn(async () => createProvider());

      const configured = await configureTelemetryForHook(hook, createContext(), {
        createTelemetryTracerProvider,
      });

      expect(configured).toBe(false);
      expect(createTelemetryTracerProvider).not.toHaveBeenCalled();
      expect(hook.tracerProvider).toBeUndefined();
      expect(hook._telemetryAutoDisabled).toBe(true);
    });
  });

  test("MISTRAL_SDK_TELEMETRY=dedicated attaches an SDK-owned provider", async () => {
    await withEnv({ [MISTRAL_SDK_TELEMETRY_ENV]: "dedicated" }, async () => {
      const hook = new TracingHook();
      const provider = createProvider();
      const createTelemetryTracerProvider = vi.fn(async () => provider);

      const configured = await configureTelemetryForHook(hook, createContext(), {
        createTelemetryTracerProvider,
      });

      expect(configured).toBe(true);
      expect(createTelemetryTracerProvider).toHaveBeenCalledWith({
        apiKey: "test-key",
        baseURL: "https://api.mistral.ai",
      });
      expect(hook.tracerProvider).toBe(provider);
    });
  });

  test("MISTRAL_SDK_TELEMETRY=false disables telemetry", async () => {
    await withEnv({ [MISTRAL_SDK_TELEMETRY_ENV]: "false" }, async () => {
      const hook = new TracingHook();
      const createTelemetryTracerProvider = vi.fn(async () => createProvider());

      const configured = await configureTelemetryForHook(hook, createContext(), {
        createTelemetryTracerProvider,
      });

      expect(configured).toBe(false);
      expect(createTelemetryTracerProvider).not.toHaveBeenCalled();
      expect(hook.tracerProvider).toBeUndefined();
    });
  });

  test("MISTRAL_SDK_TELEMETRY=global uses global provider mode", async () => {
    await withEnv({ [MISTRAL_SDK_TELEMETRY_ENV]: "global" }, async () => {
      const hook = new TracingHook();
      const createTelemetryTracerProvider = vi.fn(async () => createProvider());

      const configured = await configureTelemetryForHook(hook, createContext(), {
        createTelemetryTracerProvider,
      });

      expect(configured).toBe(true);
      expect(createTelemetryTracerProvider).not.toHaveBeenCalled();
      expect(hook.tracerProvider).toBeUndefined();
      expect(hook._telemetryUseGlobalProvider).toBe(true);
    });
  });

  test("MISTRAL_SDK_TELEMETRY=dedicated creates an SDK-owned provider even when a global provider exists", async () => {
    await withEnv({ [MISTRAL_SDK_TELEMETRY_ENV]: "dedicated" }, async () => {
      const globalProviderSpy = vi
        .spyOn(trace, "getTracerProvider")
        .mockReturnValue(createProvider());
      const hook = new TracingHook();
      const provider = createProvider();
      const createTelemetryTracerProvider = vi.fn(async () => provider);

      try {
        const configured = await configureTelemetryForHook(hook, createContext(), {
          createTelemetryTracerProvider,
        });

        expect(configured).toBe(true);
        expect(globalProviderSpy).not.toHaveBeenCalled();
        expect(createTelemetryTracerProvider).toHaveBeenCalledTimes(1);
        expect(hook.tracerProvider).toBe(provider);
        expect(hook._telemetryUseGlobalProvider).toBe(false);
      } finally {
        globalProviderSpy.mockRestore();
      }
    });
  });

  test("shares in-flight SDK-owned provider initialization", async () => {
    await withEnv({ [MISTRAL_SDK_TELEMETRY_ENV]: "dedicated" }, async () => {
      const hook = new TracingHook();
      const provider = createProvider();
      let resolveProvider!: () => void;
      const providerReady = new Promise<void>((resolve) => {
        resolveProvider = resolve;
      });
      const createTelemetryTracerProvider = vi.fn(async () => {
        await providerReady;
        return provider;
      });

      const first = configureTelemetryForHook(hook, createContext(), {
        createTelemetryTracerProvider,
      });
      const second = configureTelemetryForHook(hook, createContext(), {
        createTelemetryTracerProvider,
      });

      await Promise.resolve();
      await Promise.resolve();
      expect(createTelemetryTracerProvider).toHaveBeenCalledTimes(1);

      resolveProvider();

      await expect(Promise.all([first, second])).resolves.toEqual([true, true]);
      expect(createTelemetryTracerProvider).toHaveBeenCalledTimes(1);
      expect(hook.tracerProvider).toBe(provider);
      expect(hook._telemetryInitialization).toBeUndefined();
      expect(provider.shutdownCalled).toBe(false);
    });
  });

  test("invalid Mistral telemetry env raises a configuration error", async () => {
    await withEnv({ [MISTRAL_SDK_TELEMETRY_ENV]: "true" }, async () => {
      const hook = new TracingHook();

      await expect(configureTelemetryForHook(hook, createContext())).rejects.toThrow(
        TelemetryConfigurationError,
      );
    });
  });
});

describe("configureTelemetry", () => {
  test("explicit global mode clears auto provider", async () => {
    const client = createClient();
    const hook = getTestTracingHook(client);
    const provider = createProvider();
    hook.tracerProvider = provider;
    hook._autoTelemetryProvider = provider;

    const configured = await configureTelemetry(client, "global");

    expect(configured).toBe(true);
    expect(provider.shutdownCalled).toBe(true);
    expect(hook.tracerProvider).toBeUndefined();
    expect(hook._telemetryUseGlobalProvider).toBe(true);
  });

  test("custom provider replaces auto provider without shutting down the custom provider", async () => {
    const client = createClient();
    const hook = getTestTracingHook(client);
    const autoProvider = createProvider();
    const customProvider = createProvider();
    hook.tracerProvider = autoProvider;
    hook._autoTelemetryProvider = autoProvider;

    const configured = await configureTelemetry(client, customProvider);

    expect(configured).toBe(true);
    expect(autoProvider.shutdownCalled).toBe(true);
    expect(customProvider.shutdownCalled).toBe(false);
    expect(hook.tracerProvider).toBe(customProvider);
  });

  test("setTracerProvider is a compatibility wrapper", async () => {
    const client = createClient();
    const hook = getTestTracingHook(client);
    const provider = createProvider();

    await setTracerProvider(client, provider);

    expect(hook.tracerProvider).toBe(provider);
  });
});

describe("_createTelemetryTracerProvider", () => {
  test("uses the Mistral endpoint and bearer auth", async () => {
    const exporterInstances: Array<{ config: unknown }> = [];
    const moduleLoader = createTelemetryModuleLoader(exporterInstances);

    await _createTelemetryTracerProvider({
      apiKey: "test-key",
      moduleLoader,
    });

    expect(exporterInstances).toHaveLength(1);
    expect(exporterInstances[0]?.config).toEqual({
      url: MISTRAL_TELEMETRY_ENDPOINT,
      headers: { Authorization: "Bearer test-key" },
    });
  });

  test("uses the configured base URL with the telemetry traces path", async () => {
    const exporterInstances: Array<{ config: unknown }> = [];
    const moduleLoader = createTelemetryModuleLoader(exporterInstances);

    await _createTelemetryTracerProvider({
      apiKey: "test-key",
      baseURL: "http://mistral.test/api",
      moduleLoader,
    });

    expect(exporterInstances).toHaveLength(1);
    expect(exporterInstances[0]?.config).toEqual({
      url: "http://mistral.test/telemetry/v1/traces",
      headers: { Authorization: "Bearer test-key" },
    });
  });

  test("MISTRAL_OTLP_TRACES_ENDPOINT overrides the configured base URL endpoint", async () => {
    await withEnv(
      { [MISTRAL_OTLP_TRACES_ENDPOINT_ENV]: "http://collector:4318/v1/traces" },
      async () => {
        const exporterInstances: Array<{ config: unknown }> = [];
        const moduleLoader = createTelemetryModuleLoader(exporterInstances);

        await _createTelemetryTracerProvider({
          apiKey: "test-key",
          baseURL: "http://mistral.test",
          moduleLoader,
        });

        expect(exporterInstances).toHaveLength(1);
        expect(exporterInstances[0]?.config).toEqual({
          url: "http://collector:4318/v1/traces",
          headers: { Authorization: "Bearer test-key" },
        });
      },
    );
  });
});
