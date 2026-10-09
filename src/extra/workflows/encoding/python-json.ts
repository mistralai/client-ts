/**
 * Byte-exact ports of the two JSON serializers the Python `PayloadEncoder`
 * uses, so that encoded payloads match the Python client and workers:
 *
 * - `toJsonBytes` mirrors `pydantic_core.to_json`: compact, raw UTF-8. Python
 *   uses it to serialize workflow inputs before encoding them.
 * - `parsePythonJson` + `dumpsPythonJson` mirror `json.loads` +
 *   `json.dumps` with default arguments (", " / ": " separators, ASCII only).
 *   Partial encryption re-serializes the whole payload this way. The parser
 *   keeps key order and the int/float distinction of number tokens, which a
 *   plain `JSON.parse` would lose.
 *
 * JavaScript numbers map to Python values as follows: integers become `int`,
 * other numbers become `float`, and `bigint` becomes `int`.
 */

const textEncoder = new TextEncoder();

// ---------------------------------------------------------------------------
// Number formatting
// ---------------------------------------------------------------------------

type Decomposed = { negative: boolean; digits: string; exponent: number };

/**
 * Splits a finite number into its shortest round-trip decimal digits and the
 * decimal exponent of the first digit. `String(number)` gives the shortest
 * round-trip representation, as Python's `repr(float)` does.
 */
function decompose(value: number): Decomposed {
  const negative = value < 0 || Object.is(value, -0);
  const [coefficient = "0", exponentPart] = String(Math.abs(value)).split("e");
  const [intPart = "0", fracPart = ""] = coefficient.split(".");
  let digits = intPart + fracPart;
  let exponent = Number(exponentPart ?? 0) + intPart.length - 1;

  const leadingZeros = digits.length - digits.replace(/^0+/, "").length;
  if (leadingZeros === digits.length) {
    return { negative, digits: "0", exponent: 0 };
  }
  digits = digits.slice(leadingZeros).replace(/0+$/, "");
  exponent -= leadingZeros;
  return { negative, digits, exponent };
}

function formatFloat(
  value: number,
  scientificBelow: number,
  scientificFrom: number,
  formatExponent: (exponent: number) => string,
): string {
  if (Number.isNaN(value)) return "NaN";
  if (!Number.isFinite(value)) return value > 0 ? "Infinity" : "-Infinity";

  const { negative, digits, exponent } = decompose(value);
  let body: string;
  if (exponent < scientificBelow || exponent >= scientificFrom) {
    const mantissa = digits.length > 1
      ? `${digits[0]}.${digits.slice(1)}`
      : digits;
    body = `${mantissa}e${formatExponent(exponent)}`;
  } else if (exponent < 0) {
    body = `0.${"0".repeat(-exponent - 1)}${digits}`;
  } else if (digits.length <= exponent + 1) {
    body = `${digits}${"0".repeat(exponent + 1 - digits.length)}.0`;
  } else {
    body = `${digits.slice(0, exponent + 1)}.${digits.slice(exponent + 1)}`;
  }
  return negative ? `-${body}` : body;
}

/** Python `repr(float)`, as written by `json.dumps`: `1e-05`, `1e+16`. */
function formatPythonFloat(value: number): string {
  return formatFloat(
    value,
    -4,
    16,
    (e) => `${e < 0 ? "-" : "+"}${String(Math.abs(e)).padStart(2, "0")}`,
  );
}

/** `pydantic_core.to_json` float format: `0.00001`, `1e-6`, `1e+16`. */
function formatPydanticFloat(value: number): string {
  return formatFloat(value, -5, 16, (e) => `${e < 0 ? "-" : "+"}${Math.abs(e)}`);
}

// ---------------------------------------------------------------------------
// pydantic_core.to_json
// ---------------------------------------------------------------------------

function toJsonText(value: unknown): string | undefined {
  if (
    value !== null
    && typeof value === "object"
    && typeof (value as { toJSON?: unknown }).toJSON === "function"
  ) {
    value = (value as { toJSON: () => unknown }).toJSON();
  }

  switch (typeof value) {
    case "string":
      // Same escaping as serde_json: `"`, `\` and control characters only.
      return JSON.stringify(value);
    case "number":
      return Number.isInteger(value)
        ? BigInt(value).toString()
        : formatPydanticFloat(value);
    case "bigint":
      return value.toString();
    case "boolean":
      return value ? "true" : "false";
    case "undefined":
    case "function":
    case "symbol":
      return undefined;
  }

  if (value === null) return "null";
  if (Array.isArray(value)) {
    return `[${value.map((item) => toJsonText(item) ?? "null").join(",")}]`;
  }

  const members: string[] = [];
  for (const [key, member] of Object.entries(value as object)) {
    const text = toJsonText(member);
    if (text !== undefined) members.push(`${JSON.stringify(key)}:${text}`);
  }
  return `{${members.join(",")}}`;
}

/** Serializes a value like `pydantic_core.to_json`. */
export function toJsonBytes(value: unknown): Uint8Array {
  return textEncoder.encode(toJsonText(value) ?? "null");
}

// ---------------------------------------------------------------------------
// json.loads / json.dumps
// ---------------------------------------------------------------------------

/** A number token, kept verbatim so it can be re-emitted the way Python would. */
export class PythonJsonNumber {
  constructor(readonly raw: string) {}
}

export type PythonJsonValue =
  | null
  | boolean
  | string
  | PythonJsonNumber
  | PythonJsonValue[]
  | PythonJsonObject;

/** A JSON object with insertion-ordered keys, like a Python `dict`. */
export type PythonJsonObject = Map<string, PythonJsonValue>;

export class PythonJsonDecodeError extends Error {
  constructor(message: string, position: number) {
    super(`${message} (char ${position})`);
    this.name = "PythonJsonDecodeError";
  }
}

const NUMBER_PATTERN = /-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][-+]?\d+)?/y;
const INTEGER_PATTERN = /^-?\d+$/;
const WHITESPACE = new Set([" ", "\t", "\n", "\r"]);
const SIMPLE_ESCAPES: Record<string, string> = {
  "\"": "\"",
  "\\": "\\",
  "/": "/",
  b: "\b",
  f: "\f",
  n: "\n",
  r: "\r",
  t: "\t",
};

class Parser {
  private pos = 0;

  constructor(private readonly text: string) {}

  parse(): PythonJsonValue {
    const value = this.value();
    this.skipWhitespace();
    if (this.pos !== this.text.length) this.fail("Extra data");
    return value;
  }

  private fail(message: string): never {
    throw new PythonJsonDecodeError(message, this.pos);
  }

  private skipWhitespace(): void {
    while (WHITESPACE.has(this.text[this.pos] ?? "")) this.pos++;
  }

  private consume(literal: string): boolean {
    if (this.text.startsWith(literal, this.pos)) {
      this.pos += literal.length;
      return true;
    }
    return false;
  }

  private value(): PythonJsonValue {
    this.skipWhitespace();
    const char = this.text[this.pos];
    if (char === "{") return this.object();
    if (char === "[") return this.array();
    if (char === "\"") return this.string();
    if (this.consume("null")) return null;
    if (this.consume("true")) return true;
    if (this.consume("false")) return false;
    // Python's json.loads also accepts these non-standard constants.
    for (const constant of ["NaN", "Infinity", "-Infinity"]) {
      if (this.consume(constant)) return new PythonJsonNumber(constant);
    }
    NUMBER_PATTERN.lastIndex = this.pos;
    const match = NUMBER_PATTERN.exec(this.text);
    if (match) {
      this.pos += match[0].length;
      return new PythonJsonNumber(match[0]);
    }
    return this.fail("Expecting value");
  }

  private object(): PythonJsonObject {
    const result: PythonJsonObject = new Map();
    this.pos++;
    this.skipWhitespace();
    if (this.consume("}")) return result;
    for (;;) {
      this.skipWhitespace();
      if (this.text[this.pos] !== "\"") {
        this.fail("Expecting property name enclosed in double quotes");
      }
      const key = this.string();
      this.skipWhitespace();
      if (!this.consume(":")) this.fail("Expecting ':' delimiter");
      // Like a Python dict: a duplicate key keeps its first position and
      // takes the last value.
      result.set(key, this.value());
      this.skipWhitespace();
      if (this.consume("}")) return result;
      if (!this.consume(",")) this.fail("Expecting ',' delimiter");
    }
  }

  private array(): PythonJsonValue[] {
    const result: PythonJsonValue[] = [];
    this.pos++;
    this.skipWhitespace();
    if (this.consume("]")) return result;
    for (;;) {
      result.push(this.value());
      this.skipWhitespace();
      if (this.consume("]")) return result;
      if (!this.consume(",")) this.fail("Expecting ',' delimiter");
    }
  }

  private string(): string {
    this.pos++;
    let result = "";
    for (;;) {
      const char = this.text[this.pos];
      if (char === undefined) this.fail("Unterminated string");
      this.pos++;
      if (char === "\"") return result;
      if (char === "\\") {
        const escape = this.text[this.pos];
        this.pos++;
        if (escape === "u") {
          const hex = this.text.slice(this.pos, this.pos + 4);
          if (!/^[0-9a-fA-F]{4}$/.test(hex)) this.fail("Invalid \\uXXXX escape");
          result += String.fromCharCode(parseInt(hex, 16));
          this.pos += 4;
        } else if (escape !== undefined && escape in SIMPLE_ESCAPES) {
          result += SIMPLE_ESCAPES[escape];
        } else {
          this.fail("Invalid \\escape");
        }
      } else if (char.charCodeAt(0) < 0x20) {
        this.fail("Invalid control character");
      } else {
        result += char;
      }
    }
  }
}

/**
 * Parses UTF-8 JSON bytes like Python's `json.loads`.
 *
 * @throws PythonJsonDecodeError when the bytes are not valid JSON.
 * @throws TypeError when the bytes are not valid UTF-8.
 */
export function parsePythonJson(data: Uint8Array): PythonJsonValue {
  const text = new TextDecoder("utf-8", { fatal: true }).decode(data);
  return new Parser(text).parse();
}

function toJsValue(value: PythonJsonValue): unknown {
  if (value instanceof PythonJsonNumber) return Number(value.raw);
  if (Array.isArray(value)) return value.map(toJsValue);
  if (value instanceof Map) {
    return Object.fromEntries(
      Array.from(value, ([key, member]) => [key, toJsValue(member)]),
    );
  }
  return value;
}

/**
 * Parses UTF-8 JSON bytes into plain JavaScript values, like Python's
 * `json.loads`. Unlike `JSON.parse`, it accepts the `NaN`, `Infinity` and
 * `-Infinity` that Python writes, and it rejects invalid UTF-8 instead of
 * replacing it.
 *
 * @throws PythonJsonDecodeError when the bytes are not valid JSON.
 * @throws TypeError when the bytes are not valid UTF-8.
 */
export function loadsPythonJson(data: Uint8Array): unknown {
  return toJsValue(parsePythonJson(data));
}

/** Escapes a string like `json.dumps` with `ensure_ascii=True`. */
function escapeAscii(value: string): string {
  let result = "\"";
  for (let i = 0; i < value.length; i++) {
    const char = value[i]!;
    const code = value.charCodeAt(i);
    if (char === "\"") result += "\\\"";
    else if (char === "\\") result += "\\\\";
    else if (char === "\n") result += "\\n";
    else if (char === "\r") result += "\\r";
    else if (char === "\t") result += "\\t";
    else if (char === "\b") result += "\\b";
    else if (char === "\f") result += "\\f";
    else if (code < 0x20 || code > 0x7e) {
      result += `\\u${code.toString(16).padStart(4, "0")}`;
    } else result += char;
  }
  return `${result}"`;
}

function formatNumberToken(raw: string): string {
  if (INTEGER_PATTERN.test(raw)) return BigInt(raw).toString();
  return formatPythonFloat(Number(raw));
}

function dumpsText(value: PythonJsonValue): string {
  if (value === null) return "null";
  if (value === true) return "true";
  if (value === false) return "false";
  if (typeof value === "string") return escapeAscii(value);
  if (value instanceof PythonJsonNumber) return formatNumberToken(value.raw);
  if (Array.isArray(value)) return `[${value.map(dumpsText).join(", ")}]`;
  const members = Array.from(
    value,
    ([key, member]) => `${escapeAscii(key)}: ${dumpsText(member)}`,
  );
  return `{${members.join(", ")}}`;
}

/** Serializes a parsed value like Python's `json.dumps(obj).encode()`. */
export function dumpsPythonJson(value: PythonJsonValue): Uint8Array {
  return textEncoder.encode(dumpsText(value));
}
