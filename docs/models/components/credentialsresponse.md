# CredentialsResponse

## Example Usage

```typescript
import { CredentialsResponse } from "@mistralai/mistralai/models/components";

let value: CredentialsResponse = {
  credentials: [
    {
      name: "<value>",
      authenticationType: "github_app",
      scope: "user",
    },
  ],
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `credentials`                                                                                                           | [components.AuthenticationConfiguration](../../models/components/authenticationconfiguration.md)[]                      | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| ~~`connectorPresetCredentialsForAuth`~~                                                                                 | [components.AuthenticationType](../../models/components/authenticationtype.md)[]                                        | :heavy_minus_sign:                                                                                                      | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible. |