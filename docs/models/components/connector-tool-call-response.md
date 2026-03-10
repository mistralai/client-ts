# ConnectorToolCallResponse

Response from calling an MCP tool.

We override mcp_types.CallToolResult because:
- Models only support `content`, not `structuredContent` at top level
- Downstream consumers (le-chat, etc.) need structuredContent/isError/_meta via metadata

SYNC: Keep in sync with Harmattan (orchestrator) for harmonized tool result processing.

## Example Usage

```typescript
import { ConnectorToolCallResponse } from "@mistralai/mistralai/models/components";

let value: ConnectorToolCallResponse = {
  content: [
    {
      name: "<value>",
      uri: "https://lone-issue.com/",
      type: "resource_link",
    },
  ],
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `content`                                                                                       | *components.ConnectorToolCallResponseContent*[]                                                 | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `metadata`                                                                                      | [components.ConnectorToolCallMetadata](../../models/components/connector-tool-call-metadata.md) | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `additionalProperties`                                                                          | Record<string, *any*>                                                                           | :heavy_minus_sign:                                                                              | N/A                                                                                             |