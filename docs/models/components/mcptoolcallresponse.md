# MCPToolCallResponse

Response from calling an MCP tool.

We override mcp_types.CallToolResult because:
- Models only support `content`, not `structuredContent` at top level
- Downstream consumers (le-chat, etc.) need structuredContent/isError/_meta via metadata

SYNC: Keep in sync with Harmattan (orchestrator) for harmonized tool result processing.

## Example Usage

```typescript
import { MCPToolCallResponse } from "@mistralai/mistralai/models/components";

let value: MCPToolCallResponse = {
  content: [
    {
      data: "<value>",
      mimeType: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `content`                                                                        | *components.Content*[]                                                           | :heavy_check_mark:                                                               | N/A                                                                              |
| `metadata`                                                                       | [components.MCPToolCallMetadata](../../models/components/mcptoolcallmetadata.md) | :heavy_minus_sign:                                                               | N/A                                                                              |
| `additionalProperties`                                                           | Record<string, *any*>                                                            | :heavy_minus_sign:                                                               | N/A                                                                              |