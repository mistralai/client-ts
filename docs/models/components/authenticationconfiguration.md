# AuthenticationConfiguration

## Example Usage

```typescript
import { AuthenticationConfiguration } from "@mistralai/mistralai/models/components";

let value: AuthenticationConfiguration = {
  name: "<value>",
  authenticationType: "bearer",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `name`                                                                                         | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `authenticationType`                                                                           | [components.OutboundAuthenticationType](../../models/components/outboundauthenticationtype.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `isDefault`                                                                                    | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | N/A                                                                                            |