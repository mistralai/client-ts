# WorkflowExecutionCompletedAttributesRequest

Attributes for workflow execution completed events.

## Example Usage

```typescript
import { WorkflowExecutionCompletedAttributesRequest } from "@mistralai/mistralai/models/components";

let value: WorkflowExecutionCompletedAttributesRequest = {
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
| `result`                                                                                       | [components.JSONPayloadRequest](../../models/components/jsonpayloadrequest.md)                 | :heavy_check_mark:                                                                             | A payload containing arbitrary JSON data.<br/><br/>Used for complete state snapshots or final results. |