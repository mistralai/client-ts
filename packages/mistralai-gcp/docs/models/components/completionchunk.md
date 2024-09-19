# CompletionChunk

## Example Usage

```typescript
import { CompletionChunk } from "@mistralai/mistralai-gcp/models/components";

let value: CompletionChunk = {
  id: "<id>",
  model: "Spyder",
  usage: {
    promptTokens: 16,
    completionTokens: 34,
    totalTokens: 50,
  },
  choices: [
    {
      index: 602763,
      delta: {},
      finishReason: "tool_calls",
    },
  ],
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                     | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `object`                                                                                                 | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `created`                                                                                                | *number*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `model`                                                                                                  | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `usage`                                                                                                  | [components.UsageInfo](../../models/components/usageinfo.md)                                             | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `choices`                                                                                                | [components.CompletionResponseStreamChoice](../../models/components/completionresponsestreamchoice.md)[] | :heavy_check_mark:                                                                                       | N/A                                                                                                      |