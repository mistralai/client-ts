# FIMCompletionResponse

## Example Usage

```typescript
import { FIMCompletionResponse } from "@mistralai/mistralai/models/components";

let value: FIMCompletionResponse = {
  id: "cmpl-e5cc70bb28c444948073e77776eb30ef",
  object: "chat.completion",
  model: "codestral-latest",
  usage: {},
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
| `model`                                                                              | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  | codestral-latest                                                                     |
| `usage`                                                                              | [components.UsageInfo](../../models/components/usageinfo.md)                         | :heavy_check_mark:                                                                   | N/A                                                                                  |                                                                                      |
| `created`                                                                            | *number*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  | 1702256327                                                                           |
| `choices`                                                                            | [components.ChatCompletionChoice](../../models/components/chatcompletionchoice.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |                                                                                      |