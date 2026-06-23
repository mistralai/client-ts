# GetWorkflowExecutionLogsRequest

## Example Usage

```typescript
import { GetWorkflowExecutionLogsRequest } from "@mistralai/mistralai/models/operations";

let value: GetWorkflowExecutionLogsRequest = {
  executionId: "<id>",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `executionId`                                                                                        | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `runId`                                                                                              | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Filter logs by workflow run ID                                                                       |
| `activityId`                                                                                         | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Filter logs by activity ID                                                                           |
| `after`                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_minus_sign:                                                                                   | Only return logs at or after this timestamp                                                          |
| `before`                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_minus_sign:                                                                                   | Only return logs before this timestamp                                                               |
| `order`                                                                                              | [operations.GetWorkflowExecutionLogsOrder](../../models/operations/getworkflowexecutionlogsorder.md) | :heavy_minus_sign:                                                                                   | First-page sort order: 'asc' (oldest first) or 'desc'. Ignored when `cursor` is set.                 |
| `cursor`                                                                                             | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Pagination cursor from a previous response's `next_cursor`; carries the window and order             |
| `limit`                                                                                              | *number*                                                                                             | :heavy_minus_sign:                                                                                   | Maximum number of logs to return                                                                     |