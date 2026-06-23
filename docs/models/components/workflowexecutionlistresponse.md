# WorkflowExecutionListResponse

Deprecated: use WorkflowRunListResponse instead. Will be removed in the next major version.

## Example Usage

```typescript
import { WorkflowExecutionListResponse } from "@mistralai/mistralai/models/components";

let value: WorkflowExecutionListResponse = {
  executions: [],
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `executions`                                                                                                             | [components.WorkflowExecutionWithoutResultResponse](../../models/components/workflowexecutionwithoutresultresponse.md)[] | :heavy_check_mark:                                                                                                       | A list of workflow executions                                                                                            |
| `nextPageToken`                                                                                                          | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Token to use for fetching the next page of results. Null if this is the last page.                                       |