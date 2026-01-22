# AgentsApiV1AgentsListVersionsRequest

## Example Usage

```typescript
import { AgentsApiV1AgentsListVersionsRequest } from "@mistralai/mistralai/models/operations";

let value: AgentsApiV1AgentsListVersionsRequest = {
  agentId: "<id>",
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `agentId`                   | *string*                    | :heavy_check_mark:          | N/A                         |
| `page`                      | *number*                    | :heavy_minus_sign:          | Page number (0-indexed)     |
| `pageSize`                  | *number*                    | :heavy_minus_sign:          | Number of versions per page |