/**
 * Tests for OTEL span enrichment helpers.
 */

import {
  context as contextApi,
  ROOT_CONTEXT,
  SpanStatusCode,
  trace,
  type Context,
  type ContextManager,
  type Span,
  type Tracer,
  type TracerProvider,
} from "@opentelemetry/api";
import { HTTPClient, Mistral } from "../../../src/index.js";
import { TracingHook, TracingContext, TRACING_SPAN_KEY, TRACING_TRACER_KEY } from "../../../src/hooks/tracing.js";
import {
  enrichSpanFromRequest,
  enrichSpanFromResponse,
  getTracedRequestAndSpan,
  getTracedResponse,
  MistralAIAttributes,
  registerTracerProvider,
  semConvAttributes,
} from "../../../src/extra/observability/otel.js";
import { createMockSpan, createMockTracer } from "./helpers.js";

class TestContextManager implements ContextManager {
  #activeContext: Context = ROOT_CONTEXT;

  active(): Context {
    return this.#activeContext;
  }

  with<A extends unknown[], F extends (...args: A) => ReturnType<F>>(
    context: Context,
    fn: F,
    thisArg?: ThisParameterType<F>,
    ...args: A
  ): ReturnType<F> {
    const previousContext = this.#activeContext;
    this.#activeContext = context;

    const restore = () => {
      this.#activeContext = previousContext;
    };

    try {
      const result = fn.call(thisArg, ...args);
      if (result instanceof Promise) {
        return result.finally(restore) as ReturnType<F>;
      }
      restore();
      return result;
    } catch (error) {
      restore();
      throw error;
    }
  }

  bind<T>(_: Context, target: T): T {
    return target;
  }

  enable(): this {
    return this;
  }

  disable(): this {
    this.#activeContext = ROOT_CONTEXT;
    return this;
  }
}

describe("enrichSpanFromRequest", () => {
  test("chat completion with model and messages", () => {
    const span = createMockSpan();
    const body = JSON.stringify({
      model: "mistral-large",
      messages: [{ role: "user", content: "Hi" }],
      temperature: 0.7,
    });
    enrichSpanFromRequest(span, "chat_completion_v1", new URL("https://api.mistral.ai/v1/chat"), "POST", "api.mistral.ai", body);

    expect(span.name).toBe("chat mistral-large");
    expect(span.attributes[semConvAttributes.ATTR_GEN_AI_OPERATION_NAME]).toBe(semConvAttributes.GEN_AI_OPERATION_NAME_VALUE_CHAT);
    expect(span.attributes[semConvAttributes.ATTR_GEN_AI_REQUEST_MODEL]).toBe("mistral-large");
    expect(span.attributes[semConvAttributes.ATTR_GEN_AI_REQUEST_TEMPERATURE]).toBe(0.7);
    expect(span.attributes[semConvAttributes.ATTR_HTTP_REQUEST_METHOD]).toBe("POST");
    expect(span.attributes[semConvAttributes.ATTR_SERVER_PORT]).toBe(443);
  });

  test("conversations API with string inputs", () => {
    const span = createMockSpan();
    const body = JSON.stringify({ model: "mistral-large", inputs: "Hello" });
    enrichSpanFromRequest(span, "conversations_start_v1", new URL("https://api.mistral.ai/v1/conversations/start"), "POST", "api.mistral.ai", body);

    expect(span.attributes[semConvAttributes.ATTR_GEN_AI_OPERATION_NAME]).toBe(semConvAttributes.GEN_AI_OPERATION_NAME_VALUE_INVOKE_AGENT);
    const msgs = JSON.parse(span.attributes[semConvAttributes.ATTR_GEN_AI_INPUT_MESSAGES] as string);
    expect(msgs[0].role).toBe("user");
  });

  test("embeddings operation", () => {
    const span = createMockSpan();
    const body = JSON.stringify({ model: "mistral-embed", input: ["text"] });
    enrichSpanFromRequest(span, "embeddings_v1", new URL("https://api.mistral.ai/v1/embeddings"), "POST", "api.mistral.ai", body);

    expect(span.attributes[semConvAttributes.ATTR_GEN_AI_OPERATION_NAME]).toBe(semConvAttributes.GEN_AI_OPERATION_NAME_VALUE_EMBEDDINGS);
  });

  test("non-GenAI operation sets only HTTP attributes", () => {
    const span = createMockSpan();
    enrichSpanFromRequest(span, "list_models", new URL("https://api.mistral.ai/v1/models"), "GET", "api.mistral.ai", null);

    expect(span.attributes[semConvAttributes.ATTR_HTTP_REQUEST_METHOD]).toBe("GET");
    expect(span.attributes[semConvAttributes.ATTR_GEN_AI_OPERATION_NAME]).toBeUndefined();
  });
});

describe("enrichSpanFromResponse", () => {
  test("chat completion response", () => {
    const span = createMockSpan();
    const response = {
      id: "cmpl-1",
      model: "mistral-large",
      choices: [{ message: { role: "assistant", content: "Hi!" }, finish_reason: "stop" }],
      usage: { prompt_tokens: 10, completion_tokens: 5, total_tokens: 15 },
    };
    enrichSpanFromResponse(createMockTracer(), span, "chat_completion_v1", response);

    expect(span.attributes[semConvAttributes.ATTR_GEN_AI_RESPONSE_ID]).toBe("cmpl-1");
    expect(span.attributes[semConvAttributes.ATTR_GEN_AI_RESPONSE_FINISH_REASONS]).toEqual(["stop"]);
    expect(span.attributes[semConvAttributes.ATTR_GEN_AI_USAGE_INPUT_TOKENS]).toBe(10);
  });

  test("create agent response", () => {
    const span = createMockSpan();
    const response = { id: "agent-1", name: "MyAgent", model: "mistral-large", instructions: "Be helpful" };
    enrichSpanFromResponse(createMockTracer(), span, "agents_create_v1", response);

    expect(span.attributes[semConvAttributes.ATTR_GEN_AI_AGENT_ID]).toBe("agent-1");
    expect(span.attributes[semConvAttributes.ATTR_GEN_AI_AGENT_NAME]).toBe("MyAgent");
    expect(span.attributes[semConvAttributes.ATTR_GEN_AI_RESPONSE_ID]).toBeUndefined();
  });

  test("conversation response creates child spans for tool executions", () => {
    const span = createMockSpan();
    const tracer = createMockTracer();
    const response = {
      conversation_id: "conv-1",
      outputs: [
        { type: "tool.execution", name: "search", created_at: "2024-01-01T00:00:00Z", completed_at: "2024-01-01T00:00:01Z" },
        { type: "message.output", model: "mistral-large", created_at: "2024-01-01T00:00:01Z", completed_at: "2024-01-01T00:00:02Z" },
      ],
    };
    enrichSpanFromResponse(tracer, span, "conversations_start_v1", response);

    expect(span.attributes[semConvAttributes.ATTR_GEN_AI_CONVERSATION_ID]).toBe("conv-1");
    expect(tracer.spans).toHaveLength(2);
    expect(tracer.spans[0].name).toBe("execute_tool search");
    expect(tracer.spans[1].name).toBe("chat mistral-large");
  });

  test("OCR response", () => {
    const span = createMockSpan();
    const response = { model: "pixtral", usage_info: { pages_processed: 3, doc_size_bytes: 1000 } };
    enrichSpanFromResponse(createMockTracer(), span, "ocr_v1_ocr_post", response);

    expect(span.attributes[MistralAIAttributes.MISTRAL_AI_OCR_USAGE_PAGES_PROCESSED]).toBe(3);
  });
});

describe("TracingHook concurrency", () => {
  test("interleaved requests enrich correct spans", async () => {
    const hook = new TracingHook();

    const createCtx = (operationID: string) => ({
      operationID,
      baseURL: "https://api.mistral.ai",
      oAuth2Scopes: null,
      retryConfig: { strategy: "none" as const },
      resolvedSecurity: null,
      options: {},
    });

    const createResp = (id: string) =>
      new Response(JSON.stringify({
        id,
        model: "test",
        choices: [{ message: { role: "assistant", content: "Hi" }, finish_reason: "stop" }],
      }), { headers: { "Content-Type": "application/json" } });

    const createMockSpanWithEndPromise = (name: string) => {
      let resolveEnd!: () => void;
      const endPromise = new Promise<void>(r => { resolveEnd = r; });
      const span = createMockSpan(name);
      span.end = () => { resolveEnd(); };
      return { span, endPromise };
    };

    const ctxA = createCtx("chat_completion_v1") as TracingContext;
    const ctxB = createCtx("chat_completion_v1") as TracingContext;

    const { span: mockSpanA, endPromise: endA } = createMockSpanWithEndPromise("spanA");
    const { span: mockSpanB, endPromise: endB } = createMockSpanWithEndPromise("spanB");
    const mockTracer = createMockTracer();

    ctxA[TRACING_SPAN_KEY] = mockSpanA;
    ctxB[TRACING_SPAN_KEY] = mockSpanB;
    ctxA[TRACING_TRACER_KEY] = mockTracer;
    ctxB[TRACING_TRACER_KEY] = mockTracer;

    await hook.afterSuccess(ctxA, createResp("resp-A"));
    await hook.afterSuccess(ctxB, createResp("resp-B"));

    await Promise.all([endA, endB]);

    expect(mockSpanA.attributes[semConvAttributes.ATTR_GEN_AI_RESPONSE_ID]).toBe("resp-A");
    expect(mockSpanB.attributes[semConvAttributes.ATTR_GEN_AI_RESPONSE_ID]).toBe("resp-B");
  });
});

describe("SDK HTTP span parenting", () => {
  afterEach(() => {
    contextApi.disable();
    registerTracerProvider();
  });

  test("ends the GenAI span when the HTTP client rejects", async () => {
    const genAiSpan = createMockSpan("chat");
    const tracer = {
      startSpan: () => genAiSpan,
      startActiveSpan: () => undefined as never,
    } as Tracer;
    const tracerProvider: TracerProvider = {
      getTracer: () => tracer,
    };
    registerTracerProvider(tracerProvider);

    const httpClient = new HTTPClient({
      async fetcher() {
        throw new TypeError("fetch failed");
      },
    });
    const client = new Mistral({
      apiKey: "test-api-key",
      httpClient,
    });

    await expect(client.chat.complete({
      model: "mistral-small-latest",
      messages: [{ role: "user", content: "hello" }],
    })).rejects.toThrow("Unable to make request");

    expect(genAiSpan.status).toEqual({
      code: SpanStatusCode.ERROR,
      message: "TypeError: fetch failed",
    });
    expect(genAiSpan.ended).toBe(true);
  });

  test("runs the HTTP send with the GenAI span active", async () => {
    contextApi.disable();
    contextApi.setGlobalContextManager(new TestContextManager());

    const genAiSpan = createMockSpan("chat");
    const tracer = {
      startSpan: () => genAiSpan,
      startActiveSpan: () => undefined as never,
    } as Tracer;
    const tracerProvider: TracerProvider = {
      getTracer: () => tracer,
    };
    registerTracerProvider(tracerProvider);

    let activeSpanDuringFetch: Span | undefined;
    const httpClient = new HTTPClient({
      async fetcher() {
        activeSpanDuringFetch = trace.getSpan(contextApi.active());
        return new Response(JSON.stringify({
          id: "chatcmpl-parenting-test",
          object: "chat.completion",
          created: 1700000000,
          model: "mistral-small-latest",
          choices: [{
            index: 0,
            message: { role: "assistant", content: "ok" },
            finish_reason: "stop",
          }],
          usage: { prompt_tokens: 1, completion_tokens: 1, total_tokens: 2 },
        }), {
          status: 200,
          headers: { "content-type": "application/json" },
        });
      },
    });

    const client = new Mistral({
      apiKey: "test-api-key",
      httpClient,
    });

    await client.chat.complete({
      model: "mistral-small-latest",
      messages: [{ role: "user", content: "hello" }],
    });

    expect(activeSpanDuringFetch).toBe(genAiSpan);
  });
});

describe("TracingHook body and stream handling", () => {
  test("does not read non-GenAI request bodies", async () => {
    const body = new ReadableStream<Uint8Array>({
      pull(controller) {
        controller.enqueue(new Uint8Array([1]));
        controller.close();
      },
    });
    const request = new Request("https://api.mistral.ai/v1/files", {
      method: "POST",
      headers: { "content-type": "multipart/form-data; boundary=test" },
      body,
      duplex: "half",
    } as RequestInit & { duplex: "half" });
    const cloneSpy = vi.spyOn(request, "clone");

    await getTracedRequestAndSpan(
      createMockTracer(),
      "files_api_routes_upload_file",
      request
    );

    expect(cloneSpy).not.toHaveBeenCalled();
  });

  test("does not read non-GenAI response bodies", async () => {
    const body = new ReadableStream<Uint8Array>({
      pull(controller) {
        controller.enqueue(new TextEncoder().encode("download bytes"));
        controller.close();
      },
    });
    const response = new Response(body, {
      headers: { "content-type": "application/octet-stream" },
    });
    const span = createMockSpan();
    const cloneSpy = vi.spyOn(response, "clone");

    const tracedResponse = await getTracedResponse(
      createMockTracer(),
      span,
      "files_api_routes_download_file",
      response
    );

    expect(cloneSpy).not.toHaveBeenCalled();
    expect(span.ended).toBe(true);
    await expect(tracedResponse.text()).resolves.toBe("download bytes");
  });

  test("reads traced SSE responses lazily and cancels upstream", async () => {
    const encoder = new TextEncoder();
    let reads = 0;
    let cancelReason: unknown;
    const body = new ReadableStream<Uint8Array>({
      start(controller) {
        controller.enqueue(encoder.encode(
          'data: {"id":"id-1","model":"m","choices":[{"index":0,"delta":{"content":"hi"},"finish_reason":null}]}\n\n'
        ));
      },
    });
    const response = new Response(body, {
      headers: { "content-type": "text/event-stream" },
    });
    const responseBody = response.body!;
    const upstreamReader = responseBody.getReader();
    vi.spyOn(responseBody, "getReader").mockReturnValue({
      read() {
        reads += 1;
        return upstreamReader.read();
      },
      cancel(reason?: unknown) {
        cancelReason = reason;
        return upstreamReader.cancel(reason);
      },
      releaseLock() {
        return upstreamReader.releaseLock();
      },
      closed: upstreamReader.closed,
    } as ReadableStreamDefaultReader<Uint8Array>);
    const span = createMockSpan();

    const tracedResponse = await getTracedResponse(
      createMockTracer(),
      span,
      "stream_chat",
      response
    );

    expect(reads).toBe(0);

    const reader = tracedResponse.body!.getReader();
    const firstChunk = await reader.read();
    expect(firstChunk.done).toBe(false);
    expect(reads).toBe(1);

    await reader.cancel("stop");
    expect(cancelReason).toBe("stop");
    expect(span.ended).toBe(true);
  });
});

describe("TracingHook error handling", () => {
  test("awaits error response enrichment before returning", async () => {
    const hook = new TracingHook();
    const span = createMockSpan();
    const ctx = {
      operationID: "chat_completion_v1",
      baseURL: "https://api.mistral.ai",
      oAuth2Scopes: null,
      retryConfig: { strategy: "none" as const },
      resolvedSecurity: null,
      options: {},
      [TRACING_SPAN_KEY]: span,
    } as TracingContext;
    const response = new Response(JSON.stringify({
      object: "error",
      message: "Invalid request",
      type: "invalid_request_error",
      code: "bad_request",
    }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });

    await hook.afterError(ctx, response, null);

    expect(span.status).toEqual({ code: SpanStatusCode.ERROR, message: "Invalid request" });
    expect(span.events).toContainEqual({
      name: "exception",
      attributes: {
        "exception.type": "invalid_request_error",
        "exception.message": "Invalid request",
      },
    });
    expect(span.attributes[semConvAttributes.ATTR_HTTP_RESPONSE_STATUS_CODE]).toBe(400);
    expect(span.attributes[semConvAttributes.ATTR_ERROR_TYPE]).toBe("invalid_request_error");
    expect(span.attributes[MistralAIAttributes.MISTRAL_AI_ERROR_CODE]).toBe("bad_request");
    expect(span.ended).toBe(true);
  });
});
