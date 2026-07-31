# MetricDefinition

## Example Usage

```typescript
import { MetricDefinition } from "@mistralai/mistralai/models/components";

let value: MetricDefinition = {
  measure: "<value>",
  aggregation: "avg",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `measure`                                                                    | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `aggregation`                                                                | [components.MetricAggregation](../../models/components/metricaggregation.md) | :heavy_check_mark:                                                           | N/A                                                                          |