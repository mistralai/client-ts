# WorkflowExecutionContinuedAsNewAttributesResponse

Attributes for workflow execution continued-as-new events.

## Example Usage

```typescript
import { WorkflowExecutionContinuedAsNewAttributesResponse } from "@mistralai/mistralai/models/components";

let value: WorkflowExecutionContinuedAsNewAttributesResponse = {
  taskId: "<id>",
  newExecutionRunId: "<id>",
  workflowName: "<value>",
  input: {
    value: "<value>",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `taskId`                                                                                       | *string*                                                                                       | :heavy_check_mark:                                                                             | Unique identifier for the task within the workflow execution.                                  |
| `newExecutionRunId`                                                                            | *string*                                                                                       | :heavy_check_mark:                                                                             | The run ID of the new workflow execution that continues this workflow.                         |
| `workflowName`                                                                                 | *string*                                                                                       | :heavy_check_mark:                                                                             | The registered name of the continued workflow.                                                 |
| `input`                                                                                        | [components.JSONPayloadResponse](../../models/components/jsonpayloadresponse.md)               | :heavy_check_mark:                                                                             | A payload containing arbitrary JSON data.<br/><br/>Used for complete state snapshots or final results. |