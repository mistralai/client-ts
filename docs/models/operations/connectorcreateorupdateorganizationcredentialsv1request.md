# ConnectorCreateOrUpdateOrganizationCredentialsV1Request

## Example Usage

```typescript
import { ConnectorCreateOrUpdateOrganizationCredentialsV1Request } from "@mistralai/mistralai/models/operations";

let value: ConnectorCreateOrUpdateOrganizationCredentialsV1Request = {
  connectorIdOrName: "9552d379-846e-44c4-9419-62bf3441fd83",
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