# AppendConversationRequest

## Example Usage

```typescript
import { AppendConversationRequest } from "@mistralai/mistralai/models/components";

let value: AppendConversationRequest = {
  completionArgs: {
    responseFormat: {
      type: "text",
    },
  },
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `inputs`                                                                                                                     | *components.ConversationInputs*                                                                                              | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `stream`                                                                                                                     | *boolean*                                                                                                                    | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `store`                                                                                                                      | *boolean*                                                                                                                    | :heavy_minus_sign:                                                                                                           | Whether to store the results into our servers or not.                                                                        |
| `handoffExecution`                                                                                                           | [components.AppendConversationRequestHandoffExecution](../../models/components/appendconversationrequesthandoffexecution.md) | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `completionArgs`                                                                                                             | [components.CompletionArgs](../../models/components/completionargs.md)                                                       | :heavy_minus_sign:                                                                                                           | White-listed arguments from the completion API                                                                               |
| `toolConfirmations`                                                                                                          | [components.ToolCallConfirmation](../../models/components/toolcallconfirmation.md)[]                                         | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |