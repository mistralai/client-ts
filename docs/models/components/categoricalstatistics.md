# CategoricalStatistics

## Example Usage

```typescript
import { CategoricalStatistics } from "@mistralai/mistralai/models/components";

let value: CategoricalStatistics = {
  frequencies: {},
  mode: [
    "<value 1>",
    "<value 2>",
  ],
  count: 864329,
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `type`                                                                               | *"categorical"*                                                                      | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `frequencies`                                                                        | Record<string, *number*>                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `mode`                                                                               | *string*[]                                                                           | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `count`                                                                              | *number*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `values`                                                                             | [components.ScalarStatisticValue](../../models/components/scalarstatisticvalue.md)[] | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `excludedCount`                                                                      | *number*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `confusionMatrix`                                                                    | [components.ConfusionMatrix](../../models/components/confusionmatrix.md)             | :heavy_minus_sign:                                                                   | N/A                                                                                  |