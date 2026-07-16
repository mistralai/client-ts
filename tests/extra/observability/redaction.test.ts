import {
  RedactingSpanExporter,
  redactSpan,
  resolveRedaction,
  type ExportResultLike,
  type ReadableSpanLike,
  type SpanExporterLike,
} from "../../../src/extra/observability/redaction.js";
import {
  AttributeRedactionPolicy,
  CallbackRedactionPolicy,
  DEFAULT_REDACTED_VALUE,
  RegexRedactionPolicy,
} from "../../../src/extra/observability/redaction-policies.js";
import type { Attributes } from "@opentelemetry/api";

type FakeSpan = ReadableSpanLike & {
  startTime: number;
  kind: number;
};

function makeSpan(
  attributes: Attributes = {},
  overrides: Partial<FakeSpan> = {},
): FakeSpan {
  const spanContext = { traceId: "trace-1", spanId: "span-1", traceFlags: 1 };
  return {
    name: "parent",
    attributes,
    events: [
      { name: "exception", attributes: { "exception.message": "boom" } },
    ],
    links: [{ attributes: { "gen_ai.input.messages": "linked secret" } }],
    resource: { attributes: { "service.name": "svc" } },
    status: { code: 2, message: "boom detail" },
    startTime: 123,
    kind: 3,
    spanContext: () => spanContext,
    ...overrides,
  };
}

class InMemorySpanExporter implements SpanExporterLike {
  spans: ReadableSpanLike[] = [];
  shutdownCalled = false;
  flushCalled = false;

  export(
    spans: ReadableSpanLike[],
    resultCallback: (result: ExportResultLike) => void,
  ): void {
    this.spans.push(...spans);
    resultCallback({ code: 0 });
  }

  shutdown(): Promise<void> {
    this.shutdownCalled = true;
    return Promise.resolve();
  }

  forceFlush(): Promise<void> {
    this.flushCalled = true;
    return Promise.resolve();
  }
}

describe("resolveRedaction", () => {
  test("true returns default policy", () => {
    expect(resolveRedaction(true)).toBeInstanceOf(RegexRedactionPolicy);
  });

  test("false returns undefined", () => {
    expect(resolveRedaction(false)).toBeUndefined();
  });

  test("policy passthrough", () => {
    const policy = new RegexRedactionPolicy();
    expect(resolveRedaction(policy)).toBe(policy);
  });

  test("callback wrapped", () => {
    const resolved = resolveRedaction((_key, value) => value);
    expect(resolved).toBeInstanceOf(CallbackRedactionPolicy);
  });

  test("invalid raises type error", () => {
    expect(() =>
      resolveRedaction(123 as unknown as boolean),
    ).toThrow(TypeError);
  });
});

describe("redactSpan", () => {
  test("attributes redacted", () => {
    const redacted = redactSpan(
      makeSpan({
        "gen_ai.input.messages": "secret",
        "gen_ai.request.model": "mistral-large",
      }),
      new AttributeRedactionPolicy(),
    );
    expect(redacted.attributes["gen_ai.input.messages"]).toBe(
      DEFAULT_REDACTED_VALUE,
    );
    expect(redacted.attributes["gen_ai.request.model"]).toBe("mistral-large");
  });

  test("event attributes redacted", () => {
    const redacted = redactSpan(makeSpan(), new AttributeRedactionPolicy());
    const event = redacted.events[0]!;
    expect(event.name).toBe("exception");
    expect(event.attributes?.["exception.message"]).toBe(DEFAULT_REDACTED_VALUE);
  });

  test("event untouched fields survive own-key enumeration and spread", () => {
    // Events are cloned the same way as the span, so fields the redaction does
    // not touch (name, time, ...) must remain own keys.
    const events = [
      { name: "exception", time: 456, attributes: { "exception.message": "boom" } },
    ] as unknown as ReadableSpanLike["events"];
    const redacted = redactSpan(
      makeSpan({}, { events }),
      new AttributeRedactionPolicy(),
    );
    const event = redacted.events[0]! as ReadableSpanLike["events"][number] & {
      time: number;
    };

    const spread = { ...event };
    expect(spread.name).toBe("exception");
    expect(spread.time).toBe(456);
    expect(spread.attributes?.["exception.message"]).toBe(DEFAULT_REDACTED_VALUE);
  });

  test("link attributes redacted", () => {
    const redacted = redactSpan(makeSpan(), new AttributeRedactionPolicy());
    expect(redacted.links[0]!.attributes?.["gen_ai.input.messages"]).toBe(
      DEFAULT_REDACTED_VALUE,
    );
  });

  test("resource attributes redacted", () => {
    const redacted = redactSpan(
      makeSpan(),
      new CallbackRedactionPolicy(() => "[MASKED]"),
    );
    expect(redacted.resource.attributes["service.name"]).toBe("[MASKED]");
  });

  test("resource with getter-only attributes redacted", () => {
    // OpenTelemetry's ResourceImpl exposes `attributes` as a getter-only
    // accessor; plain assignment on a prototype-based wrapper throws.
    const resource = Object.create(
      {},
      {
        attributes: {
          get: () => ({ "service.name": "svc" }),
          enumerable: true,
          configurable: true,
        },
      },
    ) as ReadableSpanLike["resource"];
    const redacted = redactSpan(
      makeSpan({}, { resource }),
      new CallbackRedactionPolicy(() => "[MASKED]"),
    );
    expect(redacted.resource.attributes["service.name"]).toBe("[MASKED]");
  });

  test("status description redacted", () => {
    const redacted = redactSpan(makeSpan(), new AttributeRedactionPolicy());
    expect(redacted.status.code).toBe(2);
    expect(redacted.status.message).toBe(DEFAULT_REDACTED_VALUE);
  });

  test("identity and untouched fields preserved", () => {
    const original = makeSpan();
    const redacted = redactSpan(original, new AttributeRedactionPolicy());
    expect(redacted.spanContext()).toEqual(original.spanContext());
    // Fields the policy does not touch are cloned as own properties.
    expect((redacted as FakeSpan).startTime).toBe(123);
    expect((redacted as FakeSpan).kind).toBe(3);
  });

  test("untouched fields survive own-key enumeration and spread", () => {
    // Exporters that spread or enumerate the span (e.g. {...span},
    // Object.keys) must still see fields the redaction never touched. The
    // clone copies every own property, so these fields are own keys, not
    // prototype-only accessors.
    const original = makeSpan({ "gen_ai.input.messages": "secret" });
    const redacted = redactSpan(original, new AttributeRedactionPolicy());

    const keys = Object.keys(redacted);
    expect(keys).toContain("startTime");
    expect(keys).toContain("kind");
    expect(keys).toContain("attributes");

    const spread = { ...(redacted as FakeSpan) };
    expect(spread.startTime).toBe(123);
    expect(spread.kind).toBe(3);
    expect(spread.attributes["gen_ai.input.messages"]).toBe(
      DEFAULT_REDACTED_VALUE,
    );
  });
});

describe("RedactingSpanExporter", () => {
  test("wrapped exporter receives redacted spans (default policy)", () => {
    const wrapped = new InMemorySpanExporter();
    const exporter = new RedactingSpanExporter(wrapped);
    const span = makeSpan({
      "gen_ai.output.messages": "leak Bearer abc.def-ghi",
      "gen_ai.request.model": "mistral-large",
    });

    exporter.export([span], () => undefined);

    expect(wrapped.spans).toHaveLength(1);
    const attrs = wrapped.spans[0]!.attributes;
    expect(attrs["gen_ai.output.messages"]).toBe(
      `leak ${DEFAULT_REDACTED_VALUE}`,
    );
    expect(attrs["gen_ai.request.model"]).toBe("mistral-large");
  });

  test("custom policy used", () => {
    const wrapped = new InMemorySpanExporter();
    const exporter = new RedactingSpanExporter(
      wrapped,
      new AttributeRedactionPolicy(),
    );
    const span = makeSpan({
      "gen_ai.output.messages": "leak Bearer abc.def-ghi",
    });

    exporter.export([span], () => undefined);

    expect(wrapped.spans[0]!.attributes["gen_ai.output.messages"]).toBe(
      DEFAULT_REDACTED_VALUE,
    );
  });

  test("propagates the export result callback", () => {
    const wrapped = new InMemorySpanExporter();
    const exporter = new RedactingSpanExporter(wrapped);
    const results: ExportResultLike[] = [];

    exporter.export([makeSpan()], (result) => results.push(result));

    expect(results).toEqual([{ code: 0 }]);
  });

  test("shutdown and forceFlush pass through", async () => {
    const wrapped = new InMemorySpanExporter();
    const exporter = new RedactingSpanExporter(wrapped);

    await exporter.forceFlush();
    await exporter.shutdown();

    expect(wrapped.flushCalled).toBe(true);
    expect(wrapped.shutdownCalled).toBe(true);
  });
});
