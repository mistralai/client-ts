import type { Context, Span, Tracer, TracerProvider } from "@opentelemetry/api";
import { getRegisteredTracerProvider } from "../extra/observability/provider.js";
import type { ManagedTelemetryTracerProvider } from "../extra/observability/telemetry.js";
import { HTTPClient } from "../lib/http.js";
import {
  AfterErrorContext,
  AfterErrorHook,
  AfterSuccessContext,
  AfterSuccessHook,
  BeforeRequestContext,
  BeforeRequestHook,
  HookContext,
  SDKInitHook,
  SDKInitOptions,
} from "./types.js";

type ObservabilityModule = typeof import("../extra/observability/otel.js");
type TelemetryModule = typeof import("../extra/observability/telemetry.js");

let observabilityModule: ObservabilityModule | null | undefined;
let telemetryModule: TelemetryModule | null | undefined;

async function getObservabilityModule(): Promise<ObservabilityModule | null> {
  if (observabilityModule !== undefined) {
    return observabilityModule;
  }

  try {
    observabilityModule = await import("../extra/observability/otel.js");
  } catch {
    // OpenTelemetry is an optional peer; without it, tracing is a no-op.
    observabilityModule = null;
  }

  return observabilityModule;
}

async function getTelemetryModule(): Promise<TelemetryModule | null> {
  if (telemetryModule !== undefined) {
    return telemetryModule;
  }

  try {
    telemetryModule = await import("../extra/observability/telemetry.js");
  } catch {
    // OpenTelemetry is an optional peer; without it, telemetry is a no-op.
    telemetryModule = null;
  }

  return telemetryModule;
}

export const TRACING_SPAN_KEY = "_tracingSpan";
export const TRACING_BODY_KEY = "_tracingBody";
export const TRACING_TRACER_KEY = "_tracingTracer";

export type TracingContext = HookContext & {
  [TRACING_SPAN_KEY]?: Span;
  [TRACING_BODY_KEY]?: string | null;
  [TRACING_TRACER_KEY]?: Tracer;
};

function clearTracingContext(ctx: TracingContext): void {
  delete ctx[TRACING_TRACER_KEY];
  delete ctx[TRACING_SPAN_KEY];
  delete ctx[TRACING_BODY_KEY];
}

// Runs the actual HTTP send inside the GenAI span context so lower-level
// fetch/http auto-instrumentation parents its spans correctly.
class TracingHTTPClient extends HTTPClient {
  constructor(
    private readonly wrappedClient: HTTPClient,
    private readonly requestContexts: WeakMap<Request, Context>
  ) {
    super();
  }

  override async request(request: Request): Promise<Response> {
    const activeContext = this.requestContexts.get(request);
    if (!activeContext) {
      return this.wrappedClient.request(request);
    }

    let observability: ObservabilityModule | null = null;
    try {
      observability = await getObservabilityModule();
      if (!observability) {
        return await this.wrappedClient.request(request);
      }

      return await observability.runWithContext(
        activeContext,
        () => this.wrappedClient.request(request)
      );
    } catch (error) {
      if (observability) {
        await observability.recordRequestError(activeContext, error);
      }
      throw error;
    } finally {
      this.requestContexts.delete(request);
    }
  }

  override clone(): HTTPClient {
    return new TracingHTTPClient(
      this.wrappedClient.clone(),
      this.requestContexts
    );
  }
}

export class TracingHook implements SDKInitHook, BeforeRequestHook, AfterSuccessHook, AfterErrorHook {
  readonly #requestContexts = new WeakMap<Request, Context>();
  readonly _mistralTracingHook = true;
  tracerProvider: TracerProvider | undefined = undefined;
  _autoTelemetryProvider: ManagedTelemetryTracerProvider | undefined = undefined;
  _telemetryInitialization: Promise<boolean> | undefined = undefined;
  _telemetryConfigurationVersion = 0;
  _telemetryAutoDisabled = false;
  _telemetryUseGlobalProvider = false;

  sdkInit(opts: SDKInitOptions): SDKInitOptions {
    return {
      ...opts,
      client: new TracingHTTPClient(opts.client, this.#requestContexts),
    };
  }

  async beforeRequest(
    hookCtx: BeforeRequestContext,
    request: Request
  ): Promise<Request> {
    const ctx = hookCtx as TracingContext;
    const observability = await getObservabilityModule();
    if (!observability) {
      return request;
    }

    const telemetry = await getTelemetryModule();
    const telemetryConfigured = telemetry
      ? await telemetry.configureTelemetryForHook(this, hookCtx)
      : false;
    const shouldTrace = telemetryConfigured ||
      this.tracerProvider !== undefined ||
      this._telemetryUseGlobalProvider ||
      getRegisteredTracerProvider() !== undefined;

    if (!shouldTrace) {
      clearTracingContext(ctx);
      return request;
    }

    const tracer = observability.getOrCreateOtelTracer(this.tracerProvider, {
      useRegisteredProvider: !this._telemetryUseGlobalProvider,
    });

    const { request: tracedRequest, span, body } = await observability.getTracedRequestAndSpan(
      tracer,
      hookCtx.operationID,
      request
    );

    ctx[TRACING_TRACER_KEY] = tracer;
    ctx[TRACING_SPAN_KEY] = span;
    ctx[TRACING_BODY_KEY] = body;
    this.#requestContexts.set(tracedRequest, observability.getSpanContext(span));

    return tracedRequest;
  }

  async afterSuccess(
    hookCtx: AfterSuccessContext,
    response: Response
  ): Promise<Response> {
    const ctx = hookCtx as TracingContext;
    const span = ctx[TRACING_SPAN_KEY];
    const tracer = ctx[TRACING_TRACER_KEY];

    if (!span || !tracer) {
      return response;
    }

    const observability = await getObservabilityModule();
    if (!observability) {
      return response;
    }

    return observability.getTracedResponse(
      tracer,
      span,
      hookCtx.operationID,
      response
    );
  }

  async afterError(
    hookCtx: AfterErrorContext,
    response: Response | null,
    error: unknown
  ): Promise<{ response: Response | null; error: unknown }> {
    const ctx = hookCtx as TracingContext;
    const span = ctx[TRACING_SPAN_KEY];

    if (!span) {
      return { response, error };
    }

    const observability = await getObservabilityModule();
    if (!observability) {
      return { response, error };
    }

    return observability.getResponseAndError(
      span,
      response,
      error
    );
  }
}
