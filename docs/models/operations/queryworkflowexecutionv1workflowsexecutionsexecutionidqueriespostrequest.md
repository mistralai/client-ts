# QueryWorkflowExecutionV1WorkflowsExecutionsExecutionIdQueriesPostRequest

## Example Usage

```typescript
import { QueryWorkflowExecutionV1WorkflowsExecutionsExecutionIdQueriesPostRequest } from "@mistralai/mistralai/models/operations";

let value:
  QueryWorkflowExecutionV1WorkflowsExecutionsExecutionIdQueriesPostRequest = {
    executionId: "<id>",
    queryInvocationBody: {
      name: "<value>",
    },
  };
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `executionId`                                                                    | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `queryInvocationBody`                                                            | [components.QueryInvocationBody](../../models/components/queryinvocationbody.md) | :heavy_check_mark:                                                               | N/A                                                                              |