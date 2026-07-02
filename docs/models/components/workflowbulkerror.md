# WorkflowBulkError

## Example Usage

```typescript
import { WorkflowBulkError } from "@mistralai/mistralai/models/components";

let value: WorkflowBulkError = {
  workflowId: "496bb4c7-ac20-4d16-a808-4cc21f9c09f1",
  message: "<value>",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `workflowId`                                               | *string*                                                   | :heavy_check_mark:                                         | The requested workflow ID                                  |
| `workflow`                                                 | [components.Workflow](../../models/components/workflow.md) | :heavy_minus_sign:                                         | The workflow, if found                                     |
| `message`                                                  | *string*                                                   | :heavy_check_mark:                                         | Error message describing why the operation failed          |