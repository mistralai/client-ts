# VoiceAgentCustomConnector

## Example Usage

```typescript
import { VoiceAgentCustomConnector } from "@mistralai/mistralai/models/components";

let value: VoiceAgentCustomConnector = {
  type: "connector",
  connectorId: "<id>",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `type`                                                                       | *"connector"*                                                                | :heavy_check_mark:                                                           | N/A                                                                          |
| `connectorId`                                                                | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `authorization`                                                              | *components.VoiceAgentCustomConnectorAuthorization*                          | :heavy_minus_sign:                                                           | N/A                                                                          |
| `toolConfiguration`                                                          | [components.ToolConfiguration](../../models/components/toolconfiguration.md) | :heavy_minus_sign:                                                           | N/A                                                                          |
| `filler`                                                                     | [components.StaticToolFiller](../../models/components/statictoolfiller.md)   | :heavy_minus_sign:                                                           | N/A                                                                          |