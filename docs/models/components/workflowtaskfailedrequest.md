# WorkflowTaskFailedRequest

Emitted when a workflow task fails.

This indicates an error occurred during workflow task execution,
which may trigger a retry depending on configuration.

## Example Usage

```typescript
import { WorkflowTaskFailedRequest } from "@mistralai/mistralai/models/components";

let value: WorkflowTaskFailedRequest = {
  eventId: "<id>",
  rootWorkflowExecId: "<id>",
  workflowExecId: "<id>",
  workflowRunId: "<id>",
  workflowName: "<value>",
  attributes: {
    taskId: "<id>",
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
| `eventTimestamp`                                                                                                      | *number*                                                                                                              | :heavy_minus_sign:                                                                                                    | Unix timestamp in nanoseconds when the event was created.                                                             |
| `rootWorkflowExecId`                                                                                                  | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | Execution ID of the root workflow that initiated this execution chain.                                                |
| `parentWorkflowExecId`                                                                                                | *string*                                                                                                              | :heavy_minus_sign:                                                                                                    | Execution ID of the parent workflow that initiated this execution. If this is a root workflow, this field is not set. |
| `workflowExecId`                                                                                                      | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | Execution ID of the workflow that emitted this event.                                                                 |
| `workflowRunId`                                                                                                       | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | Run ID of the workflow execution. Changes on continue-as-new while workflow_exec_id stays the same.                   |
| `workflowName`                                                                                                        | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | The registered name of the workflow that emitted this event.                                                          |
| `eventType`                                                                                                           | *"WORKFLOW_TASK_FAILED"*                                                                                              | :heavy_minus_sign:                                                                                                    | Event type discriminator.                                                                                             |
| `attributes`                                                                                                          | [components.WorkflowTaskFailedAttributes](../../models/components/workflowtaskfailedattributes.md)                    | :heavy_check_mark:                                                                                                    | Attributes for workflow task failed events.                                                                           |