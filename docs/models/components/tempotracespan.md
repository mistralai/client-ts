# TempoTraceSpan

## Example Usage

```typescript
import { TempoTraceSpan } from "@mistralai/mistralai/models/components";

let value: TempoTraceSpan = {
  traceId: "<id>",
  spanId: "<id>",
  name: "<value>",
  kind: "SPAN_KIND_CLIENT",
  startTimeUnixNano: "<value>",
  endTimeUnixNano: "<value>",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `traceId`                                                                          | *string*                                                                           | :heavy_check_mark:                                                                 | The trace ID of the scope                                                          |
| `spanId`                                                                           | *string*                                                                           | :heavy_check_mark:                                                                 | The span ID of the scope                                                           |
| `parentSpanId`                                                                     | *string*                                                                           | :heavy_minus_sign:                                                                 | The parent span ID of the scope                                                    |
| `name`                                                                             | *string*                                                                           | :heavy_check_mark:                                                                 | The name of the scope                                                              |
| `kind`                                                                             | [components.TempoTraceScopeKind](../../models/components/tempotracescopekind.md)   | :heavy_check_mark:                                                                 | N/A                                                                                |
| `startTimeUnixNano`                                                                | *string*                                                                           | :heavy_check_mark:                                                                 | The start time of the scope in Unix nano                                           |
| `endTimeUnixNano`                                                                  | *string*                                                                           | :heavy_check_mark:                                                                 | The end time of the scope in Unix nano                                             |
| `attributes`                                                                       | [components.TempoTraceAttribute](../../models/components/tempotraceattribute.md)[] | :heavy_minus_sign:                                                                 | The attributes of the scope                                                        |
| `events`                                                                           | [components.TempoTraceEvent](../../models/components/tempotraceevent.md)[]         | :heavy_minus_sign:                                                                 | The events of the scope                                                            |