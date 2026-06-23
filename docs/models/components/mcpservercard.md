# MCPServerCard

## Example Usage

```typescript
import { MCPServerCard } from "@mistralai/mistralai/models/components";

let value: MCPServerCard = {
  name: "<value>",
  version: "<value>",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `dollarSchema`                                                                   | *string*                                                                         | :heavy_minus_sign:                                                               | URL to the JSON schema definition                                                |
| `name`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | Server identifier in reverse-DNS format with exactly one /                       |
| `version`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | Server version (semantic versioning preferred)                                   |
| `capabilities`                                                                   | [components.ServerCapabilities](../../models/components/servercapabilities.md)   | :heavy_minus_sign:                                                               | Capabilities that a server may support.                                          |
| `title`                                                                          | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `description`                                                                    | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `websiteUrl`                                                                     | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `repository`                                                                     | [components.MCPServerRepository](../../models/components/mcpserverrepository.md) | :heavy_minus_sign:                                                               | N/A                                                                              |
| `icons`                                                                          | [components.MCPServerIcon](../../models/components/mcpservericon.md)[]           | :heavy_minus_sign:                                                               | N/A                                                                              |
| `remotes`                                                                        | [components.MCPServerRemote](../../models/components/mcpserverremote.md)[]       | :heavy_minus_sign:                                                               | N/A                                                                              |
| `requires`                                                                       | [components.ClientCapabilities](../../models/components/clientcapabilities.md)   | :heavy_minus_sign:                                                               | N/A                                                                              |
| `resources`                                                                      | *components.Resources*                                                           | :heavy_minus_sign:                                                               | N/A                                                                              |
| `tools`                                                                          | *components.Tools*                                                               | :heavy_minus_sign:                                                               | N/A                                                                              |
| `prompts`                                                                        | *components.Prompts*                                                             | :heavy_minus_sign:                                                               | N/A                                                                              |
| `meta`                                                                           | [components.MCPServerCardMeta](../../models/components/mcpservercardmeta.md)     | :heavy_minus_sign:                                                               | N/A                                                                              |
| `additionalProperties`                                                           | Record<string, *any*>                                                            | :heavy_minus_sign:                                                               | N/A                                                                              |