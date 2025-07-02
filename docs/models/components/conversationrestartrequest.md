# ConversationRestartRequest

Request to restart a new conversation from a given entry in the conversation.

## Example Usage

```typescript
import { ConversationRestartRequest } from "@mistralai/mistralai/models/components";

let value: ConversationRestartRequest = {
  inputs: "<value>",
  fromEntryId: "<id>",
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `inputs`                                                                                                                       | *components.ConversationInputs*                                                                                                | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `stream`                                                                                                                       | *boolean*                                                                                                                      | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `store`                                                                                                                        | *boolean*                                                                                                                      | :heavy_minus_sign:                                                                                                             | Whether to store the results into our servers or not.                                                                          |
| `handoffExecution`                                                                                                             | [components.ConversationRestartRequestHandoffExecution](../../models/components/conversationrestartrequesthandoffexecution.md) | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `completionArgs`                                                                                                               | [components.CompletionArgs](../../models/components/completionargs.md)                                                         | :heavy_minus_sign:                                                                                                             | White-listed arguments from the completion API                                                                                 |
| `fromEntryId`                                                                                                                  | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |