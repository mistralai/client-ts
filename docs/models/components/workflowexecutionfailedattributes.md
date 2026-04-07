# WorkflowExecutionFailedAttributes

Attributes for workflow execution failed events.

## Example Usage

```typescript
import { WorkflowExecutionFailedAttributes } from "@mistralai/mistralai/models/components";

let value: WorkflowExecutionFailedAttributes = {
  taskId: "<id>",
  failure: {
    message: "<value>",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `taskId`                                                         | *string*                                                         | :heavy_check_mark:                                               | Unique identifier for the task within the workflow execution.    |
| `failure`                                                        | [components.Failure](../../models/components/failure.md)         | :heavy_check_mark:                                               | Represents an error or exception that occurred during execution. |