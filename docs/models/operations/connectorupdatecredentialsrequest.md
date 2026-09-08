# ConnectorUpdateCredentialsRequest

## Example Usage

```typescript
import { ConnectorUpdateCredentialsRequest } from "@mistralai/mistralai/models/operations";

let value: ConnectorUpdateCredentialsRequest = {
  connectorIdOrName: "cb1aa0ab-da5e-4538-ae3d-40d855f2c0ba",
  consumerScope: "user",
  credentialsCreateOrUpdate: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `connectorIdOrName`                                                                                                      | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `consumerScope`                                                                                                          | [operations.ConnectorUpdateCredentialsConsumerScope](../../models/operations/connectorupdatecredentialsconsumerscope.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `credentialsCreateOrUpdate`                                                                                              | [components.CredentialsCreateOrUpdate](../../models/components/credentialscreateorupdate.md)                             | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |