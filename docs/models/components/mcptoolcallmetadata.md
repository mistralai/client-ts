# MCPToolCallMetadata

Metadata wrapper for MCP tool call responses.

Nests MCP-specific fields under `mcp_meta` to avoid collisions with other
metadata keys (e.g. `tool_call_result`) in Harmattan's streaming deltas.

## Example Usage

```typescript
import { MCPToolCallMetadata } from "@mistralai/mistralai/models/components";

let value: MCPToolCallMetadata = {};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `mcpMeta`                                                                    | [components.MCPResultMetadata](../../models/components/mcpresultmetadata.md) | :heavy_minus_sign:                                                           | N/A                                                                          |
| `additionalProperties`                                                       | Record<string, *any*>                                                        | :heavy_minus_sign:                                                           | N/A                                                                          |