# AgentHandoffDoneEvent

## Example Usage

```typescript
import { AgentHandoffDoneEvent } from "@mistralai/mistralai/models/components";

let value: AgentHandoffDoneEvent = {
  id: "<id>",
  nextAgentId: "<id>",
  nextAgentName: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | [components.AgentHandoffDoneEventType](../../models/components/agenthandoffdoneeventtype.md)  | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `outputIndex`                                                                                 | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `nextAgentId`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `nextAgentName`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |