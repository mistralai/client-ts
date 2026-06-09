import type { Context, Span, Tracer } from "@opentelemetry/api";
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

let observabilityModule: ObservabilityModule | null | undefined;

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

export const TRACING_SPAN_KEY = "_tracingSpan";
export const TRACING_BODY_KEY = "_tracingBody";
export const TRACING_TRACER_KEY = "_tracingTracer";

export type TracingContext = HookContext & {
  [TRACING_SPAN_KEY]?: Span;
  [TRACING_BODY_KEY]?: string | null;
  [TRACING_TRACER_KEY]?: Tracer;
};

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

    const tracer = observability.getOrCreateOtelTracer();

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
