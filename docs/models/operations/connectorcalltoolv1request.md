# ConnectorCallToolV1Request

## Example Usage

```typescript
import { ConnectorCallToolV1Request } from "@mistralai/mistralai/models/operations";

let value: ConnectorCallToolV1Request = {
  toolName: "<value>",
  connectorIdOrName: "909094ac-55e7-4be6-9e55-1b09a2dce643",
  connectorCallToolRequest: {},
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `toolName`                                                                                 | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `connectorIdOrName`                                                                        | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `credentialsName`                                                                          | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `connectorCallToolRequest`                                                                 | [components.ConnectorCallToolRequest](../../models/components/connectorcalltoolrequest.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |