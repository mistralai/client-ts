import {
  AttributeRedactionPolicy,
  CallbackRedactionPolicy,
  DEFAULT_REDACTED_VALUE,
  RegexRedactionPolicy,
} from "../../../src/extra/observability/redaction-policies.js";

describe("AttributeRedactionPolicy", () => {
  test("sensitive key redacted wholesale", () => {
    const out = new AttributeRedactionPolicy().redactAttributes({
      "gen_ai.input.messages": "hello",
    });
    expect(out["gen_ai.input.messages"]).toBe(DEFAULT_REDACTED_VALUE);
  });

  test("safe key kept", () => {
    const out = new AttributeRedactionPolicy().redactAttributes({
      "gen_ai.request.model": "mistral-large",
    });
    expect(out["gen_ai.request.model"]).toBe("mistral-large");
  });

  test("usage prefix kept", () => {
    const out = new AttributeRedactionPolicy().redactAttributes({
      "gen_ai.usage.input_tokens": 42,
    });
    expect(out["gen_ai.usage.input_tokens"]).toBe(42);
  });

  test("fragment match redacted", () => {
    const out = new AttributeRedactionPolicy().redactAttributes({
      "custom.prompt.text": "secret prompt",
    });
    expect(out["custom.prompt.text"]).toBe(DEFAULT_REDACTED_VALUE);
  });

  test("token pattern applied to kept string", () => {
    const out = new AttributeRedactionPolicy().redactAttributes({
      note: "call token ghp_abcdefghijklmnopqrstuvwxyz0123 now",
    });
    expect(out["note"]).toBe("call token [REDACTED] now");
  });

  test("non-primitive redacted", () => {
    const out = new AttributeRedactionPolicy().redactAttributes({
      data: ["a", "b"],
    });
    expect(out["data"]).toBe(DEFAULT_REDACTED_VALUE);
  });

  test("non-primitive kept when disabled", () => {
    const policy = new AttributeRedactionPolicy({ redactNonPrimitive: false });
    const out = policy.redactAttributes({ "safeish.list": ["a", "b"] });
    expect(out["safeish.list"]).toEqual(["a", "b"]);
  });

  test("string sequence scanned element-wise when kept", () => {
    const policy = new AttributeRedactionPolicy({ redactNonPrimitive: false });
    const out = policy.redactAttributes({
      tags: ["plain", "ghp_abcdefghijklmnopqrstuvwxyz0123"],
    });
    expect(out["tags"]).toEqual(["plain", DEFAULT_REDACTED_VALUE]);
  });

  test("safe key string sequence scanned", () => {
    const out = new AttributeRedactionPolicy().redactAttributes({
      "gen_ai.response.finish_reasons": ["stop", "Bearer abc.def"],
    });
    expect(out["gen_ai.response.finish_reasons"]).toEqual([
      "stop",
      DEFAULT_REDACTED_VALUE,
    ]);
  });

  test("undefined attributes returns empty", () => {
    expect(new AttributeRedactionPolicy().redactAttributes(undefined)).toEqual(
      {},
    );
  });

  test("status description redacted", () => {
    const policy = new AttributeRedactionPolicy();
    expect(policy.redactStatusDescription("boom: user@x.com")).toBe(
      DEFAULT_REDACTED_VALUE,
    );
    expect(policy.redactStatusDescription(undefined)).toBeUndefined();
  });

  test("span name unchanged", () => {
    expect(
      new AttributeRedactionPolicy().redactSpanName("chat mistral-large"),
    ).toBe("chat mistral-large");
  });

  test("custom redacted value", () => {
    const policy = new AttributeRedactionPolicy({ redactedValue: "XXX" });
    const out = policy.redactAttributes({ "http.url": "https://x" });
    expect(out["http.url"]).toBe("XXX");
  });
});

describe("AttributeRedactionPolicy redaction metadata", () => {
  test("no metadata by default", () => {
    const out = new AttributeRedactionPolicy().redactAttributes({
      "gen_ai.input.messages": "hello",
    });
    expect(out).toEqual({ "gen_ai.input.messages": DEFAULT_REDACTED_VALUE });
  });

  test("string redaction emits length", () => {
    const policy = new AttributeRedactionPolicy({ emitRedactionMetadata: true });
    const out = policy.redactAttributes({ "gen_ai.input.messages": "hello" });
    expect(out["gen_ai.input.messages"]).toBe(DEFAULT_REDACTED_VALUE);
    expect(out["gen_ai.input.messages.redacted_length"]).toBe(5);
  });

  test("sequence redaction emits count", () => {
    const policy = new AttributeRedactionPolicy({ emitRedactionMetadata: true });
    const out = policy.redactAttributes({ data: ["a", "b", "c"] });
    expect(out["data"]).toBe(DEFAULT_REDACTED_VALUE);
    expect(out["data.redacted_count"]).toBe(3);
  });

  test("kept string emits match count", () => {
    const policy = new AttributeRedactionPolicy({ emitRedactionMetadata: true });
    const out = policy.redactAttributes({
      note: "token ghp_abcdefghijklmnopqrstuvwxyz0123 now",
    });
    expect(out["note"]).toBe("token [REDACTED] now");
    expect(out["note.redacted_matches"]).toBe(1);
  });

  test("kept sequence sums match count", () => {
    const policy = new AttributeRedactionPolicy({
      emitRedactionMetadata: true,
      redactNonPrimitive: false,
    });
    const out = policy.redactAttributes({
      tags: [
        "plain",
        "ghp_abcdefghijklmnopqrstuvwxyz0123",
        "Bearer abc.def",
      ],
    });
    expect(out["tags"]).toEqual([
      "plain",
      DEFAULT_REDACTED_VALUE,
      DEFAULT_REDACTED_VALUE,
    ]);
    expect(out["tags.redacted_matches"]).toBe(2);
  });

  test("kept string without match has no metadata", () => {
    const policy = new AttributeRedactionPolicy({ emitRedactionMetadata: true });
    const out = policy.redactAttributes({ "gen_ai.request.model": "mistral-large" });
    expect(out).toEqual({ "gen_ai.request.model": "mistral-large" });
  });

  test("idempotent on already redacted attributes", () => {
    const policy = new AttributeRedactionPolicy({ emitRedactionMetadata: true });
    const first = policy.redactAttributes({ "gen_ai.input.messages": "hello" });
    const second = policy.redactAttributes(first);
    expect(second).toEqual(first);
  });

  test("idempotent on kept match metadata", () => {
    const policy = new AttributeRedactionPolicy({ emitRedactionMetadata: true });
    const first = policy.redactAttributes({
      note: "token ghp_abcdefghijklmnopqrstuvwxyz0123 now",
    });
    const second = policy.redactAttributes(first);
    expect(second).toEqual(first);
  });
});

describe("RegexRedactionPolicy", () => {
  test("email redacted inline preserving structure", () => {
    const out = new RegexRedactionPolicy().redactAttributes({
      "gen_ai.input.messages": '{"content":"reach me at a@b.com"}',
    });
    expect(out["gen_ai.input.messages"]).toBe(
      '{"content":"reach me at [REDACTED]"}',
    );
  });

  test("token redacted", () => {
    const out = new RegexRedactionPolicy().redactAttributes({
      h: "Bearer abc.def-ghi",
    });
    expect(out["h"]).toBe("[REDACTED]");
  });

  test("non-matching string kept", () => {
    const out = new RegexRedactionPolicy().redactAttributes({
      "server.address": "prod-host-1",
    });
    expect(out["server.address"]).toBe("prod-host-1");
  });

  test("non-string untouched", () => {
    const out = new RegexRedactionPolicy().redactAttributes({ n: 5, b: true });
    expect(out).toEqual({ n: 5, b: true });
  });

  test("span name scanned", () => {
    expect(new RegexRedactionPolicy().redactSpanName("op a@b.com")).toBe(
      "op [REDACTED]",
    );
  });

  test("status description scanned", () => {
    expect(
      new RegexRedactionPolicy().redactStatusDescription("failed for a@b.com"),
    ).toBe("failed for [REDACTED]");
  });

  // Fixtures are assembled from fragments so the source never contains a
  // contiguous secret-shaped literal (which trips push-protection scanners),
  // while the runtime value still exercises the redaction patterns.
  test.each([
    "AKIA" + "A".repeat(16),
    "AIza" + "a".repeat(35),
    "eyJhbGciOiJIUzI1NiJ9" + "." + "eyJzdWIiOiIxMjM0" + "." + "abc123",
    "-----BEGIN RSA PRIVATE KEY-----",
    "sk_live_" + "a".repeat(16),
    "sk-ant-" + "a".repeat(24),
    "hf_" + "a".repeat(34),
    "github_pat_" + "a".repeat(24),
    "glpat-" + "a".repeat(20),
    "shpat_" + "0".repeat(32),
    "sq0atp-" + "a".repeat(24),
    "PMAK-" + "a".repeat(24),
    "phc_" + "a".repeat(43),
    "SG." + "a".repeat(22) + "." + "a".repeat(43),
    "pk_live_" + "a".repeat(24),
    "https://hooks.slack.com/services/" + "A".repeat(44),
  ])("secret pattern redacted: %s", (secret) => {
    const out = new RegexRedactionPolicy().redactAttributes({
      v: `leak ${secret} here`,
    });
    const value = out["v"];
    expect(typeof value).toBe("string");
    expect(value as string).not.toContain(secret);
    expect(value as string).toContain(DEFAULT_REDACTED_VALUE);
  });

  test("string sequence scanned preserving container", () => {
    const out = new RegexRedactionPolicy().redactAttributes({
      msgs: ["hello", "reach me at a@b.com"],
    });
    expect(out["msgs"]).toEqual(["hello", "reach me at [REDACTED]"]);
  });

  test("numeric sequence untouched", () => {
    const out = new RegexRedactionPolicy().redactAttributes({ nums: [1, 2, 3] });
    expect(out["nums"]).toEqual([1, 2, 3]);
  });
});

describe("CallbackRedactionPolicy", () => {
  test("mask applied per attribute", () => {
    const policy = new CallbackRedactionPolicy((key, value) =>
      key.includes("message") ? "[X]" : value,
    );
    const out = policy.redactAttributes({
      "gen_ai.output.messages": "hi",
      "gen_ai.request.model": "m",
    });
    expect(out).toEqual({
      "gen_ai.output.messages": "[X]",
      "gen_ai.request.model": "m",
    });
  });

  test("returning undefined drops attribute", () => {
    const policy = new CallbackRedactionPolicy((key, value) =>
      key === "drop" ? undefined : value,
    );
    const out = policy.redactAttributes({ drop: "x", keep: "y" });
    expect(out).toEqual({ keep: "y" });
  });
});
