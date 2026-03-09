# ChatCompletionEventPreview

## Example Usage

```typescript
import { ChatCompletionEventPreview } from "@mistralai/mistralai/models/components";

let value: ChatCompletionEventPreview = {
  eventId: "<id>",
  correlationId: "<id>",
  createdAt: new Date("2025-11-23T22:21:05.827Z"),
  extraFields: {},
  nbInputTokens: 694641,
  nbOutputTokens: 130503,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `eventId`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `correlationId`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `extraFields`                                                                                 | Record<string, *components.ExtraFields*>                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `nbInputTokens`                                                                               | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `nbOutputTokens`                                                                              | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |