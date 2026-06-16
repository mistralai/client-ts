import type { Span, Tracer } from "@opentelemetry/api";

export type MockSpan = Span & {
  attributes: Record<string, unknown>;
  ended: boolean;
  events: Array<{ name: string; attributes?: Record<string, unknown> }>;
  name: string;
  status?: unknown;
};

export type MockTracer = Tracer & {
  label?: string;
  spans: Array<{ name: string }>;
};

export function createMockSpan(name = "test"): MockSpan {
  const attributes: Record<string, unknown> = {};
  const events: Array<{ name: string; attributes?: Record<string, unknown> }> = [];
  let spanName = name;
  const span: MockSpan = {
    attributes,
    ended: false,
    events,
    get name() { return spanName; },
    set name(n: string) { spanName = n; },
    setAttributes(attrs) { Object.assign(attributes, attrs); return span; },
    setAttribute(k, v) { attributes[k] = v; return span; },
    updateName(n) { spanName = n; return span; },
    spanContext: () => ({ traceId: "", spanId: "", traceFlags: 0 }),
    setStatus(status) { span.status = status; return span; },
    recordException: () => {},
    addEvent(name, attrs) {
      const event: { name: string; attributes?: Record<string, unknown> } = { name };
      if (attrs) {
        event.attributes = attrs as Record<string, unknown>;
      }
      events.push(event);
      return span;
    },
    end: () => { span.ended = true; },
    isRecording: () => true,
    addLink: () => span,
    addLinks: () => span,
  } as MockSpan;
  return span;
}

export function createMockTracer(label?: string): MockTracer {
  const spans: Array<{ name: string }> = [];
  const tracer = {
    spans,
    startSpan(name: string) {
      spans.push({ name });
      return createMockSpan(name);
    },
    startActiveSpan: () => undefined as never,
  } as MockTracer;
  if (label) {
    tracer.label = label;
  }
  return tracer;
}
