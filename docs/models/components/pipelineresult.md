# PipelineResult

## Example Usage

```typescript
import { PipelineResult } from "@mistralai/mistralai/models/components";

let value: PipelineResult = {
  traceId: "<id>",
  spanId: "<id>",
  spanName: "<value>",
  durationNs: 914711,
  evaluatedAt: new Date("2026-05-21T04:30:50.509Z"),
  judgeScores: {},
  judgeLabels: {},
  judgeExplanations: {},
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `traceId`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `spanId`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `spanName`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `durationNs`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `evaluatedAt`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `judgeScores`                                                                                 | Record<string, *number*>                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `judgeLabels`                                                                                 | Record<string, *string*>                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `judgeExplanations`                                                                           | Record<string, *string*>                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |