# ChatCompletionResponse

## Example Usage

```typescript
import { ChatCompletionResponse } from "@mistralai/mistralai-gcp/models/components";

let value: ChatCompletionResponse = {
  id: "cmpl-e5cc70bb28c444948073e77776eb30ef",
  object: "chat.completion",
  model: "mistral-small-latest",
  usage: {
    promptTokens: 16,
    completionTokens: 34,
    totalTokens: 50,
  },
  created: 1702256327,
  choices: [
    {
      index: 0,
      message: {},
      finishReason: "stop",
    },
  ],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  | cmpl-e5cc70bb28c444948073e77776eb30ef                                                |
| `object`                                                                             | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  | chat.completion                                                                      |
| `model`                                                                              | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  | mistral-small-latest                                                                 |
| `usage`                                                                              | [components.UsageInfo](../../models/components/usageinfo.md)                         | :heavy_check_mark:                                                                   | N/A                                                                                  |                                                                                      |
| `created`                                                                            | *number*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  | 1702256327                                                                           |
| `choices`                                                                            | [components.ChatCompletionChoice](../../models/components/chatcompletionchoice.md)[] | :heavy_minus_sign:                                                                   | N/A                                                                                  |                                                                                      |