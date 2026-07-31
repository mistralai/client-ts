# SkillsListRequest

## Example Usage

```typescript
import { SkillsListRequest } from "@mistralai/mistralai/models/operations";

let value: SkillsListRequest = {};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `pageSize`                                                                                       | *number*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `pageToken`                                                                                      | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `alias`                                                                                          | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `fields`                                                                                         | *string*[]                                                                                       | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `sortField`                                                                                      | [components.ListSortField](../../models/components/listsortfield.md)                             | :heavy_minus_sign:                                                                               | Defaults to created_at when omitted.                                                             |
| `sortDirectionQueryParameter`                                                                    | [components.ListSortDirection](../../models/components/listsortdirection.md)                     | :heavy_minus_sign:                                                                               | Defaults to descending for timestamp fields and ascending for text fields.                       |
| `sortBy`                                                                                         | *string*                                                                                         | :heavy_minus_sign:                                                                               | REST-friendly alias for sort.field. Supported values: created_at, last_modified_at, name, title. |
| `sortDirectionQueryParameter1`                                                                   | *string*                                                                                         | :heavy_minus_sign:                                                                               | REST-friendly alias for sort.direction. Supported values: asc, desc.                             |