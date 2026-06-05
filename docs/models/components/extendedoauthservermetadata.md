# ExtendedOAuthServerMetadata

Custom superset of RFC 8414 OAuth 2.0 Authorization Server Metadata.

Stored at connector creation time (provided for HTTP connectors, discovered via .well-known for MCP).
Mirrors the shape of .well-known/oauth-authorization-server responses.

## Example Usage

```typescript
import { ExtendedOAuthServerMetadata } from "@mistralai/mistralai/models/components";

let value: ExtendedOAuthServerMetadata = {
  issuer: "https://frozen-sundae.info",
  authorizationEndpoint: "https://hospitable-husband.name",
  tokenEndpoint: "https://inferior-archaeology.info",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `issuer`                                                             | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `authorizationEndpoint`                                              | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `tokenEndpoint`                                                      | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `registrationEndpoint`                                               | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `scopesSupported`                                                    | *string*[]                                                           | :heavy_minus_sign:                                                   | N/A                                                                  |
| `responseTypesSupported`                                             | *string*[]                                                           | :heavy_minus_sign:                                                   | N/A                                                                  |
| `responseModesSupported`                                             | *string*[]                                                           | :heavy_minus_sign:                                                   | N/A                                                                  |
| `grantTypesSupported`                                                | *string*[]                                                           | :heavy_minus_sign:                                                   | N/A                                                                  |
| `tokenEndpointAuthMethodsSupported`                                  | *string*[]                                                           | :heavy_minus_sign:                                                   | N/A                                                                  |
| `tokenEndpointAuthSigningAlgValuesSupported`                         | *string*[]                                                           | :heavy_minus_sign:                                                   | N/A                                                                  |
| `serviceDocumentation`                                               | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `uiLocalesSupported`                                                 | *string*[]                                                           | :heavy_minus_sign:                                                   | N/A                                                                  |
| `opPolicyUri`                                                        | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `opTosUri`                                                           | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `revocationEndpoint`                                                 | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `revocationEndpointAuthMethodsSupported`                             | *string*[]                                                           | :heavy_minus_sign:                                                   | N/A                                                                  |
| `revocationEndpointAuthSigningAlgValuesSupported`                    | *string*[]                                                           | :heavy_minus_sign:                                                   | N/A                                                                  |
| `introspectionEndpoint`                                              | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `introspectionEndpointAuthMethodsSupported`                          | *string*[]                                                           | :heavy_minus_sign:                                                   | N/A                                                                  |
| `introspectionEndpointAuthSigningAlgValuesSupported`                 | *string*[]                                                           | :heavy_minus_sign:                                                   | N/A                                                                  |
| `codeChallengeMethodsSupported`                                      | *string*[]                                                           | :heavy_minus_sign:                                                   | N/A                                                                  |
| `clientIdMetadataDocumentSupported`                                  | *boolean*                                                            | :heavy_minus_sign:                                                   | N/A                                                                  |
| `xOrgServerMetadata`                                                 | [components.OAuthMetadata](../../models/components/oauthmetadata.md) | :heavy_minus_sign:                                                   | N/A                                                                  |
| `xResourceUrl`                                                       | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |