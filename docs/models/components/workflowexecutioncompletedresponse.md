# WorkflowExecutionCompletedResponse

Emitted when a workflow execution completes successfully.

This is a terminal event indicating the workflow finished without errors.

## Example Usage

```typescript
import { WorkflowExecutionCompletedResponse } from "@mistralai/mistralai/models/components";

let value: WorkflowExecutionCompletedResponse = {
  eventId: "<id>",
  eventTimestamp: 607286,
  rootWorkflowExecId: "<id>",
  parentWorkflowExecId: null,
  workflowExecId: "<id>",
  workflowRunId: "<id>",
  workflowName: "<value>",
  attributes: {
    taskId: "<id>",
    result: {
      value: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `eventId`                                                                                                                          | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | Unique identifier for this event instance.                                                                                         |
| `eventTimestamp`                                                                                                                   | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | Unix timestamp in nanoseconds when the event was created.                                                                          |
| `rootWorkflowExecId`                                                                                                               | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | Execution ID of the root workflow that initiated this execution chain.                                                             |
| `parentWorkflowExecId`                                                                                                             | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | Execution ID of the parent workflow that initiated this execution. If this is a root workflow, this field is not set.              |
| `workflowExecId`                                                                                                                   | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | Execution ID of the workflow that emitted this event.                                                                              |
| `workflowRunId`                                                                                                                    | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | Run ID of the workflow execution. Changes on continue-as-new while workflow_exec_id stays the same.                                |
| `workflowName`                                                                                                                     | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | The registered name of the workflow that emitted this event.                                                                       |
| `eventType`                                                                                                                        | *"WORKFLOW_EXECUTION_COMPLETED"*                                                                                                   | :heavy_minus_sign:                                                                                                                 | Event type discriminator.                                                                                                          |
| `attributes`                                                                                                                       | [components.WorkflowExecutionCompletedAttributesResponse](../../models/components/workflowexecutioncompletedattributesresponse.md) | :heavy_check_mark:                                                                                                                 | Attributes for workflow execution completed events.                                                                                |