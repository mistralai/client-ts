# ConnectorListUserCredentialsV1Request

## Example Usage

```typescript
import { ConnectorListUserCredentialsV1Request } from "@mistralai/mistralai/models/operations";

let value: ConnectorListUserCredentialsV1Request = {
  connectorIdOrName: "498be9cf-b892-4fff-9e83-bafc5e807db8",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `connectorIdOrName`                                                                            | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `authType`                                                                                     | [components.OutboundAuthenticationType](../../models/components/outboundauthenticationtype.md) | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `fetchDefault`                                                                                 | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | N/A                                                                                            |