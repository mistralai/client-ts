# TempoTraceEvent

## Example Usage

```typescript
import { TempoTraceEvent } from "@mistralai/mistralai/models/components";

let value: TempoTraceEvent = {
  name: "<value>",
  timeUnixNano: "<value>",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `name`                                                                             | *string*                                                                           | :heavy_check_mark:                                                                 | The name of the event                                                              |
| `timeUnixNano`                                                                     | *string*                                                                           | :heavy_check_mark:                                                                 | The time of the event in Unix nano                                                 |
| `attributes`                                                                       | [components.TempoTraceAttribute](../../models/components/tempotraceattribute.md)[] | :heavy_minus_sign:                                                                 | The attributes of the event                                                        |