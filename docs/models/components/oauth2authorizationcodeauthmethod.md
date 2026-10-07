# OAuth2AuthorizationCodeAuthMethod

## Example Usage

```typescript
import { OAuth2AuthorizationCodeAuthMethod } from "@mistralai/mistralai/models/components";

let value: OAuth2AuthorizationCodeAuthMethod = {
  grantType: "authorization_code",
  authData: {
    clientId: "<id>",
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `methodType`                                                                                           | *"oauth2"*                                                                                             | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `headers`                                                                                              | [components.ConnectorAuthenticationHeader](../../models/components/connectorauthenticationheader.md)[] | :heavy_minus_sign:                                                                                     | Optional headers sent with requests for this auth method.                                              |
| `grantType`                                                                                            | *"authorization_code"*                                                                                 | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `authData`                                                                                             | [components.AuthData](../../models/components/authdata.md)                                             | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `oauth2ServerMetadata`                                                                                 | [components.ExtendedOAuthServerMetadata](../../models/components/extendedoauthservermetadata.md)       | :heavy_minus_sign:                                                                                     | OAuth2 authorization server metadata (endpoints, scopes_supported, ...).                               |