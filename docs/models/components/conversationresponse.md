# ConversationResponse

The response after appending new entries to the conversation.

## Example Usage

```typescript
import { ConversationResponse } from "@mistralai/mistralai/models/components";

let value: ConversationResponse = {
  conversationId: "<id>",
  outputs: [
    {
      object: "entry",
      type: "tool.execution",
      name: "code_interpreter",
      arguments: "<value>",
    },
  ],
  usage: {},
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `object`                                                                                       | [components.ConversationResponseObject](../../models/components/conversationresponseobject.md) | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `conversationId`                                                                               | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `outputs`                                                                                      | *components.Outputs*[]                                                                         | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `usage`                                                                                        | [components.ConversationUsageInfo](../../models/components/conversationusageinfo.md)           | :heavy_check_mark:                                                                             | N/A                                                                                            |