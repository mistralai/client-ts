# ListRunsV1WorkflowsRunsGetRequest

## Example Usage

```typescript
import { ListRunsV1WorkflowsRunsGetRequest } from "@mistralai/mistralai/models/operations";

let value: ListRunsV1WorkflowsRunsGetRequest = {};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `workflowIdentifier`                          | *string*                                      | :heavy_minus_sign:                            | Filter by workflow name or id                 |
| `search`                                      | *string*                                      | :heavy_minus_sign:                            | Search by workflow name, display name or id   |
| `status`                                      | *operations.ListRunsV1WorkflowsRunsGetStatus* | :heavy_minus_sign:                            | Filter by workflow status                     |
| `pageSize`                                    | *number*                                      | :heavy_minus_sign:                            | Number of items per page                      |
| `nextPageToken`                               | *string*                                      | :heavy_minus_sign:                            | Token for the next page of results            |