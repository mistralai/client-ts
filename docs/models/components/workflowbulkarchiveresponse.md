# WorkflowBulkArchiveResponse

## Example Usage

```typescript
import { WorkflowBulkArchiveResponse } from "@mistralai/mistralai/models/components";

let value: WorkflowBulkArchiveResponse = {
  archived: [],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `archived`                                                                     | [components.Workflow](../../models/components/workflow.md)[]                   | :heavy_check_mark:                                                             | Workflows that were successfully archived or were already archived             |
| `errored`                                                                      | [components.WorkflowBulkError](../../models/components/workflowbulkerror.md)[] | :heavy_minus_sign:                                                             | Workflows that could not be archived and the corresponding error messages      |