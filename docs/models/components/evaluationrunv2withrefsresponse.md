# EvaluationRunV2WithRefsResponse

## Example Usage

```typescript
import { EvaluationRunV2WithRefsResponse } from "@mistralai/mistralai/models/components";

let value: EvaluationRunV2WithRefsResponse = {
  id: "54563539-001e-482a-b94a-9b0dcd477395",
  createdAt: new Date("2026-02-14T18:13:24.192Z"),
  updatedAt: new Date("2024-05-21T01:54:48.797Z"),
  deletedAt: new Date("2026-12-23T16:32:38.353Z"),
  creatorId: "2d67630d-c57c-4b31-8f1a-72bb795739f8",
  evaluationId: "d079934d-b328-423f-8574-45946b2e2f6f",
  name: "<value>",
  description: "hollow phew unabashedly ameliorate that mature upon",
  tags: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  metadata: {
    "key": "<value>",
  },
  numGenerations: 125578,
  evaluators: [
    {
      id: "3bdc796d-1d7d-46da-b513-f5c33172c56a",
      createdAt: new Date("2025-07-12T07:02:00.427Z"),
      updatedAt: new Date("2025-08-26T10:00:07.134Z"),
      deletedAt: new Date("2024-09-02T08:23:38.060Z"),
      name: "<value>",
      description: "dramatize behind huzzah onto once smooth",
      tags: [
        "<value 1>",
      ],
      numScores: 289878,
    },
  ],
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `id`                                                                                               | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `createdAt`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `updatedAt`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `deletedAt`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `creatorId`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `evaluationId`                                                                                     | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `name`                                                                                             | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `description`                                                                                      | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `tags`                                                                                             | *string*[]                                                                                         | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `metadata`                                                                                         | Record<string, *any*>                                                                              | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `numGenerations`                                                                                   | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `runInfo`                                                                                          | Record<string, *any*>                                                                              | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `status`                                                                                           | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `datasetId`                                                                                        | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `evaluators`                                                                                       | [components.EvaluatorV2](../../models/components/evaluatorv2.md)[]                                 | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `runEvaluators`                                                                                    | [components.EvaluatorV2](../../models/components/evaluatorv2.md)[]                                 | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `system`                                                                                           | [components.SystemV2](../../models/components/systemv2.md)                                         | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `statistics`                                                                                       | Record<string, *components.EvaluatorStatistics*>                                                   | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `goalResults`                                                                                      | Record<string, [components.GoalResult](../../models/components/goalresult.md)>                     | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `passed`                                                                                           | *boolean*                                                                                          | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `runScores`                                                                                        | Record<string, [components.EvaluationRunScoreV2](../../models/components/evaluationrunscorev2.md)> | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `optimization`                                                                                     | [components.RunOptimizationRef](../../models/components/runoptimizationref.md)                     | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `evaluation`                                                                                       | [components.RunEvaluationSummary](../../models/components/runevaluationsummary.md)                 | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `project`                                                                                          | [components.RunProjectSummary](../../models/components/runprojectsummary.md)                       | :heavy_minus_sign:                                                                                 | N/A                                                                                                |