/**
 * Client-side redaction of telemetry spans before they are exported.
 *
 * This module provides a configurable, export-time masking layer for
 * OpenTelemetry spans so PII/secrets never leave the client. It is the primary,
 * reusable primitive: any OTEL application can wrap the exporter it owns with
 * `RedactingSpanExporter`, and the Mistral SDK installs it automatically in
 * dedicated telemetry mode (see `configureTelemetry`). Several redaction
 * policies are implemented in `redaction-policies.ts`.
 *
 * The module stays importable without the optional OpenTelemetry SDK: it only
 * manipulates plain objects and delegates the actual export to the wrapped
 * exporter. Structural types are used instead of importing
 * `@opentelemetry/sdk-trace-base` so no extra dependency is required to import.
 */

import type { Attributes } from "@opentelemetry/api";

import {
    CallbackRedactionPolicy,
    defaultRedactionPolicy,
    RedactionPolicy,
    type AttributeMaskCallback,
} from "./redaction-policies.js";

/**
 * Redaction setting accepted by `configureTelemetry` and the exporter:
 * - `true`: the default (regex) policy
 * - `false`: redaction disabled
 * - a `RedactionPolicy` instance
 * - a `(key, value) => value | undefined` callback
 */
export type RedactionSetting = boolean | RedactionPolicy | AttributeMaskCallback;

type SpanStatusLike = { code: number; message?: string };

type TimedEventLike = {
  name: string;
  attributes?: Attributes;
};

type LinkLike = {
  attributes?: Attributes;
};

type ResourceLike = {
  attributes: Attributes;
};

/**
 * Minimal structural view of an OpenTelemetry `ReadableSpan`. Only the redacted
 * surface is described; every other field is preserved via the prototype chain.
 */
export interface ReadableSpanLike {
  name: string;
  attributes: Attributes;
  events: TimedEventLike[];
  links: LinkLike[];
  resource: ResourceLike;
  status: SpanStatusLike;
  spanContext(): unknown;
}

export type ExportResultLike = { code: number; error?: Error };

/** Minimal structural view of an OpenTelemetry `SpanExporter`. */
export interface SpanExporterLike {
  export(
    spans: ReadableSpanLike[],
    resultCallback: (result: ExportResultLike) => void,
  ): void;
  shutdown(): Promise<void>;
  forceFlush?(): Promise<void>;
}

/**
 * Resolve a redaction setting into a policy, or `undefined` to disable
 * redaction. `true` yields the default policy, `false` disables redaction
 * entirely, and a policy or `(key, value) => value | undefined` callback is used
 * as-is.
 */
export function resolveRedaction(
  redaction: RedactionSetting,
): RedactionPolicy | undefined {
  if (redaction === false) {
    return undefined;
  }
  if (redaction === true) {
    return defaultRedactionPolicy();
  }
  return resolvePolicy(redaction);
}

function resolvePolicy(
  policy: RedactionPolicy | AttributeMaskCallback | undefined,
): RedactionPolicy {
  if (policy == null) {
    return defaultRedactionPolicy();
  }
  if (policy instanceof RedactionPolicy) {
    return policy;
  }
  if (typeof policy === "function") {
    return new CallbackRedactionPolicy(policy);
  }
  throw new TypeError(
    "redaction policy must be a RedactionPolicy, a callable, or undefined; " +
      `got ${typeof policy}.`,
  );
}

/**
 * Wrap any `SpanExporter` to redact spans before delegating export.
 *
 * @example
 * ```ts
 * const exporter = new RedactingSpanExporter(new OTLPTraceExporter());
 * provider.addSpanProcessor(new BatchSpanProcessor(exporter));
 * ```
 */
export class RedactingSpanExporter implements SpanExporterLike {
  private readonly exporter: SpanExporterLike;
  private readonly policy: RedactionPolicy;

  constructor(
    exporter: SpanExporterLike,
    policy?: RedactionPolicy | AttributeMaskCallback,
  ) {
    this.exporter = exporter;
    this.policy = resolvePolicy(policy);
  }

  export(
    spans: ReadableSpanLike[],
    resultCallback: (result: ExportResultLike) => void,
  ): void {
    const redacted = spans.map((span) => redactSpan(span, this.policy));
    this.exporter.export(redacted, resultCallback);
  }

  shutdown(): Promise<void> {
    return this.exporter.shutdown();
  }

  forceFlush(): Promise<void> {
    return this.exporter.forceFlush?.() ?? Promise.resolve();
  }
}

/**
 * Define an own data property on `target`, shadowing the prototype. Plain
 * assignment (`target.key = value`) fails when the prototype exposes `key` as a
 * getter-only accessor (e.g. OpenTelemetry's `Resource.attributes`), so we
 * always define the override explicitly.
 */
function overrideProperty<T extends object>(
  target: T,
  key: keyof T,
  value: T[keyof T],
): void {
  Object.defineProperty(target, key, {
    value,
    enumerable: true,
    configurable: true,
    writable: true,
  });
}

/**
 * Shallow-clone an object, keeping its prototype and copying every own field as
 * an own property.
 */
function shallowClone<T extends object>(source: T): T {
  return Object.create(
    Object.getPrototypeOf(source) as object | null,
    Object.getOwnPropertyDescriptors(source),
  ) as T;
}

/**
 * Return a redacted clone of a span: same prototype, every own field copied, so
 * untouched fields survive exporters that spread or enumerate it ({...span},
 * Object.keys). Only the sensitive surface is overridden.
 */
export function redactSpan(
  span: ReadableSpanLike,
  policy: RedactionPolicy,
): ReadableSpanLike {
  const redacted = shallowClone(span);
  overrideProperty(redacted, "name", policy.redactSpanName(span.name));
  overrideProperty(redacted, "attributes", policy.redactAttributes(span.attributes));
  overrideProperty(redacted, "events", redactEvents(span.events, policy));
  overrideProperty(redacted, "links", redactLinks(span.links, policy));
  overrideProperty(redacted, "resource", redactResource(span.resource, policy));
  overrideProperty(redacted, "status", redactStatus(span.status, policy));
  return redacted;
}

function redactEvents(
  events: TimedEventLike[] | undefined,
  policy: RedactionPolicy,
): TimedEventLike[] {
  if (events == null) {
    return [];
  }
  return events.map((event) => {
    const redacted = shallowClone(event);
    overrideProperty(redacted, "attributes", policy.redactAttributes(event.attributes));
    return redacted;
  });
}

function redactLinks(
  links: LinkLike[] | undefined,
  policy: RedactionPolicy,
): LinkLike[] {
  if (links == null) {
    return [];
  }
  return links.map((link) => {
    const redacted = shallowClone(link);
    overrideProperty(redacted, "attributes", policy.redactAttributes(link.attributes));
    return redacted;
  });
}

function redactResource(
  resource: ResourceLike | undefined,
  policy: RedactionPolicy,
): ResourceLike {
  if (resource == null) {
    return resource as unknown as ResourceLike;
  }
  const redacted = shallowClone(resource);
  overrideProperty(
    redacted,
    "attributes",
    policy.redactAttributes(resource.attributes) as Attributes,
  );
  return redacted;
}

function redactStatus(
  status: SpanStatusLike | undefined,
  policy: RedactionPolicy,
): SpanStatusLike {
  if (status == null) {
    return status as unknown as SpanStatusLike;
  }
  const message = policy.redactStatusDescription(status.message);
  const redacted: SpanStatusLike = { code: status.code };
  if (message !== undefined) {
    redacted.message = message;
  }
  return redacted;
}
