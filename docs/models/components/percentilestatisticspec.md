# PercentileStatisticSpec

The ``p``-th percentile (``0 <= p <= 100``), computed with the type-7 algorithm.

## Example Usage

```typescript
import { PercentileStatisticSpec } from "@mistralai/mistralai/models/components";

let value: PercentileStatisticSpec = {
  kind: "percentile",
  percentile: 111.72,
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `kind`                                                     | *"percentile"*                                             | :heavy_check_mark:                                         | N/A                                                        |
| `percentile`                                               | *components.Percentile*                                    | :heavy_check_mark:                                         | N/A                                                        |
| `goal`                                                     | [components.GoalSpec](../../models/components/goalspec.md) | :heavy_minus_sign:                                         | N/A                                                        |