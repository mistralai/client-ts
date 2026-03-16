# CustomConnector

## Example Usage

```typescript
import { CustomConnector } from "@mistralai/mistralai/models/components";

let value: CustomConnector = {
  type: "connector",
  connectorId: "<id>",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `type`                                                                       | *"connector"*                                                                | :heavy_check_mark:                                                           | N/A                                                                          |
| `connectorId`                                                                | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `authorization`                                                              | *components.Authorization*                                                   | :heavy_minus_sign:                                                           | N/A                                                                          |
| `toolConfiguration`                                                          | [components.ToolConfiguration](../../models/components/toolconfiguration.md) | :heavy_minus_sign:                                                           | N/A                                                                          |