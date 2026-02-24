# AgentConversation

## Example Usage

```typescript
import { AgentConversation } from "@mistralai/mistralai/models/components";

let value: AgentConversation = {
  id: "<id>",
  createdAt: new Date("2024-02-26T11:27:08.647Z"),
  updatedAt: new Date("2024-04-02T21:29:31.420Z"),
  agentId: "<id>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | Name given to the conversation.                                                               |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Description of the what the conversation is about.                                            |
| `metadata`                                                                                    | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | Custom metadata for the conversation.                                                         |
| `object`                                                                                      | *"conversation"*                                                                              | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `agentId`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `agentVersion`                                                                                | *components.AgentConversationAgentVersion*                                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |