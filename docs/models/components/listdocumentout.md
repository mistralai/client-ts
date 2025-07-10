# ListDocumentOut

## Example Usage

```typescript
import { ListDocumentOut } from "@mistralai/mistralai/models/components";

let value: ListDocumentOut = {
  pagination: {
    totalItems: 849039,
    totalPages: 33304,
    currentPage: 958983,
    pageSize: 355369,
    hasMore: false,
  },
  data: [
    {
      id: "5026e1fd-7539-4006-8143-42019ff62a7f",
      libraryId: "c43a3a86-84b6-45de-a035-dffe4f31f3b0",
      hash: "<value>",
      mimeType: "<value>",
      extension: "mpg",
      size: 379057,
      name: "<value>",
      createdAt: new Date("2024-02-15T05:29:12.502Z"),
      processingStatus: "<value>",
      uploadedById: "b3274d38-fadf-4cbf-9f71-426296ef849e",
      uploadedByType: "<value>",
      tokensProcessingTotal: 552078,
    },
  ],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `pagination`                                                           | [components.PaginationInfo](../../models/components/paginationinfo.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `data`                                                                 | [components.DocumentOut](../../models/components/documentout.md)[]     | :heavy_check_mark:                                                     | N/A                                                                    |