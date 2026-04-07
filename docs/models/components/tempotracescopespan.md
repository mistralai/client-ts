# TempoTraceScopeSpan

## Example Usage

```typescript
import { TempoTraceScopeSpan } from "@mistralai/mistralai/models/components";

let value: TempoTraceScopeSpan = {
  scope: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `scope`                                                                  | [components.TempoTraceScope](../../models/components/tempotracescope.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `spans`                                                                  | [components.TempoTraceSpan](../../models/components/tempotracespan.md)[] | :heavy_minus_sign:                                                       | The spans of the scope                                                   |