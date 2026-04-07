# WorkflowExecutionCompletedAttributesResponse

Attributes for workflow execution completed events.

## Example Usage

```typescript
import { WorkflowExecutionCompletedAttributesResponse } from "@mistralai/mistralai/models/components";

let value: WorkflowExecutionCompletedAttributesResponse = {
  taskId: "<id>",
  result: {
    value: "<value>",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `taskId`                                                                                       | *string*                                                                                       | :heavy_check_mark:                                                                             | Unique identifier for the task within the workflow execution.                                  |
| `result`                                                                                       | [components.JSONPayloadResponse](../../models/components/jsonpayloadresponse.md)               | :heavy_check_mark:                                                                             | A payload containing arbitrary JSON data.<br/><br/>Used for complete state snapshots or final results. |