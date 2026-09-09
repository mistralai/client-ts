# ConnectorMCPPublicUpdateAuthMethod1


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
  oauth2ServerMetadata: {
    issuer: "https://crooked-section.info/",
    tokenEndpoint: "https://sparkling-contractor.info",
  },
  grantType: "client_credentials",
  tokenEndpointAuthMethod: "client_secret_post",
};
```

