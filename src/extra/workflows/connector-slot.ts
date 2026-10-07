/**
 * A declared connector dependency for a workflow execution, like the Python
 * client's `ConnectorSlot`.
 *
 * @example
 * ```ts
 * const gmail: ConnectorSlot = { connectorName: "gmail" };
 * const notion: ConnectorSlot = {
 *   connectorName: "notion",
 *   credentialsName: "work-account",
 * };
 * ```
 */
export type ConnectorSlot = {
  connectorName: string;
  credentialsName?: string | null | undefined;
};

/**
 * The `extensions` of a workflow execution request carrying connector
 * bindings, in the shape the API expects.
 */
export type WorkflowExtensions = {
  mistralai: {
    connectors: {
      bindings: Array<{ connector_name: string; credentials_name?: string }>;
    };
  };
};

/**
 * Builds the `extensions` of a workflow execution request from connector
 * slots, like the Python client's `WorkflowExtensions.from_connectors(...).to_dict()`.
 *
 * @example
 * ```ts
 * await client.workflows.executeWorkflow({
 *   workflowIdentifier: "my-workflow",
 *   workflowExecutionRequest: {
 *     input: { query: "summarize my emails" },
 *     extensions: workflowExtensions([{ connectorName: "gmail" }]),
 *   },
 * });
 * ```
 */
export function workflowExtensions(
  connectors: readonly ConnectorSlot[],
): WorkflowExtensions {
  return {
    mistralai: {
      connectors: {
        bindings: connectors.map(({ connectorName, credentialsName }) => ({
          connector_name: connectorName,
          ...(credentialsName != null && { credentials_name: credentialsName }),
        })),
      },
    },
  };
}
