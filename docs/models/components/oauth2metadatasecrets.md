# Oauth2MetadataSecrets

OAuth2 client credentials stored alongside a connector's authentication method.

Used by OAuth2 and Slack App auth types for token exchange and refresh flows.
Contains the client credentials obtained during OAuth2 Dynamic Client Registration
or provided at connector creation time.

## Example Usage

```typescript
import { Oauth2MetadataSecrets } from "@mistralai/mistralai/models/components";

let value: Oauth2MetadataSecrets = {};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `clientId`              | *string*                | :heavy_minus_sign:      | N/A                     |
| `clientSecret`          | *string*                | :heavy_minus_sign:      | N/A                     |
| `clientIdIssuedAt`      | *number*                | :heavy_minus_sign:      | N/A                     |
| `clientSecretExpiresAt` | *number*                | :heavy_minus_sign:      | N/A                     |