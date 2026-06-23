# ConnectorListWorkspaceCredentialsV1Request

## Example Usage

```typescript
import { ConnectorListWorkspaceCredentialsV1Request } from "@mistralai/mistralai/models/operations";

let value: ConnectorListWorkspaceCredentialsV1Request = {
  connectorIdOrName: "37422e27-8b24-4e4b-af78-836d8f336792",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `connectorIdOrName`                                                                            | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `authType`                                                                                     | [components.OutboundAuthenticationType](../../models/components/outboundauthenticationtype.md) | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `fetchDefault`                                                                                 | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | N/A                                                                                            |