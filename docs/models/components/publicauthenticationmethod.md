# PublicAuthenticationMethod

Public view of an authentication method, without secrets.

## Example Usage

```typescript
import { PublicAuthenticationMethod } from "@mistralai/mistralai/models/components";

let value: PublicAuthenticationMethod = {
  methodType: "github_app",
  hasDefaultCredentials: true,
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `methodType`                                                                                           | [components.OutboundAuthenticationType](../../models/components/outboundauthenticationtype.md)         | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `headers`                                                                                              | [components.ConnectorAuthenticationHeader](../../models/components/connectorauthenticationheader.md)[] | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `globalHeaders`                                                                                        | Record<string, [components.GlobalHeaderValue](../../models/components/globalheadervalue.md)>           | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `hasDefaultCredentials`                                                                                | *boolean*                                                                                              | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `grantType`                                                                                            | [components.OAuth2GrantType](../../models/components/oauth2granttype.md)                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `oauth2ServerMetadata`                                                                                 | [components.ExtendedOAuthServerMetadata](../../models/components/extendedoauthservermetadata.md)       | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |