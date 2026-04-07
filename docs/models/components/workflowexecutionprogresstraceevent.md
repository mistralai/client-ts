# WorkflowExecutionProgressTraceEvent

## Example Usage

```typescript
import { WorkflowExecutionProgressTraceEvent } from "@mistralai/mistralai/models/components";

let value: WorkflowExecutionProgressTraceEvent = {
  name: "<value>",
  id: "<id>",
  timestampUnixNano: 455621,
  attributes: {},
  startTimeUnixMs: 92535,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `type`                                                                           | [components.EventType](../../models/components/eventtype.md)                     | :heavy_minus_sign:                                                               | N/A                                                                              |
| `name`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | Name of the event                                                                |
| `id`                                                                             | *string*                                                                         | :heavy_check_mark:                                                               | The ID of the event                                                              |
| `timestampUnixNano`                                                              | *number*                                                                         | :heavy_check_mark:                                                               | The timestamp of the event in nanoseconds since the Unix epoch                   |
| `attributes`                                                                     | Record<string, *components.WorkflowExecutionTraceSummaryAttributesValues*>       | :heavy_check_mark:                                                               | The attributes of the event                                                      |
| `internal`                                                                       | *boolean*                                                                        | :heavy_minus_sign:                                                               | Whether the event is internal                                                    |
| `status`                                                                         | [components.EventProgressStatus](../../models/components/eventprogressstatus.md) | :heavy_minus_sign:                                                               | N/A                                                                              |
| `startTimeUnixMs`                                                                | *number*                                                                         | :heavy_check_mark:                                                               | The start time of the event in milliseconds since the Unix epoch                 |
| `endTimeUnixMs`                                                                  | *number*                                                                         | :heavy_minus_sign:                                                               | The end time of the event in milliseconds since the Unix epoch                   |
| `error`                                                                          | *string*                                                                         | :heavy_minus_sign:                                                               | The error message, if any                                                        |