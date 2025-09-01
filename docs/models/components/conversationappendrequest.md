# ConversationAppendRequest

## Example Usage

```typescript
import { ConversationAppendRequest } from "@mistralai/mistralai/models/components";

let value: ConversationAppendRequest = {
  inputs: [
    {
      object: "entry",
      type: "agent.handoff",
      previousAgentId: "<id>",
      previousAgentName: "<value>",
      nextAgentId: "<id>",
      nextAgentName: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `inputs`                                                                                                                     | *components.ConversationInputs*                                                                                              | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `stream`                                                                                                                     | *boolean*                                                                                                                    | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `store`                                                                                                                      | *boolean*                                                                                                                    | :heavy_minus_sign:                                                                                                           | Whether to store the results into our servers or not.                                                                        |
| `handoffExecution`                                                                                                           | [components.ConversationAppendRequestHandoffExecution](../../models/components/conversationappendrequesthandoffexecution.md) | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `completionArgs`                                                                                                             | [components.CompletionArgs](../../models/components/completionargs.md)                                                       | :heavy_minus_sign:                                                                                                           | White-listed arguments from the completion API                                                                               |