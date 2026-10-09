# EvaluationRunV2Response

## Example Usage

```typescript
import { EvaluationRunV2Response } from "@mistralai/mistralai/models/components";

let value: EvaluationRunV2Response = {
  id: "4802dd06-50c7-48c8-a814-91207abd09c5",
  createdAt: new Date("2026-06-18T22:59:33.457Z"),
  updatedAt: new Date("2025-04-28T02:27:33.153Z"),
  deletedAt: new Date("2024-09-23T09:50:56.873Z"),
  creatorId: "1519772d-dd1c-4fe2-8422-834f2d6562c7",
  evaluationId: "2160bc5a-134d-4c06-af52-7509399b8a20",
  name: "<value>",
  description: "past boo nifty",
  tags: [],
  metadata: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  numGenerations: 45361,
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