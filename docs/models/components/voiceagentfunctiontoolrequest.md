# VoiceAgentFunctionToolRequest

## Example Usage

```typescript
import { VoiceAgentFunctionToolRequest } from "@mistralai/mistralai/models/components";

let value: VoiceAgentFunctionToolRequest = {
  type: "function",
  function: {
    name: "<value>",
    parameters: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `type`                                                                     | *"function"*                                                               | :heavy_check_mark:                                                         | N/A                                                                        |
| `function`                                                                 | [components.FunctionRequest](../../models/components/functionrequest.md)   | :heavy_check_mark:                                                         | N/A                                                                        |
| `filler`                                                                   | [components.StaticToolFiller](../../models/components/statictoolfiller.md) | :heavy_minus_sign:                                                         | N/A                                                                        |
| `timeoutMs`                                                                | *number*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |