# ConnectorCreateOrUpdateWorkspaceCredentialsV1Request

## Example Usage

```typescript
import { ConnectorCreateOrUpdateWorkspaceCredentialsV1Request } from "@mistralai/mistralai/models/operations";

let value: ConnectorCreateOrUpdateWorkspaceCredentialsV1Request = {
  connectorIdOrName: "d5c2e52c-4412-4ef5-8de7-603dafe6b738",
  credentialsCreateOrUpdate: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `connectorIdOrName`                                                                          | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `credentialsCreateOrUpdate`                                                                  | [components.CredentialsCreateOrUpdate](../../models/components/credentialscreateorupdate.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |