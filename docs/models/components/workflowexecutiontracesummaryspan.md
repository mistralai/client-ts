# WorkflowExecutionTraceSummarySpan

## Example Usage

```typescript
import { WorkflowExecutionTraceSummarySpan } from "@mistralai/mistralai/models/components";

let value: WorkflowExecutionTraceSummarySpan = {
  spanId: "<id>",
  name: "<value>",
  startTimeUnixNano: 273139,
  endTimeUnixNano: 260751,
  attributes: {},
  events: [],
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `spanId`                                                                                                       | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The ID of the span                                                                                             |
| `name`                                                                                                         | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The name of the span                                                                                           |
| `startTimeUnixNano`                                                                                            | *number*                                                                                                       | :heavy_check_mark:                                                                                             | The start time of the span in nanoseconds since the Unix epoch                                                 |
| `endTimeUnixNano`                                                                                              | *number*                                                                                                       | :heavy_check_mark:                                                                                             | The end time of the span in nanoseconds since the Unix epoch                                                   |
| `attributes`                                                                                                   | Record<string, *components.WorkflowExecutionTraceSummaryAttributesValues*>                                     | :heavy_check_mark:                                                                                             | The attributes of the span                                                                                     |
| `events`                                                                                                       | [components.WorkflowExecutionTraceEvent](../../models/components/workflowexecutiontraceevent.md)[]             | :heavy_check_mark:                                                                                             | The events of the span                                                                                         |
| `children`                                                                                                     | [components.WorkflowExecutionTraceSummarySpan](../../models/components/workflowexecutiontracesummaryspan.md)[] | :heavy_minus_sign:                                                                                             | The child spans of the span                                                                                    |