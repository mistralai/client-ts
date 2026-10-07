# RunStatisticsResponse

## Example Usage

```typescript
import { RunStatisticsResponse } from "@mistralai/mistralai/models/components";

let value: RunStatisticsResponse = {
  runId: "806c8e2d-3c0f-4dcf-b664-fa7f0e43ce01",
  statistics: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `runId`                                                                        | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `statistics`                                                                   | Record<string, *components.EvaluatorStatistics*>                               | :heavy_check_mark:                                                             | N/A                                                                            |
| `goalResults`                                                                  | Record<string, [components.GoalResult](../../models/components/goalresult.md)> | :heavy_minus_sign:                                                             | N/A                                                                            |
| `passed`                                                                       | *boolean*                                                                      | :heavy_minus_sign:                                                             | N/A                                                                            |