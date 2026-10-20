# VoiceAgentFunctionTool

## Example Usage

```typescript
import { VoiceAgentFunctionTool } from "@mistralai/mistralai/models/components";

let value: VoiceAgentFunctionTool = {
  function: {
    name: "<value>",
    parameters: {
      "key": "<value>",
    },
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `type`                                                                                         | [components.VoiceAgentFunctionToolType](../../models/components/voiceagentfunctiontooltype.md) | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `function`                                                                                     | [components.FunctionT](../../models/components/functiont.md)                                   | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `filler`                                                                                       | [components.StaticToolFiller](../../models/components/statictoolfiller.md)                     | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `timeoutMs`                                                                                    | *number*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |