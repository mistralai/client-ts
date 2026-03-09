# ConversationAppendStreamRequest

## Example Usage

```typescript
import { ConversationAppendStreamRequest } from "@mistralai/mistralai/models/components";

let value: ConversationAppendStreamRequest = {
  completionArgs: {
    responseFormat: {
      type: "text",
    },
  },
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `inputs`                                                                                                                                 | *components.ConversationInputs*                                                                                                          | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |
| `stream`                                                                                                                                 | *boolean*                                                                                                                                | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |
| `store`                                                                                                                                  | *boolean*                                                                                                                                | :heavy_minus_sign:                                                                                                                       | Whether to store the results into our servers or not.                                                                                    |
| `handoffExecution`                                                                                                                       | [components.ConversationAppendStreamRequestHandoffExecution](../../models/components/conversationappendstreamrequesthandoffexecution.md) | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |
| `completionArgs`                                                                                                                         | [components.CompletionArgs](../../models/components/completionargs.md)                                                                   | :heavy_minus_sign:                                                                                                                       | White-listed arguments from the completion API                                                                                           |
| `toolConfirmations`                                                                                                                      | [components.ToolCallConfirmation](../../models/components/toolcallconfirmation.md)[]                                                     | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |