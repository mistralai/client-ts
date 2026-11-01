# TriggerEvent

## Example Usage

```typescript
import { TriggerEvent } from "@mistralai/mistralai/models/components";

let value: TriggerEvent = {
  eventId: "b2064761-c367-4dd8-859d-3fa781d98e50",
  triggerId: "28408ec6-ad58-49e4-8d90-d4b5c9713293",
  sourceId: "88c99094-696a-4864-81e7-8b58c9a8a9fc",
  status: "SUBMISSION_FAILED",
  receivedAt: new Date("2026-07-31T12:23:52.373Z"),
  submittedAt: new Date("2026-01-05T19:24:38.385Z"),
  triggeredAt: null,
  detail: "<value>",
  url: "https://mysterious-kick.info",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `eventId`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `triggerId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `sourceId`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [components.TriggerStatusValue](../../models/components/triggerstatusvalue.md)                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `receivedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `submittedAt`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `triggeredAt`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `detail`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `url`                                                                                         | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |