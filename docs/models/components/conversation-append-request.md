# ConversationAppendRequest

## Example Usage

```typescript
import { ConversationAppendRequest } from "@mistralai/mistralai/models/components";

let value: ConversationAppendRequest = {
  completionArgs: {
    responseFormat: {
      type: "text",
    },
  },
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `inputs`                                                                                                                         | *components.ConversationInputs*                                                                                                  | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |
| `stream`                                                                                                                         | *boolean*                                                                                                                        | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |
| `store`                                                                                                                          | *boolean*                                                                                                                        | :heavy_minus_sign:                                                                                                               | Whether to store the results into our servers or not.                                                                            |
| `handoffExecution`                                                                                                               | [components.ConversationAppendRequestHandoffExecution](../../models/components/conversation-append-request-handoff-execution.md) | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |
| `completionArgs`                                                                                                                 | [components.CompletionArgs](../../models/components/completion-args.md)                                                          | :heavy_minus_sign:                                                                                                               | White-listed arguments from the completion API                                                                                   |
| `toolConfirmations`                                                                                                              | [components.ToolCallConfirmation](../../models/components/tool-call-confirmation.md)[]                                           | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |