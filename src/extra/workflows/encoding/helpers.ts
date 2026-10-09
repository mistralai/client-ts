import { ClientSDK } from "../../../lib/sdks.js";
import type { WorkflowEncodingHook } from "../../../hooks/workflow_encoding.js";
import { getSchedulerNamespace } from "../helpers.js";
import { WorkflowEncodingConfig } from "./config.js";
import { PayloadEncoder } from "./payload-encoder.js";

/**
 * Checks for the hook's brand rather than `instanceof`: the client may have
 * been built from a different copy of the SDK's modules than this entry point
 * (see `WorkflowEncodingHook._mistralWorkflowEncodingHook`).
 */
function isWorkflowEncodingHook(hook: unknown): hook is WorkflowEncodingHook {
  return typeof hook === "object"
    && hook !== null
    && (hook as { _mistralWorkflowEncodingHook?: unknown })
        ._mistralWorkflowEncodingHook === true;
}

export type ConfigureWorkflowEncodingOptions = {
  /**
   * The workflow namespace, under which offloaded payloads are stored. When
   * omitted, it is fetched from the workflows API with the client.
   */
  namespace?: string | undefined;
};

/**
 * Configures workflow payload encoding for a client: workflow inputs are then
 * encoded (encryption, compression, blob storage offloading) before they are
 * sent, and results and events are decoded when received.
 *
 * @param client - The Mistral client to configure.
 * @param config - The workflow encoding configuration.
 * @param options - See {@link ConfigureWorkflowEncodingOptions}.
 * @throws WorkflowPayloadEncryptionError, WorkflowPayloadOffloadingError or
 *   WorkflowPayloadCompressionError when the configuration is invalid.
 */
export async function configureWorkflowEncoding(
  client: ClientSDK,
  config: WorkflowEncodingConfig,
  options: ConfigureWorkflowEncodingOptions = {},
): Promise<void> {
  const hook = client._options.hooks?.beforeRequestHooks.find(
    isWorkflowEncodingHook,
  );
  if (!hook) {
    throw new Error("WorkflowEncodingHook is not registered on this client");
  }
  // Validates the config before calling the API.
  const payloadEncoder = new PayloadEncoder(config);
  const namespace = options.namespace || await getSchedulerNamespace(client);
  hook.configure(payloadEncoder, namespace);
}
