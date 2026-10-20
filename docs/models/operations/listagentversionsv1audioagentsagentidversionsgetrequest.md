# ListAgentVersionsV1AudioAgentsAgentIdVersionsGetRequest

## Example Usage

```typescript
import { ListAgentVersionsV1AudioAgentsAgentIdVersionsGetRequest } from "@mistralai/mistralai/models/operations";

let value: ListAgentVersionsV1AudioAgentsAgentIdVersionsGetRequest = {
  agentId: "8837dc4b-fb43-4d76-89ee-773be0e63a3b",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `agentId`                                               | *string*                                                | :heavy_check_mark:                                      | N/A                                                     |
| `pageSize`                                              | *number*                                                | :heavy_minus_sign:                                      | Maximum number of versions to return                    |
| `pageToken`                                             | *string*                                                | :heavy_minus_sign:                                      | Cursor returned as next_page_token by the previous page |