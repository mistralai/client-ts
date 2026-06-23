# ConnectorListToolsV1Request

## Example Usage

```typescript
import { ConnectorListToolsV1Request } from "@mistralai/mistralai/models/operations";

let value: ConnectorListToolsV1Request = {
  connectorIdOrName: "90231859-d2a4-4ee8-80c3-b2b986efe1db",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `connectorIdOrName`                                                                              | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `page`                                                                                           | *number*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `pageSize`                                                                                       | *number*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `refresh`                                                                                        | *boolean*                                                                                        | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `pretty`                                                                                         | *boolean*                                                                                        | :heavy_minus_sign:                                                                               | Return a simplified payload with only name, description, annotations, and a compact inputSchema. |
| `credentialsName`                                                                                | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |