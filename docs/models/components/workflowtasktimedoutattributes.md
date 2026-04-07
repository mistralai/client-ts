# WorkflowTaskTimedOutAttributes

Attributes for workflow task timed out events.

## Example Usage

```typescript
import { WorkflowTaskTimedOutAttributes } from "@mistralai/mistralai/models/components";

let value: WorkflowTaskTimedOutAttributes = {
  taskId: "<id>",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `taskId`                                                                         | *string*                                                                         | :heavy_check_mark:                                                               | Unique identifier for the task within the workflow execution.                    |
| `timeoutType`                                                                    | *string*                                                                         | :heavy_minus_sign:                                                               | The type of timeout that occurred (e.g., 'START_TO_CLOSE', 'SCHEDULE_TO_START'). |