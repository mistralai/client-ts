# ConnectorCreateOrUpdateUserCredentialsV1Request

## Example Usage

```typescript
import { ConnectorCreateOrUpdateUserCredentialsV1Request } from "@mistralai/mistralai/models/operations";

let value: ConnectorCreateOrUpdateUserCredentialsV1Request = {
  connectorIdOrName: "68aba676-1209-4fa5-8c6c-458f70486c26",
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