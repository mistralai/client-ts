# ConnectorListOrganizationCredentialsV1Request

## Example Usage

```typescript
import { ConnectorListOrganizationCredentialsV1Request } from "@mistralai/mistralai/models/operations";

let value: ConnectorListOrganizationCredentialsV1Request = {
  connectorIdOrName: "dac9a727-e10f-4d77-98d5-cb6a3f1c6676",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `connectorIdOrName`                                                                            | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `authType`                                                                                     | [components.OutboundAuthenticationType](../../models/components/outboundauthenticationtype.md) | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `fetchDefault`                                                                                 | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | N/A                                                                                            |