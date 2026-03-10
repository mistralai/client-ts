# ChatCompletionChoice

## Example Usage

```typescript
import { ChatCompletionChoice } from "@mistralai/mistralai-gcp/models/components";

let value: ChatCompletionChoice = {
  index: 0,
  message: {},
  finishReason: "stop",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    | Example                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `index`                                                                                                        | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            | 0                                                                                                              |
| `message`                                                                                                      | [components.AssistantMessage](../../models/components/assistant-message.md)                                    | :heavy_check_mark:                                                                                             | N/A                                                                                                            |                                                                                                                |
| `finishReason`                                                                                                 | [components.ChatCompletionChoiceFinishReason](../../models/components/chat-completion-choice-finish-reason.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            | stop                                                                                                           |