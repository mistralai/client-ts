# PublicAuthenticationMethod

Public view of an authentication method, without secrets.

## Example Usage

```typescript
import { PublicAuthenticationMethod } from "@mistralai/mistralai/models/components";

let value: PublicAuthenticationMethod = {
  methodType: "bearer",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `methodType`                                                                                           | [components.AuthenticationType](../../models/components/authenticationtype.md)                         | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `headers`                                                                                              | [components.ConnectorAuthenticationHeader](../../models/components/connectorauthenticationheader.md)[] | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |