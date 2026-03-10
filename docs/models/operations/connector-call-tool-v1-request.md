# ConnectorCallToolV1Request

## Example Usage

```typescript
import { ConnectorCallToolV1Request } from "@mistralai/mistralai/models/operations";

let value: ConnectorCallToolV1Request = {
  toolName: "<value>",
  connectorIdOrName: "<value>",
  connectorCallToolRequest: {},
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `toolName`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `connectorIdOrName`                                                                           | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `connectorCallToolRequest`                                                                    | [components.ConnectorCallToolRequest](../../models/components/connector-call-tool-request.md) | :heavy_check_mark:                                                                            | N/A                                                                                           |