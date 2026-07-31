# Aggregation

## Example Usage

```typescript
import { Aggregation } from "@mistralai/mistralai/models/components";

let value: Aggregation = {
  data: [
    {
      metricName: "<value>",
    },
  ],
  meta: {
    fromTimestamp: new Date("2025-07-27T20:41:29.975Z"),
    toTimestamp: new Date("2026-01-09T05:49:31.450Z"),
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `data`                                                                   | [components.AggregationRow](../../models/components/aggregationrow.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |
| `meta`                                                                   | [components.AggregationMeta](../../models/components/aggregationmeta.md) | :heavy_check_mark:                                                       | N/A                                                                      |