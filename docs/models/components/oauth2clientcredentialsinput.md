# OAuth2ClientCredentialsInput

## Example Usage

```typescript
import { OAuth2ClientCredentialsInput } from "@mistralai/mistralai/models/components";

let value: OAuth2ClientCredentialsInput = {
  grantType: "client_credentials",
  clientId: "<id>",
  clientSecret: "CrvrBy61fS_s42C",
};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `grantType`            | *"client_credentials"* | :heavy_check_mark:     | N/A                    |
| `clientId`             | *string*               | :heavy_check_mark:     | N/A                    |
| `clientSecret`         | *string*               | :heavy_check_mark:     | N/A                    |