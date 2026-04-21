# WorkflowExecutionStartedAttributesResponse

Attributes for workflow execution started events.

## Example Usage

```typescript
import { WorkflowExecutionStartedAttributesResponse } from "@mistralai/mistralai/models/components";

let value: WorkflowExecutionStartedAttributesResponse = {
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
| `displayName`                                                                                  | *string*                                                                                       | :heavy_minus_sign:                                                                             | The user-friendly display name of the workflow, if available.                                  |
| `input`                                                                                        | [components.JSONPayloadResponse](../../models/components/jsonpayloadresponse.md)               | :heavy_check_mark:                                                                             | A payload containing arbitrary JSON data.<br/><br/>Used for complete state snapshots or final results. |