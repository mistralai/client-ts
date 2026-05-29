/**
 * Tests for OTEL span enrichment helpers.
 */

import { SpanStatusCode } from "@opentelemetry/api";
import { TracingHook, TracingContext, TRACING_SPAN_KEY, TRACING_TRACER_KEY } from "../../../src/hooks/tracing.js";
import {
  enrichSpanFromRequest,
  enrichSpanFromResponse,
  MistralAIAttributes,
  semConvAttributes,
} from "../../../src/extra/observability/otel.js";
import { createMockSpan, createMockTracer } from "./helpers.js";

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
