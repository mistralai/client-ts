/**
 * Wire models for encoded workflow payloads, mirroring the Python client's
 * `mistralai.extra.workflows.encoding.models`. Field names are the API's
 * snake_case names, since these objects are sent and received as-is.
 */

export const EncodedPayloadOptions = {
  Offloaded: "offloaded",
  Encrypted: "encrypted",
  PartiallyEncrypted: "encrypted-partial",
  Compressed: "compressed",
} as const;
export type EncodedPayloadOption =
  (typeof EncodedPayloadOptions)[keyof typeof EncodedPayloadOptions];

const ENCODED_PAYLOAD_OPTION_VALUES: ReadonlySet<string> = new Set(
  Object.values(EncodedPayloadOptions),
);

export function isEncodedPayloadOption(
  value: unknown,
): value is EncodedPayloadOption {
  return typeof value === "string" && ENCODED_PAYLOAD_OPTION_VALUES.has(value);
}

export const ENCRYPTED_STR_FIELD_TYPE = "__encrypted_str__";

/** A string field encrypted in `partial` encryption mode. */
export type EncryptedStrField = {
  field_type: typeof ENCRYPTED_STR_FIELD_TYPE;
  data: string;
};

/**
 * Marks a string for encryption when payload encryption is in `partial`
 * mode. Use it anywhere in a workflow input:
 *
 * ```ts
 * input: { user: "alice", token: encryptedStrField("secret") }
 * ```
 */
export function encryptedStrField(data: string): EncryptedStrField {
  return { field_type: ENCRYPTED_STR_FIELD_TYPE, data };
}

/**
 * The workflow execution a payload belongs to. Offloaded payloads are stored
 * under a key derived from it.
 */
export type WorkflowContext = {
  namespace: string;
  executionId: string;
};

/** An encoded workflow input, as sent to the workflows API. */
export type NetworkEncodedInput = {
  b64payload: string;
  encoding_options: EncodedPayloadOption[];
  empty: boolean;
};

/** An encoded workflow result, as returned by the workflows API. */
export type NetworkEncodedResult = {
  b64payload: string;
  encoding_options: EncodedPayloadOption[];
};
