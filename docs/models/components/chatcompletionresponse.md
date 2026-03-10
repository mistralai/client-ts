# ChatCompletionResponse

## Example Usage

```typescript
import { ChatCompletionResponse } from "@mistralai/mistralai/models/components";

let value: ChatCompletionResponse = {
  id: "cmpl-e5cc70bb28c444948073e77776eb30ef",
  object: "chat.completion",
  model: "mistral-small-latest",
  usage: {},
  created: 1702256327,
  choices: [],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  | cmpl-e5cc70bb28c444948073e77776eb30ef                                                |
| `object`                                                                             | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  | chat.completion                                                                      |
| `model`                                                                              | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  | mistral-small-latest                                                                 |
| `usage`                                                                              | [components.UsageInfo](../../models/components/usageinfo.md)                         | :heavy_check_mark:                                                                   | N/A                                                                                  |                                                                                      |
| `created`                                                                            | *number*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  | 1702256327                                                                           |
| `choices`                                                                            | [components.ChatCompletionChoice](../../models/components/chatcompletionchoice.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |                                                                                      |