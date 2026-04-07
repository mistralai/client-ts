# WorkflowExecutionStartedAttributesRequest

Attributes for workflow execution started events.

## Example Usage

```typescript
import { WorkflowExecutionStartedAttributesRequest } from "@mistralai/mistralai/models/components";

let value: WorkflowExecutionStartedAttributesRequest = {
  taskId: "<id>",
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
| `workflowName`                                                                                 | *string*                                                                                       | :heavy_check_mark:                                                                             | The registered name of the workflow being executed.                                            |
| `input`                                                                                        | [components.JSONPayloadRequest](../../models/components/jsonpayloadrequest.md)                 | :heavy_check_mark:                                                                             | A payload containing arbitrary JSON data.<br/><br/>Used for complete state snapshots or final results. |