# AuthenticationConfiguration

## Example Usage

```typescript
import { AuthenticationConfiguration } from "@mistralai/mistralai/models/components";

let value: AuthenticationConfiguration = {
  name: "<value>",
  authenticationType: "none",
  scope: "system",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `name`                                                                                         | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `title`                                                                                        | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `authenticationType`                                                                           | [components.OutboundAuthenticationType](../../models/components/outboundauthenticationtype.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `scope`                                                                                        | [components.ConsumerType](../../models/components/consumertype.md)                             | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `status`                                                                                       | [components.CredentialsStatus](../../models/components/credentialsstatus.md)                   | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `isDefault`                                                                                    | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | N/A                                                                                            |