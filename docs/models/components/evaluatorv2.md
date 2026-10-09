# EvaluatorV2

## Example Usage

```typescript
import { EvaluatorV2 } from "@mistralai/mistralai/models/components";

let value: EvaluatorV2 = {
  id: "b46c723b-c28f-4788-847c-6238c6388cbc",
  createdAt: new Date("2025-12-13T05:15:32.477Z"),
  updatedAt: new Date("2026-10-09T23:43:30.265Z"),
  deletedAt: new Date("2026-02-07T16:51:56.282Z"),
  name: "<value>",
  description: "swerve against dependable",
  tags: [],
  numScores: 47853,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `deletedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `description`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `tags`                                                                                        | *string*[]                                                                                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `numScores`                                                                                   | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `goal`                                                                                        | [components.GoalSpec](../../models/components/goalspec.md)                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `aggregateGoal`                                                                               | [components.GoalSpec](../../models/components/goalspec.md)                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `statistics`                                                                                  | *components.Statistic*[]                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `weight`                                                                                      | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `direction`                                                                                   | [components.EvaluatorV2Direction](../../models/components/evaluatorv2direction.md)            | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `minValue`                                                                                    | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `maxValue`                                                                                    | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |