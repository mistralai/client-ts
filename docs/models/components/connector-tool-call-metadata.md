# ConnectorToolCallMetadata

Metadata wrapper for MCP tool call responses.

Nests MCP-specific fields under `mcp_meta` to avoid collisions with other
metadata keys (e.g. `tool_call_result`) in Harmattan's streaming deltas.

## Example Usage

```typescript
import { ConnectorToolCallMetadata } from "@mistralai/mistralai/models/components";

let value: ConnectorToolCallMetadata = {};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `mcpMeta`                                                                                           | [components.ConnectorToolResultMetadata](../../models/components/connector-tool-result-metadata.md) | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `additionalProperties`                                                                              | Record<string, *any*>                                                                               | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |