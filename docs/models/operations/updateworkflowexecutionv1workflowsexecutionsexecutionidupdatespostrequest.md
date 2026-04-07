# UpdateWorkflowExecutionV1WorkflowsExecutionsExecutionIdUpdatesPostRequest

## Example Usage

```typescript
import { UpdateWorkflowExecutionV1WorkflowsExecutionsExecutionIdUpdatesPostRequest } from "@mistralai/mistralai/models/operations";

let value:
  UpdateWorkflowExecutionV1WorkflowsExecutionsExecutionIdUpdatesPostRequest = {
    executionId: "<id>",
    updateInvocationBody: {
      name: "<value>",
    },
  };
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `executionId`                                                                      | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `updateInvocationBody`                                                             | [components.UpdateInvocationBody](../../models/components/updateinvocationbody.md) | :heavy_check_mark:                                                                 | N/A                                                                                |