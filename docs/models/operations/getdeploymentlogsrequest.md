# GetDeploymentLogsRequest

## Example Usage

```typescript
import { GetDeploymentLogsRequest } from "@mistralai/mistralai/models/operations";

let value: GetDeploymentLogsRequest = {
  name: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `workerName`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | Filter logs by worker name                                                                    |
| `workflowName`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | Filter logs by workflow name                                                                  |
| `after`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Only return logs at or after this timestamp                                                   |
| `before`                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Only return logs before this timestamp                                                        |
| `order`                                                                                       | [operations.GetDeploymentLogsOrder](../../models/operations/getdeploymentlogsorder.md)        | :heavy_minus_sign:                                                                            | First-page sort order: 'asc' (oldest first) or 'desc'. Ignored when `cursor` is set.          |
| `cursor`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | Pagination cursor from a previous response's `next_cursor`; carries the window and order      |
| `limit`                                                                                       | *number*                                                                                      | :heavy_minus_sign:                                                                            | Maximum number of logs to return                                                              |