# ActivityTaskFailedAttributes

Attributes for activity task failed events (final failure after all retries).

## Example Usage

```typescript
import { ActivityTaskFailedAttributes } from "@mistralai/mistralai/models/components";

let value: ActivityTaskFailedAttributes = {
  taskId: "<id>",
  activityName: "<value>",
  attempt: 679140,
  failure: {
    message: "<value>",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `taskId`                                                         | *string*                                                         | :heavy_check_mark:                                               | Unique identifier for the activity task within the workflow.     |
| `activityName`                                                   | *string*                                                         | :heavy_check_mark:                                               | The registered name of the activity being executed.              |
| `attempt`                                                        | *number*                                                         | :heavy_check_mark:                                               | The final attempt number that failed (1-indexed).                |
| `failure`                                                        | [components.Failure](../../models/components/failure.md)         | :heavy_check_mark:                                               | Represents an error or exception that occurred during execution. |