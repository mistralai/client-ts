# ConnectorCallToolV1Request

## Example Usage

```typescript
import { ConnectorCallToolV1Request } from "@mistralai/mistralai/models/operations";

let value: ConnectorCallToolV1Request = {
  toolName: "<value>",
  connectorIdOrName: "<value>",
  mcpToolCallRequest: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `toolName`                                                                     | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `connectorIdOrName`                                                            | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `mcpToolCallRequest`                                                           | [components.MCPToolCallRequest](../../models/components/mcptoolcallrequest.md) | :heavy_check_mark:                                                             | N/A                                                                            |