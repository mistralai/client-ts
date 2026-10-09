# ConnectorDeleteCredentialsRequest

## Example Usage

```typescript
import { ConnectorDeleteCredentialsRequest } from "@mistralai/mistralai/models/operations";

let value: ConnectorDeleteCredentialsRequest = {
  credentialsName: "<value>",
  connectorIdOrName: "c9988354-1e27-4ddc-b092-88e618800fc4",
  consumerScope: "user",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `credentialsName`                                                                                                        | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `connectorIdOrName`                                                                                                      | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `consumerScope`                                                                                                          | [operations.ConnectorDeleteCredentialsConsumerScope](../../models/operations/connectordeletecredentialsconsumerscope.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |