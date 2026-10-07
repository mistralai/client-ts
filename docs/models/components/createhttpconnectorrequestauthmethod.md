# CreateHTTPConnectorRequestAuthMethod


## Supported Types

### `components.BearerAuthMethod`

```typescript
const value: components.BearerAuthMethod = {
  methodType: "bearer",
};
```

### `components.NoneAuthMethod`

```typescript
const value: components.NoneAuthMethod = {
  methodType: "none",
};
```

### `components.OAuth2AuthMethod`

```typescript
const value: components.OAuth2AuthMethod = {
  grantType: "client_credentials",
  tokenEndpointAuthMethod: "client_secret_post",
  oauth2ServerMetadata: {
    issuer: "https://steel-gymnast.net/",
    tokenEndpoint: "https://dental-intervention.info",
  },
};
```

