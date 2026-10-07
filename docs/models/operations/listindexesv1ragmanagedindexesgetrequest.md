# ListIndexesV1RagManagedIndexesGetRequest

## Example Usage

```typescript
import { ListIndexesV1RagManagedIndexesGetRequest } from "@mistralai/mistralai/models/operations";

let value: ListIndexesV1RagManagedIndexesGetRequest = {};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `pageSize`                                                                     | *number*                                                                       | :heavy_minus_sign:                                                             | Maximum number of indexes to return                                            |
| `pageToken`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | Cursor returned as next_page_token by the previous page                        |
| `name`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Case-insensitive substring to match against index names                        |
| `status`                                                                       | [components.ManagedIndexStatus](../../models/components/managedindexstatus.md) | :heavy_minus_sign:                                                             | Status to match                                                                |
| `creatorId`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | Creator ID to match                                                            |