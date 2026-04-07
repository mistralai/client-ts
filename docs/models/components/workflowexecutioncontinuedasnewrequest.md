# WorkflowExecutionContinuedAsNewRequest

Emitted when a workflow continues as a new execution.

This occurs when a workflow uses continue-as-new to reset its history
while maintaining logical continuity.

## Example Usage

```typescript
import { WorkflowExecutionContinuedAsNewRequest } from "@mistralai/mistralai/models/components";

let value: WorkflowExecutionContinuedAsNewRequest = {
  eventId: "<id>",
  rootWorkflowExecId: "<id>",
  workflowExecId: "<id>",
  workflowRunId: "<id>",
  workflowName: "<value>",
  attributes: {
    taskId: "<id>",
    newExecutionRunId: "<id>",
    workflowName: "<value>",
    input: {
      value: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `eventId`                                                                                                                                  | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | Unique identifier for this event instance.                                                                                                 |
| `eventTimestamp`                                                                                                                           | *number*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | Unix timestamp in nanoseconds when the event was created.                                                                                  |
| `rootWorkflowExecId`                                                                                                                       | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | Execution ID of the root workflow that initiated this execution chain.                                                                     |
| `parentWorkflowExecId`                                                                                                                     | *string*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | Execution ID of the parent workflow that initiated this execution. If this is a root workflow, this field is not set.                      |
| `workflowExecId`                                                                                                                           | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | Execution ID of the workflow that emitted this event.                                                                                      |
| `workflowRunId`                                                                                                                            | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | Run ID of the workflow execution. Changes on continue-as-new while workflow_exec_id stays the same.                                        |
| `workflowName`                                                                                                                             | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | The registered name of the workflow that emitted this event.                                                                               |
| `eventType`                                                                                                                                | *"WORKFLOW_EXECUTION_CONTINUED_AS_NEW"*                                                                                                    | :heavy_minus_sign:                                                                                                                         | Event type discriminator.                                                                                                                  |
| `attributes`                                                                                                                               | [components.WorkflowExecutionContinuedAsNewAttributesRequest](../../models/components/workflowexecutioncontinuedasnewattributesrequest.md) | :heavy_check_mark:                                                                                                                         | Attributes for workflow execution continued-as-new events.                                                                                 |