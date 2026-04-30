# ConnectorListWorkspaceCredentialsV1Request

## Example Usage

```typescript
import { ConnectorListWorkspaceCredentialsV1Request } from "@mistralai/mistralai/models/operations";

let value: ConnectorListWorkspaceCredentialsV1Request = {
  connectorIdOrName: "<value>",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `authType`                                                                                     | [components.OutboundAuthenticationType](../../models/components/outboundauthenticationtype.md) | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `fetchDefault`                                                                                 | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `connectorIdOrName`                                                                            | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |