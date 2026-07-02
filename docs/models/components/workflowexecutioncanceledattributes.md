# WorkflowExecutionCanceledAttributes

Attributes for workflow execution canceled events.

## Example Usage

```typescript
import { WorkflowExecutionCanceledAttributes } from "@mistralai/mistralai/models/components";

let value: WorkflowExecutionCanceledAttributes = {
  taskId: "<id>",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `taskId`                                                      | *string*                                                      | :heavy_check_mark:                                            | Unique identifier for the task within the workflow execution. |
| `reason`                                                      | *string*                                                      | :heavy_minus_sign:                                            | Optional reason provided for the cancellation.                |