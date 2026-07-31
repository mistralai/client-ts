# AggregationRequest

## Example Usage

```typescript
import { AggregationRequest } from "@mistralai/mistralai/models/components";

let value: AggregationRequest = {
  metric: {
    measure: "<value>",
    aggregation: "p90",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `metric`                                                                   | [components.MetricDefinition](../../models/components/metricdefinition.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `dimensions`                                                               | *string*[]                                                                 | :heavy_minus_sign:                                                         | N/A                                                                        |
| `timeDimension`                                                            | [components.TimeDimension](../../models/components/timedimension.md)       | :heavy_minus_sign:                                                         | N/A                                                                        |
| `searchExpression`                                                         | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `orderBy`                                                                  | [components.OrderByClause](../../models/components/orderbyclause.md)[]     | :heavy_minus_sign:                                                         | N/A                                                                        |
| `limit`                                                                    | *number*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |