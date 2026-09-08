# OAuth2AuthMethod


## Supported Types

### `components.OAuth2AuthorizationCodeAuthMethod`

```typescript
const value: components.OAuth2AuthorizationCodeAuthMethod = {
  oauth2ServerMetadata: {
    issuer: "https://crooked-section.info/",
    tokenEndpoint: "https://sparkling-contractor.info",
  },
  grantType: "authorization_code",
  authData: {
    clientId: "<id>",
  },
};
```

### `components.OAuth2ClientCredentialsAuthMethod`

```typescript
const value: components.OAuth2ClientCredentialsAuthMethod = {
  oauth2ServerMetadata: {
    issuer: "https://crooked-section.info/",
    tokenEndpoint: "https://sparkling-contractor.info",
  },
  grantType: "client_credentials",
  tokenEndpointAuthMethod: "client_secret_post",
};
```

