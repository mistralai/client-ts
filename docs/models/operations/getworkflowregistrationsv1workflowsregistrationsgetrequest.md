# GetWorkflowRegistrationsV1WorkflowsRegistrationsGetRequest

## Example Usage

```typescript
import { GetWorkflowRegistrationsV1WorkflowsRegistrationsGetRequest } from "@mistralai/mistralai/models/operations";

let value: GetWorkflowRegistrationsV1WorkflowsRegistrationsGetRequest = {};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `workflowId`                                                                           | *string*                                                                               | :heavy_minus_sign:                                                                     | The workflow ID to filter by                                                           |
| `taskQueue`                                                                            | *string*                                                                               | :heavy_minus_sign:                                                                     | The task queue to filter by                                                            |
| `activeOnly`                                                                           | *boolean*                                                                              | :heavy_minus_sign:                                                                     | Whether to only return active workflows versions                                       |
| `includeShared`                                                                        | *boolean*                                                                              | :heavy_minus_sign:                                                                     | Whether to include shared workflow versions                                            |
| `workflowSearch`                                                                       | *string*                                                                               | :heavy_minus_sign:                                                                     | The workflow name to filter by                                                         |
| `archived`                                                                             | *boolean*                                                                              | :heavy_minus_sign:                                                                     | Filter by archived state. False=exclude archived, True=only archived, None=include all |
| `withWorkflow`                                                                         | *boolean*                                                                              | :heavy_minus_sign:                                                                     | Whether to include the workflow definition                                             |
| `availableInChatAssistant`                                                             | *boolean*                                                                              | :heavy_minus_sign:                                                                     | Whether to only return workflows compatible with chat assistant                        |
| `limit`                                                                                | *number*                                                                               | :heavy_minus_sign:                                                                     | The maximum number of workflows versions to return                                     |
| `cursor`                                                                               | *string*                                                                               | :heavy_minus_sign:                                                                     | The cursor for pagination                                                              |