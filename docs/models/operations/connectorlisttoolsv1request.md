# ConnectorListToolsV1Request

## Example Usage

```typescript
import { ConnectorListToolsV1Request } from "@mistralai/mistralai/models/operations";

let value: ConnectorListToolsV1Request = {
  connectorIdOrName: "<value>",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `page`                                                                                           | *number*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `pageSize`                                                                                       | *number*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `refresh`                                                                                        | *boolean*                                                                                        | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `pretty`                                                                                         | *boolean*                                                                                        | :heavy_minus_sign:                                                                               | Return a simplified payload with only name, description, annotations, and a compact inputSchema. |
| `credentialsName`                                                                                | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `connectorIdOrName`                                                                              | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |