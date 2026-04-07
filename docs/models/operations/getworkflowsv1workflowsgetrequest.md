# GetWorkflowsV1WorkflowsGetRequest

## Example Usage

```typescript
import { GetWorkflowsV1WorkflowsGetRequest } from "@mistralai/mistralai/models/operations";

let value: GetWorkflowsV1WorkflowsGetRequest = {};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `activeOnly`                                                                           | *boolean*                                                                              | :heavy_minus_sign:                                                                     | Whether to only return active workflows                                                |
| `includeShared`                                                                        | *boolean*                                                                              | :heavy_minus_sign:                                                                     | Whether to include shared workflows                                                    |
| `availableInChatAssistant`                                                             | *boolean*                                                                              | :heavy_minus_sign:                                                                     | Whether to only return workflows compatible with chat assistant                        |
| `archived`                                                                             | *boolean*                                                                              | :heavy_minus_sign:                                                                     | Filter by archived state. False=exclude archived, True=only archived, None=include all |
| `cursor`                                                                               | *string*                                                                               | :heavy_minus_sign:                                                                     | The cursor for pagination                                                              |
| `limit`                                                                                | *number*                                                                               | :heavy_minus_sign:                                                                     | The maximum number of workflows to return                                              |