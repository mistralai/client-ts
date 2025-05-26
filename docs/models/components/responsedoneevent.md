# ResponseDoneEvent

## Example Usage

```typescript
import { ResponseDoneEvent } from "@mistralai/mistralai/models/components";

let value: ResponseDoneEvent = {
  usage: {},
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | [components.ResponseDoneEventType](../../models/components/responsedoneeventtype.md)          | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `usage`                                                                                       | [components.ConversationUsageInfo](../../models/components/conversationusageinfo.md)          | :heavy_check_mark:                                                                            | N/A                                                                                           |