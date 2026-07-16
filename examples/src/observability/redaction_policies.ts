/**
 * Choosing and extending a redaction policy in dedicated telemetry mode.
 *
 * The `redaction` option of `configureTelemetry` accepts:
 *   - true (default): the regex (content-oriented) policy
 *   - false: redaction disabled
 *   - a RedactionPolicy instance (e.g. AttributeRedactionPolicy)
 *   - a (key, value) => value | undefined callback
 *
 * Built-in policies expose their defaults as public constants so you can extend
 * them instead of replacing them wholesale:
 *   - AttributeRedactionPolicy: DEFAULT_SENSITIVE_ATTRIBUTE_KEYS,
 *     DEFAULT_SENSITIVE_ATTRIBUTE_FRAGMENTS, DEFAULT_SAFE_ATTRIBUTE_KEYS,
 *     DEFAULT_TOKEN_PATTERNS
 *   - RegexRedactionPolicy: DEFAULT_PII_SECRET_PATTERNS
 *
 * CallbackRedactionPolicy is different in kind: instead of extending constants
 * you supply a `(key, value) => value | undefined` function and decide per
 * attribute. It is the only policy that can return `undefined` to drop an
 * attribute entirely; the built-in policies replace values in place and never
 * remove keys.
 *
 * `demonstrate()` applies the policies directly to a sample attribute mapping
 * and prints the before/after; it needs no API key and no network. The live
 * section wires an extended policy into `configureTelemetry` and issues a
 * request (requires the optional OpenTelemetry SDK/exporter dependencies).
 */

import type { AttributeValue, Attributes } from "@opentelemetry/api";

import { Mistral } from "@mistralai/mistralai";
import {
  AttributeRedactionPolicy,
  CallbackRedactionPolicy,
  configureTelemetry,
  DEFAULT_PII_SECRET_PATTERNS,
  DEFAULT_SENSITIVE_ATTRIBUTE_KEYS,
  RegexRedactionPolicy,
  shutdownTelemetry,
  type AttributeMaskCallback,
} from "@mistralai/mistralai/extra/observability";

// A custom attribute key your application sets and wants masked, on top of the
// built-in sensitive keys.
const CUSTOMER_EMAIL_KEY = "app.customer.email";

// A custom secret shape (e.g. an internal token) the default patterns don't know.
const ACME_TOKEN_PATTERN = /\bacme-[a-z0-9]{16}\b/g;

/** Key-oriented policy: defaults plus one extra sensitive key. */
function buildAttributePolicy(): AttributeRedactionPolicy {
  return new AttributeRedactionPolicy({
    sensitiveKeys: new Set([...DEFAULT_SENSITIVE_ATTRIBUTE_KEYS, CUSTOMER_EMAIL_KEY]),
  });
}

/** Content-oriented policy: default patterns plus one extra secret shape. */
function buildRegexPolicy(): RegexRedactionPolicy {
  return new RegexRedactionPolicy([...DEFAULT_PII_SECRET_PATTERNS, ACME_TOKEN_PATTERN]);
}

/**
 * Callback: full control over each attribute. Return the value to keep it, a
 * transformed value to mask it, or `undefined` to drop the attribute entirely
 * (something the built-in policies cannot do).
 */
const customMask: AttributeMaskCallback = (key, value) => {
  // Drop your application's private namespace outright.
  if (key.startsWith("app.")) {
    return undefined;
  }
  // Leave model/usage metadata untouched.
  if (key.startsWith("gen_ai.request") || key.startsWith("gen_ai.usage")) {
    return value;
  }
  // Mask anything else with your own marker.
  return "***";
};

/** Callback-based policy wrapping the customMask function above. */
function buildCallbackPolicy(): CallbackRedactionPolicy {
  return new CallbackRedactionPolicy(customMask);
}

/** Show, without any network call, what each extended policy redacts. */
function demonstrate(): void {
  const attributes: Attributes = {
    // Safe key, survives both policies.
    "gen_ai.request.model": "mistral-small-latest",
    // Built-in sensitive key: whole value dropped by the attribute policy.
    "gen_ai.input.messages": "user: my card is 4111 1111 1111 1111",
    // Custom key we added to the attribute policy's sensitive set.
    [CUSTOMER_EMAIL_KEY]: "jane@example.com",
    // Free-form value carrying secrets: caught by the regex policy's patterns.
    "http.request.body":
      "Authorization: Bearer sk-abcdefghijklmnopqrst; internal=acme-0123456789abcdef",
  };

  const cases: Array<[string, { redactAttributes: (a: Attributes) => Record<string, AttributeValue> }]> = [
    ["AttributeRedactionPolicy (extended keys)", buildAttributePolicy()],
    ["RegexRedactionPolicy (extended patterns)", buildRegexPolicy()],
    ["CallbackRedactionPolicy (custom function)", buildCallbackPolicy()],
  ];

  for (const [label, policy] of cases) {
    console.log(`\n${label}`);
    const redacted = policy.redactAttributes(attributes);
    for (const key of Object.keys(attributes)) {
      // A callback may drop a key entirely (returns undefined), so it can be
      // absent from the redacted mapping.
      const after = key in redacted ? redacted[key] : "<dropped>";
      console.log(`  ${key}`);
      console.log(`    before: ${attributes[key]}`);
      console.log(`    after : ${after}`);
    }
  }
}

demonstrate();

const apiKey = process.env["MISTRAL_API_KEY"];
if (!apiKey) {
  console.log("\nSet MISTRAL_API_KEY to run the live configureTelemetry example.");
} else {
  const client = new Mistral({ apiKey });

  // Wire the extended attribute policy into dedicated telemetry mode.
  await configureTelemetry(client, "dedicated", { redaction: buildAttributePolicy() });

  // Alternatives:
  // await configureTelemetry(client, "dedicated", { redaction: buildRegexPolicy() });
  // await configureTelemetry(client, "dedicated", { redaction: customMask });        // bare callback
  // await configureTelemetry(client, "dedicated", { redaction: buildCallbackPolicy() });
  // await configureTelemetry(client, "dedicated", { redaction: false });             // disable entirely

  const response = await client.chat.complete({
    model: "mistral-small-latest",
    messages: [{ role: "user", content: "Say hello." }],
  });

  console.log(response.choices?.[0]?.message?.content);

  // Flush and shut down the SDK-owned provider so the span is exported before
  // this short-lived script exits.
  await shutdownTelemetry(client);
}
