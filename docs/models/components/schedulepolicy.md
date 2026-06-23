# SchedulePolicy

## Example Usage

```typescript
import { SchedulePolicy } from "@mistralai/mistralai/models/components";

let value: SchedulePolicy = {};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `catchupWindowSeconds`                                                                                   | *number*                                                                                                 | :heavy_minus_sign:                                                                                       | After a Temporal server is unavailable, amount of time in seconds in the past to execute missed actions. |
| `overlap`                                                                                                | [components.ScheduleOverlapPolicy](../../models/components/scheduleoverlappolicy.md)                     | :heavy_minus_sign:                                                                                       | Controls what happens when a workflow would be started by a schedule but<br/>one is already running.     |
| `pauseOnFailure`                                                                                         | *boolean*                                                                                                | :heavy_minus_sign:                                                                                       | Whether to pause the schedule after a workflow failure.                                                  |