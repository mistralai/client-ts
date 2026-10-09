import {
  context as contextApi,
  type Context,
  type ContextManager,
  isSpanContextValid,
  propagation,
  ROOT_CONTEXT,
  type TextMapPropagator,
  trace,
  TraceFlags,
} from "@opentelemetry/api";
import { afterEach, describe, expect, it } from "vitest";

import { TraceparentInjectionHook } from "../../src/hooks/traceparent.js";
import type { BeforeRequestContext } from "../../src/hooks/types.js";
import { HTTPClient, Mistral } from "../../src/index.js";

const TRACEPARENT_RE = /^00-[0-9a-f]{32}-[0-9a-f]{16}-01$/;

const EXECUTE_OP_ID =
  "execute_workflow_v1_workflows__workflow_identifier__execute_post";
const EXECUTE_REG_OP_ID =
  "execute_workflow_registration_v1_workflows_registrations__workflow_registration_id__execute_post";
const OTHER_OP_ID =
  "list_executions_v1_workflows__workflow_identifier__executions_get";

const TRACE_ID = "0af7651916cd43dd8448eb211c80319c";
const SPAN_ID = "b7ad6b7169203331";

function hookCtx(operationID = EXECUTE_OP_ID): BeforeRequestContext {
  return { operationID } as BeforeRequestContext;
}

function request(
  path: string,
  options: { body?: unknown; rawBody?: string; traceparent?: string } = {},
): Request {
  const headers = new Headers();
  if (options.traceparent) headers.set("traceparent", options.traceparent);
  let body = options.rawBody;
  if (options.body !== undefined) {
    headers.set("content-type", "application/json");
    body = JSON.stringify(options.body);
  }
  return new Request(`https://api.mistral.ai${path}`, {
    method: "POST",
    headers,
    ...(body !== undefined && { body }),
  });
}

/** Keeps the context of `with` active until its promise settles. */
class TestContextManager implements ContextManager {
  #active: Context = ROOT_CONTEXT;
  active(): Context {
    return this.#active;
  }
  with<A extends unknown[], F extends (...args: A) => ReturnType<F>>(
    context: Context,
    fn: F,
    thisArg?: ThisParameterType<F>,
    ...args: A
  ): ReturnType<F> {
    const previous = this.#active;
    this.#active = context;
    const result = fn.call(thisArg, ...args);
    if (result instanceof Promise) {
      return result.finally(() => {
        this.#active = previous;
      }) as ReturnType<F>;
    }
    this.#active = previous;
    return result;
  }
  bind<T>(_context: Context, target: T): T {
    return target;
  }
  enable(): this {
    return this;
  }
  disable(): this {
    this.#active = ROOT_CONTEXT;
    return this;
  }
}

/** The W3C trace context propagator, for injection only. */
const traceContextPropagator: TextMapPropagator = {
  inject(context, carrier, setter) {
    const spanContext = trace.getSpanContext(context);
    if (!spanContext || !isSpanContextValid(spanContext)) return;
    const flags = `0${spanContext.traceFlags & TraceFlags.SAMPLED}`;
    setter.set(
      carrier,
      "traceparent",
      `00-${spanContext.traceId}-${spanContext.spanId}-${flags}`,
    );
  },
  extract: (context) => context,
  fields: () => ["traceparent"],
};

function withSpan<T>(traceFlags: TraceFlags, fn: () => Promise<T>): Promise<T> {
  contextApi.setGlobalContextManager(new TestContextManager());
  propagation.setGlobalPropagator(traceContextPropagator);
  const span = trace.wrapSpanContext({
    traceId: TRACE_ID,
    spanId: SPAN_ID,
    traceFlags,
  });
  return contextApi.with(trace.setSpan(ROOT_CONTEXT, span), fn);
}

afterEach(() => {
  contextApi.disable();
  propagation.disable();
});

describe("TraceparentInjectionHook", () => {
  const hook = new TraceparentInjectionHook();

  describe("non-execute operations", () => {
    it("leaves the request unchanged", async () => {
      const req = request("/v1/workflows/my-wf/executions", {
        body: { input: {} },
      });

      const result = await hook.beforeRequest(hookCtx(OTHER_OP_ID), req);

      expect(result).toBe(req);
      expect(result.headers.has("traceparent")).toBe(false);
      expect(await result.json()).not.toHaveProperty("traceparent");
    });
  });

  describe("header", () => {
    it.each([
      [EXECUTE_OP_ID, "/v1/workflows/my-wf/execute"],
      [EXECUTE_REG_OP_ID, "/v1/workflows/registrations/reg-1/execute"],
    ])("sends a sampled traceparent on %s", async (operationID, path) => {
      const result = await hook.beforeRequest(
        hookCtx(operationID),
        request(path),
      );

      expect(result.headers.get("traceparent")).toMatch(TRACEPARENT_RE);
    });

    it("keeps an explicit traceparent", async () => {
      const explicit = `00-${TRACE_ID}-${SPAN_ID}-01`;

      const result = await hook.beforeRequest(
        hookCtx(),
        request("/v1/workflows/my-wf/execute", { traceparent: explicit }),
      );

      expect(result.headers.get("traceparent")).toBe(explicit);
    });

    it("is still sent with a body that isn't JSON", async () => {
      const result = await hook.beforeRequest(
        hookCtx(),
        request("/v1/workflows/my-wf/execute", { rawBody: "not json" }),
      );

      expect(result.headers.get("traceparent")).toMatch(TRACEPARENT_RE);
      expect(await result.text()).toBe("not json");
    });
  });

  describe("body", () => {
    it("carries the same traceparent as the header", async () => {
      const result = await hook.beforeRequest(
        hookCtx(),
        request("/v1/workflows/my-wf/execute", { body: { input: { a: 1 } } }),
      );

      const body = await result.json();
      expect(body.traceparent).toMatch(TRACEPARENT_RE);
      expect(body.input).toEqual({ a: 1 });
      expect(body.traceparent).toBe(result.headers.get("traceparent"));
    });

    it("is set whatever the content type's case", async () => {
      const req = request("/v1/workflows/my-wf/execute", { body: { input: {} } });
      req.headers.set("content-type", "Application/JSON");

      const result = await hook.beforeRequest(hookCtx(), req);

      expect((await result.json()).traceparent).toMatch(TRACEPARENT_RE);
    });

    it("keeps an explicit traceparent, also used for the header", async () => {
      const explicit = `00-${TRACE_ID}-${SPAN_ID}-01`;

      const result = await hook.beforeRequest(
        hookCtx(),
        request("/v1/workflows/my-wf/execute", {
          body: { input: {}, traceparent: explicit },
        }),
      );

      expect((await result.json()).traceparent).toBe(explicit);
      expect(result.headers.get("traceparent")).toBe(explicit);
    });

    it("mirrors an explicit header", async () => {
      const explicit = `00-${TRACE_ID}-${SPAN_ID}-01`;

      const result = await hook.beforeRequest(
        hookCtx(),
        request("/v1/workflows/my-wf/execute", {
          body: { input: {} },
          traceparent: explicit,
        }),
      );

      expect((await result.json()).traceparent).toBe(explicit);
    });
  });

  describe("OpenTelemetry context", () => {
    it("propagates a sampled active span", async () => {
      const result = await withSpan(
        TraceFlags.SAMPLED,
        () => hook.beforeRequest(hookCtx(), request("/v1/workflows/my-wf/execute")),
      );

      expect(result.headers.get("traceparent")).toBe(
        `00-${TRACE_ID}-${SPAN_ID}-01`,
      );
    });

    it("starts a sampled trace when the active span is unsampled", async () => {
      const result = await withSpan(
        TraceFlags.NONE,
        () => hook.beforeRequest(hookCtx(), request("/v1/workflows/my-wf/execute")),
      );

      const traceparent = result.headers.get("traceparent");
      expect(traceparent).toMatch(TRACEPARENT_RE);
      expect(traceparent).not.toContain(TRACE_ID);
    });
  });

  it("keeps the same traceparent when a call is retried", async () => {
    const ctx = hookCtx();
    const path = "/v1/workflows/my-wf/execute";

    const first = await hook.beforeRequest(ctx, request(path, { body: {} }));
    const retry = await hook.beforeRequest(ctx, request(path, { body: {} }));
    const other = await hook.beforeRequest(hookCtx(), request(path, { body: {} }));

    const traceparent = (await first.json()).traceparent;
    expect((await retry.json()).traceparent).toBe(traceparent);
    expect(retry.headers.get("traceparent")).toBe(traceparent);
    expect((await other.json()).traceparent).not.toBe(traceparent);
  });
});

describe("SDK execute requests", () => {
  it("carry a sampled traceparent, kept across retries", async () => {
    const requests: Request[] = [];
    const client = new Mistral({
      apiKey: "test-key",
      serverURL: "http://localhost",
      retryConfig: {
        strategy: "backoff",
        backoff: {
          initialInterval: 1,
          maxInterval: 1,
          exponent: 1,
          maxElapsedTime: 1_000,
        },
      },
      httpClient: new HTTPClient({
        async fetcher(input) {
          requests.push((input as Request).clone());
          if (requests.length === 1) return new Response(null, { status: 503 });
          return Response.json({
            workflow_name: "my-workflow",
            execution_id: "exec-1",
            result: null,
          });
        },
      }),
    });

    await client.workflows.executeWorkflow({
      workflowIdentifier: "my-workflow",
      workflowExecutionRequest: { input: { query: "hi" } },
    });

    expect(requests).toHaveLength(2);
    const [first, retry] = await Promise.all(requests.map((r) => r.json()));
    expect(first.traceparent).toMatch(TRACEPARENT_RE);
    expect(retry.traceparent).toBe(first.traceparent);
    expect(requests[1]!.headers.get("traceparent")).toBe(first.traceparent);
  });
});
