# CredentialsResponse

## Example Usage

```typescript
import { CredentialsResponse } from "@mistralai/mistralai/models/components";

let value: CredentialsResponse = {
  credentials: [
    {
      name: "<value>",
      authenticationType: "none",
    },
  ],
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `credentials`                                                                                      | [components.AuthenticationConfiguration](../../models/components/authenticationconfiguration.md)[] | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `connectorPresetCredentialsForAuth`                                                                | [components.OutboundAuthenticationType](../../models/components/outboundauthenticationtype.md)[]   | :heavy_minus_sign:                                                                                 | N/A                                                                                                |