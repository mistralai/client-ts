# ChatCompletionEvent

## Example Usage

```typescript
import { ChatCompletionEvent } from "@mistralai/mistralai/models/components";

let value: ChatCompletionEvent = {
  eventId: "<id>",
  correlationId: "<id>",
  createdAt: new Date("2025-02-22T08:39:37.302Z"),
  extraFields: {
    "key": "2024-04-12T06:49:23.373Z",
  },
  nbInputTokens: 849060,
  nbOutputTokens: 840468,
  enabledTools: [],
  requestMessages: [],
  responseMessages: [
    {},
  ],
  nbMessages: 771148,
  chatTranscriptionEvents: [],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `eventId`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `correlationId`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `extraFields`                                                                                 | Record<string, *components.ChatCompletionEventExtraFields*>                                   | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `nbInputTokens`                                                                               | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `nbOutputTokens`                                                                              | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `enabledTools`                                                                                | Record<string, *any*>[]                                                                       | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `requestMessages`                                                                             | Record<string, *any*>[]                                                                       | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `responseMessages`                                                                            | Record<string, *any*>[]                                                                       | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `nbMessages`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `chatTranscriptionEvents`                                                                     | [components.ChatTranscriptionEvent](../../models/components/chattranscriptionevent.md)[]      | :heavy_check_mark:                                                                            | N/A                                                                                           |