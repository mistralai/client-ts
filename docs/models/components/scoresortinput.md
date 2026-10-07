# ScoreSortInput

## Example Usage

```typescript
import { ScoreSortInput } from "@mistralai/mistralai/models/components";

let value: ScoreSortInput = {
  kind: "score",
  evaluatorName: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `kind`                                                                         | *"score"*                                                                      | :heavy_check_mark:                                                             | N/A                                                                            |
| `evaluatorName`                                                                | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `metric`                                                                       | [components.NumericScoreMetric](../../models/components/numericscoremetric.md) | :heavy_minus_sign:                                                             | N/A                                                                            |
| `direction`                                                                    | [components.SortDirection](../../models/components/sortdirection.md)           | :heavy_minus_sign:                                                             | N/A                                                                            |