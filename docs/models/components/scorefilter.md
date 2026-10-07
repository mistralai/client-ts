# ScoreFilter

## Example Usage

```typescript
import { ScoreFilter } from "@mistralai/mistralai/models/components";

let value: ScoreFilter = {
  evaluatorName: "<value>",
  metric: "<value>",
  operator: "lt",
  value: 1949.67,
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `evaluatorName`                                                      | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `metric`                                                             | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `operator`                                                           | [components.ScoreOperator](../../models/components/scoreoperator.md) | :heavy_check_mark:                                                   | N/A                                                                  |
| `value`                                                              | *components.ScoreFilterValue*                                        | :heavy_check_mark:                                                   | N/A                                                                  |