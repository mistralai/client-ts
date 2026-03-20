# AgentConversation

## Example Usage

```typescript
import { AgentConversation } from "@mistralai/mistralai/models/components";

let value: AgentConversation = {
  id: "<id>",
  createdAt: new Date("2024-10-27T20:06:14.728Z"),
  updatedAt: new Date("2025-03-20T15:21:06.324Z"),
  agentId: "<id>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | Name given to the conversation.                                                               |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Description of the what the conversation is about.                                            |
| `metadata`                                                                                    | [components.MetadataDict](../../models/components/metadatadict.md)                            | :heavy_minus_sign:                                                                            | Custom metadata for the conversation.                                                         |
| `object`                                                                                      | *"conversation"*                                                                              | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `agentId`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `agentVersion`                                                                                | *components.AgentConversationAgentVersion*                                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |