# CustomTaskInProgressResponse

Emitted during custom task execution to report progress.

This event supports streaming updates via JSON or JSON Patch payloads,
enabling real-time progress tracking for long-running tasks.

## Example Usage

```typescript
import { CustomTaskInProgressResponse } from "@mistralai/mistralai/models/components";

let value: CustomTaskInProgressResponse = {
  eventId: "<id>",
  eventTimestamp: 272252,
  rootWorkflowExecId: "<id>",
  parentWorkflowExecId: "<id>",
  workflowExecId: "<id>",
  workflowRunId: "<id>",
  workflowName: "<value>",
  attributes: {
    customTaskId: "<id>",
    customTaskType: "<value>",
    payload: {
      value: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `eventId`                                                                                                              | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | Unique identifier for this event instance.                                                                             |
| `eventTimestamp`                                                                                                       | *number*                                                                                                               | :heavy_check_mark:                                                                                                     | Unix timestamp in nanoseconds when the event was created.                                                              |
| `rootWorkflowExecId`                                                                                                   | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | Execution ID of the root workflow that initiated this execution chain.                                                 |
| `parentWorkflowExecId`                                                                                                 | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | Execution ID of the parent workflow that initiated this execution. If this is a root workflow, this field is not set.  |
| `workflowExecId`                                                                                                       | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | Execution ID of the workflow that emitted this event.                                                                  |
| `workflowRunId`                                                                                                        | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | Run ID of the workflow execution. Changes on continue-as-new while workflow_exec_id stays the same.                    |
| `workflowName`                                                                                                         | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The registered name of the workflow that emitted this event.                                                           |
| `eventType`                                                                                                            | *"CUSTOM_TASK_IN_PROGRESS"*                                                                                            | :heavy_minus_sign:                                                                                                     | Event type discriminator.                                                                                              |
| `attributes`                                                                                                           | [components.CustomTaskInProgressAttributesResponse](../../models/components/customtaskinprogressattributesresponse.md) | :heavy_check_mark:                                                                                                     | Attributes for custom task in-progress events with streaming updates.                                                  |