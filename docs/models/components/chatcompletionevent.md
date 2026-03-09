# ChatCompletionEvent

## Example Usage

```typescript
import { ChatCompletionEvent } from "@mistralai/mistralai/models/components";

let value: ChatCompletionEvent = {
  eventId: "<id>",
  correlationId: "<id>",
  createdAt: new Date("2025-02-22T08:39:37.302Z"),
  extraFields: {
    "key": "<value>",
  },
  nbInputTokens: 93325,
  nbOutputTokens: 849060,
  enabledTools: [
    {},
    {},
    {
      "key": "<value>",
    },
  ],
  requestMessages: [],
  responseMessages: [
    {
      "key": "<value>",
    },
    {},
    {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
  ],
  nbMessages: 578308,
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