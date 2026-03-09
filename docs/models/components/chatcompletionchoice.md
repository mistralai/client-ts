# ChatCompletionChoice

## Example Usage

```typescript
import { ChatCompletionChoice } from "@mistralai/mistralai/models/components";

let value: ChatCompletionChoice = {
  index: 0,
  message: {},
  finishReason: "stop",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `index`                                                                    | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        | 0                                                                          |
| `message`                                                                  | [components.AssistantMessage](../../models/components/assistantmessage.md) | :heavy_check_mark:                                                         | N/A                                                                        |                                                                            |
| `finishReason`                                                             | [components.FinishReason](../../models/components/finishreason.md)         | :heavy_check_mark:                                                         | N/A                                                                        | stop                                                                       |