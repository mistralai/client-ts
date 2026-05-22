# WorkflowBulkUnarchiveResponse

## Example Usage

```typescript
import { WorkflowBulkUnarchiveResponse } from "@mistralai/mistralai/models/components";

let value: WorkflowBulkUnarchiveResponse = {
  unarchived: [],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `unarchived`                                                                   | [components.Workflow](../../models/components/workflow.md)[]                   | :heavy_check_mark:                                                             | Workflows that were successfully unarchived or were already unarchived         |
| `errored`                                                                      | [components.WorkflowBulkError](../../models/components/workflowbulkerror.md)[] | :heavy_minus_sign:                                                             | Workflows that could not be unarchived and the corresponding error messages    |