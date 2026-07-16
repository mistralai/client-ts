/**
 * Redaction policies for client-side redaction of telemetry spans.
 *
 * Can be customized through the CallbackRedactionPolicy, or extended by
 * subclassing RedactionPolicy.
 */

import type { AttributeValue, Attributes } from "@opentelemetry/api";

/**
 * User-supplied per-attribute masker: given (key, value), return the value to
 * keep. Return the value unchanged to keep it, a redacted value to mask it, or
 * `undefined` to drop the attribute entirely.
 */
export type AttributeMaskCallback = (
  key: string,
  value: AttributeValue,
) => AttributeValue | undefined;

export const DEFAULT_REDACTED_VALUE = "[REDACTED]";

export function defaultRedactionPolicy(): RedactionPolicy {
  return new RegexRedactionPolicy();
}

/** Base class for redaction policies. */
export abstract class RedactionPolicy {
  /** Return a new attribute mapping with sensitive data removed. */
  abstract redactAttributes(
    attributes: Attributes | undefined,
  ): Record<string, AttributeValue>;

  /** Return the span name to export. Defaults to unchanged. */
  redactSpanName(name: string): string {
    return name;
  }

  /** Return the status description to export. Defaults to unchanged. */
  redactStatusDescription(
    description: string | undefined,
  ): string | undefined {
    return description;
  }
}

export const DEFAULT_SENSITIVE_ATTRIBUTE_KEYS: ReadonlySet<string> = new Set([
  "client.address",
  "db.query.text",
  "db.statement",
  "exception.message",
  "exception.stacktrace",
  "gen_ai.input.messages",
  "gen_ai.output.messages",
  "gen_ai.tool.definitions",
  "gen_ai.tool.call.arguments",
  "gen_ai.tool.call.result",
  "http.request.body",
  "http.request.header.authorization",
  "http.request.header.cookie",
  "http.response.body",
  "http.response.header.set-cookie",
  "http.target",
  "http.url",
  "server.address",
  "url.full",
  "url.path",
  "url.query",
]);

export const DEFAULT_SENSITIVE_ATTRIBUTE_FRAGMENTS: ReadonlySet<string> =
  new Set([
    "api_key",
    "argument",
    "arguments",
    "authorization",
    "body",
    "completion",
    "content",
    "cookie",
    "input",
    "message",
    "messages",
    "output",
    "password",
    "payload",
    "prompt",
    "secret",
    "set_cookie",
    "token",
  ]);

export const DEFAULT_SAFE_ATTRIBUTE_KEYS: ReadonlySet<string> = new Set([
  "agent.trace.public",
  "client.port",
  "error.type",
  "exception.type",
  "gen_ai.agent.name",
  "gen_ai.conversation.id",
  "gen_ai.operation.name",
  "gen_ai.provider.name",
  "gen_ai.request.model",
  "gen_ai.response.finish_reasons",
  "gen_ai.response.id",
  "gen_ai.response.model",
  "gen_ai.tool.call.id",
  "gen_ai.tool.name",
  "gen_ai.tool.type",
  "http.request.method",
  "http.response.status_code",
  "network.protocol.name",
  "network.protocol.version",
  "server.port",
  "url.scheme",
]);

export const DEFAULT_TOKEN_PATTERNS: readonly RegExp[] = [
  /bearer\s+[a-z0-9._-]+/gi,
  /\bgh[pousr]_[A-Za-z0-9_]{20,}\b/g,
  /\bxox[baprs]-[A-Za-z0-9-]{10,}\b/g,
  /\bsk-[A-Za-z0-9]{20,}\b/g,
  /\bAKIA[0-9A-Z]{16}\b/g,
  /\bAIza[0-9A-Za-z_-]{35}\b/g,
  /\beyJ[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\b/g,
  /-----BEGIN [A-Z ]*PRIVATE KEY-----/g,
  /\b[sr]k_(?:live|test)_[0-9A-Za-z]{10,}\b/g,
  // AI providers
  /\bsk-ant-[A-Za-z0-9\-_]{20,}\b/g,
  /\bsk-proj-[A-Za-z0-9\-_]{20,}\b/g,
  /\bhf_[A-Za-z0-9]{30,}\b/g,
  // Dev / infra tokens
  /\bgithub_pat_[A-Za-z0-9_]{22,}\b/g,
  /\bglpat-[A-Za-z0-9\-=_]{20,22}\b/g,
  /\bshp(?:at|ca|pa|ss)_[a-fA-F0-9]{32}\b/g,
  /\bsq0(?:atp|csp|idp)-[0-9A-Za-z\-_]{22,43}\b/g,
  /\bPMAK-[a-zA-Z0-9]{24,59}\b/g,
  /\bphc_[a-zA-Z0-9_]{43}\b/g,
  /\brubygems_[a-f0-9]{48}\b/g,
  /\blin_api_[0-9A-Za-z]{40}\b/g,
  /pypi-AgEIcHlwaS5vcmc[A-Za-z0-9\-_]{50,}/g,
  /\bsecret_[A-Za-z0-9]{43}\b/g,
  /[A-Za-z0-9]{14}\.atlasv1\.[A-Za-z0-9]{60,}/g,
  /\bSG\.[A-Za-z0-9_-]{22}\.[A-Za-z0-9_-]{43}\b/g,
  /\bpk_(?:live|test)_[0-9a-zA-Z]{24}\b/g,
  // Webhook URLs (the whole URL is the secret)
  /https:\/\/hooks\.slack\.com\/services\/[A-Za-z0-9/+]{40,}/g,
  /https:\/\/discord(?:app)?\.com\/api\/webhooks\/[0-9]{17,}\/[A-Za-z0-9\-_]{60,}/g,
  /https:\/\/hooks\.zapier\.com\/hooks\/catch\/[A-Za-z0-9/]{16,}/g,
];

export const DEFAULT_PII_SECRET_PATTERNS: readonly RegExp[] = [
  ...DEFAULT_TOKEN_PATTERNS,
  // Email addresses
  /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g,
  // Credit-card-like sequences (13-16 digits, optional spaces/dashes)
  /\b(?:\d[ -]?){13,16}\b/g,
  // IPv4 addresses
  /\b(?:(?:25[0-5]|2[0-4]\d|1?\d?\d)\.){3}(?:25[0-5]|2[0-4]\d|1?\d?\d)\b/g,
];

const SAFE_KEY_PREFIXES: readonly string[] = ["gen_ai.usage."];

function isPrimitive(value: AttributeValue): boolean {
  return (
    typeof value === "string" ||
    typeof value === "boolean" ||
    typeof value === "number"
  );
}

/**
 * Content-oriented policy based on regexes.
 *
 * This is the default policy. Leaves keys and structure intact, scans string
 * values and redacts matched substrings. Fewer false positives than
 * AttributeRedactionPolicy and aims to preserve observability value; may miss
 * free-form PII or secrets not in the default patterns.
 */
export class RegexRedactionPolicy extends RedactionPolicy {
  private readonly patterns: readonly RegExp[];
  private readonly redactedValue: string;

  constructor(
    patterns: readonly RegExp[] = DEFAULT_PII_SECRET_PATTERNS,
    options: { redactedValue?: string } = {},
  ) {
    super();
    this.patterns = patterns;
    this.redactedValue = options.redactedValue ?? DEFAULT_REDACTED_VALUE;
  }

  redactAttributes(
    attributes: Attributes | undefined,
  ): Record<string, AttributeValue> {
    const redacted: Record<string, AttributeValue> = {};
    if (attributes == null) {
      return redacted;
    }
    for (const [key, value] of Object.entries(attributes)) {
      if (value === undefined) {
        continue;
      }
      redacted[key] = redactValue(value, this.patterns, this.redactedValue);
    }
    return redacted;
  }

  override redactSpanName(name: string): string {
    return redactText(name, this.patterns, this.redactedValue);
  }

  override redactStatusDescription(
    description: string | undefined,
  ): string | undefined {
    if (description == null) {
      return description;
    }
    return redactText(description, this.patterns, this.redactedValue);
  }
}

/**
 * Key-oriented hybrid policy.
 *
 * An opt-in, high-recall alternative to the default policy: "safe by default",
 * at the cost of erasing most prompt/response content. It redacts whole values
 * for keys judged sensitive (explicit set, fragment match, or non-primitive
 * value), then runs token patterns over the values it keeps to redact values.
 *
 * When `emitRedactionMetadata` is enabled, each redaction emits a companion
 * attribute. For a value removed wholesale: `{key}.redacted_length` for strings,
 * `{key}.redacted_count` for collections, `{key}.redacted_type` otherwise. For
 * matches scrubbed from a value that is otherwise kept: `{key}.redacted_matches`,
 * the number of substitutions made (summed across sequence elements).
 */
export class AttributeRedactionPolicy extends RedactionPolicy {
  private readonly sensitiveKeys: ReadonlySet<string>;
  private readonly safeKeys: ReadonlySet<string>;
  private readonly sensitiveFragments: ReadonlySet<string>;
  private readonly tokenPatterns: readonly RegExp[];
  private readonly redactNonPrimitive: boolean;
  private readonly redactedValue: string;
  private readonly emitRedactionMetadata: boolean;

  constructor(
    options: {
      sensitiveKeys?: ReadonlySet<string>;
      safeKeys?: ReadonlySet<string>;
      sensitiveFragments?: ReadonlySet<string>;
      tokenPatterns?: readonly RegExp[];
      redactNonPrimitive?: boolean;
      redactedValue?: string;
      emitRedactionMetadata?: boolean;
    } = {},
  ) {
    super();
    this.sensitiveKeys = options.sensitiveKeys ?? DEFAULT_SENSITIVE_ATTRIBUTE_KEYS;
    this.safeKeys = options.safeKeys ?? DEFAULT_SAFE_ATTRIBUTE_KEYS;
    this.sensitiveFragments =
      options.sensitiveFragments ?? DEFAULT_SENSITIVE_ATTRIBUTE_FRAGMENTS;
    this.tokenPatterns = options.tokenPatterns ?? DEFAULT_TOKEN_PATTERNS;
    this.redactNonPrimitive = options.redactNonPrimitive ?? true;
    this.redactedValue = options.redactedValue ?? DEFAULT_REDACTED_VALUE;
    this.emitRedactionMetadata = options.emitRedactionMetadata ?? false;
  }

  private shouldRedact(key: string, value: AttributeValue): boolean {
    const normalizedKey = key.toLowerCase();
    if (this.safeKeys.has(normalizedKey)) {
      return false;
    }
    if (SAFE_KEY_PREFIXES.some((prefix) => normalizedKey.startsWith(prefix))) {
      return false;
    }
    if (this.sensitiveKeys.has(normalizedKey)) {
      return true;
    }
    if (this.hasSensitiveFragment(normalizedKey)) {
      return true;
    }
    return this.redactNonPrimitive && !isPrimitive(value);
  }

  private hasSensitiveFragment(normalizedKey: string): boolean {
    const normalizedWords = normalizedKey.replace(/-/g, "_").replace(/\./g, "_");
    const keyFragments = new Set(
      normalizedWords.split("_").filter((word) => word.length > 0),
    );
    for (const fragment of this.sensitiveFragments) {
      if (keyFragments.has(fragment) || normalizedWords.includes(fragment)) {
        return true;
      }
    }
    return false;
  }

  redactAttributes(
    attributes: Attributes | undefined,
  ): Record<string, AttributeValue> {
    const redacted: Record<string, AttributeValue> = {};
    if (attributes == null) {
      return redacted;
    }

    for (const [key, value] of Object.entries(attributes)) {
      if (value === undefined) {
        continue;
      }
      if (this.emitRedactionMetadata && isRedactionMetadata(key)) {
        redacted[key] = value;
        continue;
      }
      if (this.shouldRedact(key, value)) {
        redacted[key] = this.redactedValue;
        if (this.emitRedactionMetadata) {
          Object.assign(redacted, redactionMetadata(key, value));
        }
        continue;
      }
      if (this.emitRedactionMetadata) {
        const [keptValue, matches] = redactValueCounting(
          value,
          this.tokenPatterns,
          this.redactedValue,
        );
        redacted[key] = keptValue;
        if (matches) {
          redacted[`${key}.redacted_matches`] = matches;
        }
        continue;
      }
      redacted[key] = redactValue(value, this.tokenPatterns, this.redactedValue);
    }

    return redacted;
  }

  override redactStatusDescription(
    description: string | undefined,
  ): string | undefined {
    if (description == null) {
      return description;
    }
    return this.redactedValue;
  }
}

/**
 * Callback-based policy for users to provide custom redaction capabilities.
 *
 * The callback is invoked per attribute and should return the value to keep or
 * `undefined` to drop the attribute. Span name and status description are left
 * unchanged (the callback operates on attributes only).
 */
export class CallbackRedactionPolicy extends RedactionPolicy {
  private readonly maskFunction: AttributeMaskCallback;

  constructor(maskFunction: AttributeMaskCallback) {
    super();
    this.maskFunction = maskFunction;
  }

  redactAttributes(
    attributes: Attributes | undefined,
  ): Record<string, AttributeValue> {
    const redacted: Record<string, AttributeValue> = {};
    if (attributes == null) {
      return redacted;
    }

    for (const [key, value] of Object.entries(attributes)) {
      if (value === undefined) {
        continue;
      }
      const masked = this.maskFunction(key, value);
      if (masked === undefined) {
        continue;
      }
      redacted[key] = masked;
    }

    return redacted;
  }
}

function redactValue(
  value: AttributeValue,
  patterns: readonly RegExp[],
  redactedValue: string = DEFAULT_REDACTED_VALUE,
): AttributeValue {
  return redactValueCounting(value, patterns, redactedValue)[0];
}

function redactValueCounting(
  value: AttributeValue,
  patterns: readonly RegExp[],
  redactedValue: string = DEFAULT_REDACTED_VALUE,
): [AttributeValue, number] {
  if (typeof value === "string") {
    return redactTextCounting(value, patterns, redactedValue);
  }
  if (Array.isArray(value)) {
    let total = 0;
    const items = value.map((item) => {
      if (typeof item === "string") {
        const [redactedItem, count] = redactTextCounting(
          item,
          patterns,
          redactedValue,
        );
        total += count;
        return redactedItem;
      }
      return item;
    });
    return [items as AttributeValue, total];
  }
  return [value, 0];
}

function redactText(
  text: string,
  patterns: readonly RegExp[],
  redactedValue: string = DEFAULT_REDACTED_VALUE,
): string {
  return redactTextCounting(text, patterns, redactedValue)[0];
}

function redactTextCounting(
  text: string,
  patterns: readonly RegExp[],
  redactedValue: string = DEFAULT_REDACTED_VALUE,
): [string, number] {
  let redacted = text;
  let total = 0;
  for (const pattern of patterns) {
    redacted = redacted.replace(pattern, () => {
      total += 1;
      return redactedValue;
    });
  }
  return [redacted, total];
}

const REDACTION_METADATA_SUFFIXES: readonly string[] = [
  ".redacted_count",
  ".redacted_length",
  ".redacted_matches",
  ".redacted_type",
];

function isRedactionMetadata(key: string): boolean {
  const normalized = key.toLowerCase();
  return REDACTION_METADATA_SUFFIXES.some((suffix) =>
    normalized.endsWith(suffix),
  );
}

function redactionMetadata(
  key: string,
  value: AttributeValue,
): Record<string, AttributeValue> {
  if (typeof value === "string") {
    return { [`${key}.redacted_length`]: value.length };
  }
  if (Array.isArray(value)) {
    return { [`${key}.redacted_count`]: value.length };
  }
  return { [`${key}.redacted_type`]: typeof value };
}
