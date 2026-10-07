# EvaluationRunGenerationV2

## Example Usage

```typescript
import { EvaluationRunGenerationV2 } from "@mistralai/mistralai/models/components";

let value: EvaluationRunGenerationV2 = {
  id: "8d1871ba-0ffa-41f8-9984-25f3aef6b37f",
  createdAt: new Date("2024-04-10T00:33:17.405Z"),
  updatedAt: new Date("2024-01-30T10:13:26.368Z"),
  deletedAt: new Date("2026-11-04T20:07:43.880Z"),
  output: "<value>",
  metadata: {
    "key": "<value>",
  },
  status: "<value>",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `id`                                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `createdAt`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `updatedAt`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `deletedAt`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `output`                                                                                             | *any*                                                                                                | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `metadata`                                                                                           | Record<string, *any*>                                                                                | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `status`                                                                                             | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `error`                                                                                              | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `scores`                                                                                             | Record<string, [components.EvaluationRunScoreV2](../../models/components/evaluationrunscorev2.md)[]> | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `statistics`                                                                                         | Record<string, *components.EvaluatorStatistics*>                                                     | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `goalResults`                                                                                        | Record<string, [components.GoalResult](../../models/components/goalresult.md)>                       | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |