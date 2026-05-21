# ScheduleRecentExecution

## Example Usage

```typescript
import { ScheduleRecentExecution } from "@mistralai/mistralai/models/components";

let value: ScheduleRecentExecution = {
  scheduledAt: new Date("2026-01-07T01:12:44.288Z"),
  startedAt: new Date("2026-02-03T19:20:29.122Z"),
  executionId: "<id>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `scheduledAt`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Time the execution was scheduled to run.                                                      |
| `startedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Actual time the execution started.                                                            |
| `executionId`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | ID of the workflow execution that was started.                                                |