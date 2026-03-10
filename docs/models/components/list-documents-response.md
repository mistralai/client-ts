# ListDocumentsResponse

## Example Usage

```typescript
import { ListDocumentsResponse } from "@mistralai/mistralai/models/components";

let value: ListDocumentsResponse = {
  pagination: {
    totalItems: 18197,
    totalPages: 44117,
    currentPage: 500067,
    pageSize: 656047,
    hasMore: false,
  },
  data: [],
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `pagination`                                                            | [components.PaginationInfo](../../models/components/pagination-info.md) | :heavy_check_mark:                                                      | N/A                                                                     |
| `data`                                                                  | [components.Document](../../models/components/document.md)[]            | :heavy_check_mark:                                                      | N/A                                                                     |