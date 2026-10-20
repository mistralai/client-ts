# ListAgentsV1AudioAgentsGetRequest

## Example Usage

```typescript
import { ListAgentsV1AudioAgentsGetRequest } from "@mistralai/mistralai/models/operations";

let value: ListAgentsV1AudioAgentsGetRequest = {};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `pageSize`                                              | *number*                                                | :heavy_minus_sign:                                      | Maximum number of agents to return                      |
| `pageToken`                                             | *string*                                                | :heavy_minus_sign:                                      | Cursor returned as next_page_token by the previous page |
| `search`                                                | *string*                                                | :heavy_minus_sign:                                      | Substring match on the agent name                       |