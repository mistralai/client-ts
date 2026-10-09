# ListServiceAccountsV1ServiceAccountsGetRequest

## Example Usage

```typescript
import { ListServiceAccountsV1ServiceAccountsGetRequest } from "@mistralai/mistralai/models/operations";

let value: ListServiceAccountsV1ServiceAccountsGetRequest = {
  offset: 863187,
  limit: 573304,
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `workspaceId`                                                 | *string*                                                      | :heavy_minus_sign:                                            | N/A                                                           |
| `includeDeleted`                                              | *boolean*                                                     | :heavy_minus_sign:                                            | N/A                                                           |
| `q`                                                           | *string*                                                      | :heavy_minus_sign:                                            | N/A                                                           |
| `order`                                                       | [components.SortOrder](../../models/components/sortorder.md)  | :heavy_minus_sign:                                            | Direction to sort a service-account listing by creation time. |
| `offset`                                                      | *number*                                                      | :heavy_check_mark:                                            | N/A                                                           |
| `limit`                                                       | *number*                                                      | :heavy_check_mark:                                            | N/A                                                           |