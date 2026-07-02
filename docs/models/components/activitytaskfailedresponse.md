# ActivityTaskFailedResponse

Emitted when an activity task fails after exhausting all retry attempts.

This is a terminal event indicating the activity could not complete successfully.

## Example Usage

```typescript
import { ActivityTaskFailedResponse } from "@mistralai/mistralai/models/components";

let value: ActivityTaskFailedResponse = {
  eventId: "<id>",
  eventTimestamp: 207483,
  rootWorkflowExecId: "<id>",
  parentWorkflowExecId: "<id>",
  workflowExecId: "<id>",
  workflowRunId: "<id>",
  workflowName: "<value>",
  attributes: {
    taskId: "<id>",
    activityName: "<value>",
    attempt: 982208,
    failure: {
      message: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `eventId`                                                                                                             | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | Unique identifier for this event instance.                                                                            |
| `eventTimestamp`                                                                                                      | *number*                                                                                                              | :heavy_check_mark:                                                                                                    | Unix timestamp in nanoseconds when the event was created.                                                             |
| `rootWorkflowExecId`                                                                                                  | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | Execution ID of the root workflow that initiated this execution chain.                                                |
| `parentWorkflowExecId`                                                                                                | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | Execution ID of the parent workflow that initiated this execution. If this is a root workflow, this field is not set. |
| `workflowExecId`                                                                                                      | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | Execution ID of the workflow that emitted this event.                                                                 |
| `workflowRunId`                                                                                                       | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | Run ID of the workflow execution. Changes on continue-as-new while workflow_exec_id stays the same.                   |
| `workflowName`                                                                                                        | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | The registered name of the workflow that emitted this event.                                                          |
| `eventType`                                                                                                           | *"ACTIVITY_TASK_FAILED"*                                                                                              | :heavy_minus_sign:                                                                                                    | Event type discriminator.                                                                                             |
| `attributes`                                                                                                          | [components.ActivityTaskFailedAttributes](../../models/components/activitytaskfailedattributes.md)                    | :heavy_check_mark:                                                                                                    | Attributes for activity task failed events (final failure after all retries).                                         |