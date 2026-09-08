# ListServiceAccountsV1ServiceAccountsGetRequest

## Example Usage

```typescript
import { ListServiceAccountsV1ServiceAccountsGetRequest } from "@mistralai/mistralai/models/operations";

let value: ListServiceAccountsV1ServiceAccountsGetRequest = {
  workspaceId: "d9fccbfc-5a8b-449c-97c3-f3464b0ee768",
  offset: 388130,
  limit: 639292,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `workspaceId`      | *string*           | :heavy_check_mark: | N/A                |
| `includeDeleted`   | *boolean*          | :heavy_minus_sign: | N/A                |
| `offset`           | *number*           | :heavy_check_mark: | N/A                |
| `limit`            | *number*           | :heavy_check_mark: | N/A                |