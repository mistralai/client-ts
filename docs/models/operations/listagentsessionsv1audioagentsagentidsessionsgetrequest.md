# ListAgentSessionsV1AudioAgentsAgentIdSessionsGetRequest

## Example Usage

```typescript
import { ListAgentSessionsV1AudioAgentsAgentIdSessionsGetRequest } from "@mistralai/mistralai/models/operations";

let value: ListAgentSessionsV1AudioAgentsAgentIdSessionsGetRequest = {
  agentId: "4917b840-c652-4385-a927-9b20640a47c2",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `agentId`                                               | *string*                                                | :heavy_check_mark:                                      | N/A                                                     |
| `pageSize`                                              | *number*                                                | :heavy_minus_sign:                                      | Maximum number of sessions to return                    |
| `pageToken`                                             | *string*                                                | :heavy_minus_sign:                                      | Cursor returned as next_page_token by the previous page |