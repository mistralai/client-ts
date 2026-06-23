# TempoTraceBatch

## Example Usage

```typescript
import { TempoTraceBatch } from "@mistralai/mistralai/models/components";

let value: TempoTraceBatch = {
  resource: {},
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `resource`                                                                         | [components.TempoTraceResource](../../models/components/tempotraceresource.md)     | :heavy_check_mark:                                                                 | N/A                                                                                |
| `scopeSpans`                                                                       | [components.TempoTraceScopeSpan](../../models/components/tempotracescopespan.md)[] | :heavy_minus_sign:                                                                 | The spans of the scope                                                             |