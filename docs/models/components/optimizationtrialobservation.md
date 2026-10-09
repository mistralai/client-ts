# OptimizationTrialObservation

## Example Usage

```typescript
import { OptimizationTrialObservation } from "@mistralai/mistralai/models/components";

let value: OptimizationTrialObservation = {
  run: {
    id: "43bcf053-5bb5-4e6c-a41b-eeaacbb7735d",
    createdAt: new Date("2024-04-28T13:20:59.300Z"),
    updatedAt: new Date("2024-06-09T12:43:31.885Z"),
    deletedAt: new Date("2026-12-08T17:38:06.504Z"),
    creatorId: "e55eab93-3918-4b86-a4d9-61cccc55e322",
    evaluationId: "5af3c872-db1c-4fb2-9605-be25b3023630",
    name: "<value>",
    description:
      "delectable babushka syringe to through government tectonics pish alligator consequently",
    tags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    metadata: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
    numGenerations: 868799,
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
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `observationType`                                                                        | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `score`                                                                                  | *number*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `metadata`                                                                               | Record<string, *any*>                                                                    | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `run`                                                                                    | [components.EvaluationRunV2Response](../../models/components/evaluationrunv2response.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |