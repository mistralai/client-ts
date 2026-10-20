# OAuth2ClientCredentialsInput

## Example Usage

```typescript
import { OAuth2ClientCredentialsInput } from "@mistralai/mistralai/models/components";

let value: OAuth2ClientCredentialsInput = {
  grantType: "client_credentials",
  clientId: "<id>",
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `grantType`                                                                       | *"client_credentials"*                                                            | :heavy_check_mark:                                                                | N/A                                                                               |
| `clientId`                                                                        | *string*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `clientSecret`                                                                    | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |
| `clientCertificate`                                                               | *string*                                                                          | :heavy_minus_sign:                                                                | PEM X.509 certificate registered on the OAuth2 client, for private_key_jwt.       |
| `clientPrivateKey`                                                                | *string*                                                                          | :heavy_minus_sign:                                                                | Unencrypted PEM RSA private key matching client_certificate, for private_key_jwt. |