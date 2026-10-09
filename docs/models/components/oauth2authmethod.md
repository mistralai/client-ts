# OAuth2AuthMethod


## Supported Types

### `components.OAuth2AuthorizationCodeAuthMethod`

```typescript
const value: components.OAuth2AuthorizationCodeAuthMethod = {
  grantType: "authorization_code",
  authData: {
    clientId: "<id>",
  },
};
```

### `components.OAuth2ClientCredentialsAuthMethod`

```typescript
const value: components.OAuth2ClientCredentialsAuthMethod = {
  grantType: "client_credentials",
  tokenEndpointAuthMethod: "client_secret_post",
  oauth2ServerMetadata: {
    issuer: "https://steel-gymnast.net/",
    tokenEndpoint: "https://dental-intervention.info",
  },
};
```

