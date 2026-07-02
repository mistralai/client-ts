# ModelConversation

## Example Usage

```typescript
import { ModelConversation } from "@mistralai/mistralai/models/components";

let value: ModelConversation = {
  completionArgs: {
    responseFormat: {
      type: "text",
    },
  },
  id: "<id>",
  createdAt: new Date("2024-10-24T08:41:46.904Z"),
  updatedAt: new Date("2024-07-31T21:14:27.441Z"),
  model: "Model T",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `instructions`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | Instruction prompt the model will follow during the conversation.                             |
| `tools`                                                                                       | *components.ModelConversationTool*[]                                                          | :heavy_minus_sign:                                                                            | List of tools which are available to the model during the conversation.                       |
| `completionArgs`                                                                              | [components.CompletionArgs](../../models/components/completionargs.md)                        | :heavy_minus_sign:                                                                            | White-listed arguments from the completion API                                                |
| `guardrails`                                                                                  | [components.GuardrailConfig](../../models/components/guardrailconfig.md)[]                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | Name given to the conversation.                                                               |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Description of the what the conversation is about.                                            |
| `metadata`                                                                                    | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | Custom metadata for the conversation.                                                         |
| `object`                                                                                      | *"conversation"*                                                                              | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `model`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |