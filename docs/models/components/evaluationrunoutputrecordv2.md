# EvaluationRunOutputRecordV2

## Example Usage

```typescript
import { EvaluationRunOutputRecordV2 } from "@mistralai/mistralai/models/components";

let value: EvaluationRunOutputRecordV2 = {
  id: "5dd4bed6-2995-4450-8d4c-5bbcd0b791e6",
  createdAt: new Date("2025-09-02T22:12:22.822Z"),
  updatedAt: new Date("2024-10-15T04:01:38.038Z"),
  deletedAt: new Date("2025-02-08T02:47:29.333Z"),
  metadata: {},
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `id`                                                                                           | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `createdAt`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `updatedAt`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `deletedAt`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `metadata`                                                                                     | Record<string, *any*>                                                                          | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `recordInfo`                                                                                   | Record<string, *any*>                                                                          | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `generations`                                                                                  | [components.EvaluationRunGenerationV2](../../models/components/evaluationrungenerationv2.md)[] | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `statistics`                                                                                   | Record<string, *components.EvaluatorStatistics*>                                               | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `goalResults`                                                                                  | Record<string, [components.GoalResult](../../models/components/goalresult.md)>                 | :heavy_minus_sign:                                                                             | N/A                                                                                            |