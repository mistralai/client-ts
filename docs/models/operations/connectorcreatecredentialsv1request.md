# ConnectorCreateCredentialsV1Request

## Example Usage

```typescript
import { ConnectorCreateCredentialsV1Request } from "@mistralai/mistralai/models/operations";

let value: ConnectorCreateCredentialsV1Request = {
  connectorIdOrName: "c2953fc5-2b60-4a02-86fa-add9ed891e9a",
  consumerScope: "user",
  credentialsCreateOrUpdate: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `connectorIdOrName`                                                                                                          | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `consumerScope`                                                                                                              | [operations.ConnectorCreateCredentialsV1ConsumerScope](../../models/operations/connectorcreatecredentialsv1consumerscope.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `credentialsCreateOrUpdate`                                                                                                  | [components.CredentialsCreateOrUpdate](../../models/components/credentialscreateorupdate.md)                                 | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |