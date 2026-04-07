# WorkflowExecutionTraceEvent

## Example Usage

```typescript
import { WorkflowExecutionTraceEvent } from "@mistralai/mistralai/models/components";

let value: WorkflowExecutionTraceEvent = {
  name: "<value>",
  id: "<id>",
  timestampUnixNano: 750667,
  attributes: {},
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `type`                                                                     | [components.EventType](../../models/components/eventtype.md)               | :heavy_minus_sign:                                                         | N/A                                                                        |
| `name`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | Name of the event                                                          |
| `id`                                                                       | *string*                                                                   | :heavy_check_mark:                                                         | The ID of the event                                                        |
| `timestampUnixNano`                                                        | *number*                                                                   | :heavy_check_mark:                                                         | The timestamp of the event in nanoseconds since the Unix epoch             |
| `attributes`                                                               | Record<string, *components.WorkflowExecutionTraceSummaryAttributesValues*> | :heavy_check_mark:                                                         | The attributes of the event                                                |
| `internal`                                                                 | *boolean*                                                                  | :heavy_minus_sign:                                                         | Whether the event is internal                                              |