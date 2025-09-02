# ConversationEvents

## Example Usage

```typescript
import { ConversationEvents } from "@mistralai/mistralai/models/components";

let value: ConversationEvents = {
  event: "function.call.delta",
  data: {
    type: "tool.execution.started",
    outputIndex: 0,
    id: "<id>",
    name: "code_interpreter",
    arguments: "<value>",
  },
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `event`                                                         | [components.SSETypes](../../models/components/ssetypes.md)      | :heavy_check_mark:                                              | Server side events sent when streaming a conversation response. |
| `data`                                                          | *components.ConversationEventsData*                             | :heavy_check_mark:                                              | N/A                                                             |