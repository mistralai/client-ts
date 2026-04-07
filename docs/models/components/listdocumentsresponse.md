# ListDocumentsResponse

## Example Usage

```typescript
import { ListDocumentsResponse } from "@mistralai/mistralai/models/components";

let value: ListDocumentsResponse = {
  pagination: {
    totalItems: 973564,
    totalPages: 468946,
    currentPage: 763380,
    pageSize: 156750,
    hasMore: true,
  },
  data: [],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `pagination`                                                           | [components.PaginationInfo](../../models/components/paginationinfo.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `data`                                                                 | [components.Document](../../models/components/document.md)[]           | :heavy_check_mark:                                                     | N/A                                                                    |