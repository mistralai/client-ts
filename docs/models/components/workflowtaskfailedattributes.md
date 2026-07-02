# WorkflowTaskFailedAttributes

Attributes for workflow task failed events.

## Example Usage

```typescript
import { WorkflowTaskFailedAttributes } from "@mistralai/mistralai/models/components";

let value: WorkflowTaskFailedAttributes = {
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