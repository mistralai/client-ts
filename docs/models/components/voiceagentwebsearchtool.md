# VoiceAgentWebSearchTool

## Example Usage

```typescript
import { VoiceAgentWebSearchTool } from "@mistralai/mistralai/models/components";

let value: VoiceAgentWebSearchTool = {
  type: "web_search",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `toolConfiguration`                                                          | [components.ToolConfiguration](../../models/components/toolconfiguration.md) | :heavy_minus_sign:                                                           | N/A                                                                          |
| `type`                                                                       | *"web_search"*                                                               | :heavy_check_mark:                                                           | N/A                                                                          |
| `filler`                                                                     | [components.StaticToolFiller](../../models/components/statictoolfiller.md)   | :heavy_minus_sign:                                                           | N/A                                                                          |