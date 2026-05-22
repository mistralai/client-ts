# MCPServerRemote

Remote transport endpoint (SEP-2127).

## Example Usage

```typescript
import { MCPServerRemote } from "@mistralai/mistralai/models/components";

let value: MCPServerRemote = {
  type: "streamable-http",
  url: "https://lovely-dream.net/",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                         | [components.MCPServerRemoteType](../../models/components/mcpserverremotetype.md)                               | :heavy_check_mark:                                                                                             | Transport type                                                                                                 |
| `url`                                                                                                          | *string*                                                                                                       | :heavy_check_mark:                                                                                             | Transport endpoint URL                                                                                         |
| `supportedProtocolVersions`                                                                                    | *string*[]                                                                                                     | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `headers`                                                                                                      | [components.MCPServerRemoteHeader](../../models/components/mcpserverremoteheader.md)[]                         | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `authentication`                                                                                               | [components.MCPServerAuthenticationRequirement](../../models/components/mcpserverauthenticationrequirement.md) | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |