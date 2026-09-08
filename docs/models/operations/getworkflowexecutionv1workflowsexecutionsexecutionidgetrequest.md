# GetWorkflowExecutionV1WorkflowsExecutionsExecutionIdGetRequest

## Example Usage

```typescript
import { GetWorkflowExecutionV1WorkflowsExecutionsExecutionIdGetRequest } from "@mistralai/mistralai/models/operations";

let value: GetWorkflowExecutionV1WorkflowsExecutionsExecutionIdGetRequest = {
  executionId: "<id>",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `executionId`                                                   | *string*                                                        | :heavy_check_mark:                                              | N/A                                                             |
| `includeSearchKeys`                                             | *boolean*                                                       | :heavy_minus_sign:                                              | Include the execution's search keys (metadata) in the response. |