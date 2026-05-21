# ScheduleFutureExecution

## Example Usage

```typescript
import { ScheduleFutureExecution } from "@mistralai/mistralai/models/components";

let value: ScheduleFutureExecution = {
  scheduledAt: new Date("2024-12-31T22:00:11.723Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `scheduledAt`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Time the execution is scheduled to run.                                                       |