# WorkflowExecutionSyncResponse

Response model for synchronous workflow execution

## Example Usage

```typescript
import { WorkflowExecutionSyncResponse } from "@mistralai/mistralai/models/components";

let value: WorkflowExecutionSyncResponse = {
  workflowName: "<value>",
  executionId: "<id>",
  result: "<value>",
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `workflowName`                         | *string*                               | :heavy_check_mark:                     | Name of the workflow that was executed |
| `executionId`                          | *string*                               | :heavy_check_mark:                     | ID of the workflow execution           |
| `result`                               | *any*                                  | :heavy_check_mark:                     | The result of the workflow execution   |