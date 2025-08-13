# ListDocumentOut

## Example Usage

```typescript
import { ListDocumentOut } from "@mistralai/mistralai/models/components";

let value: ListDocumentOut = {
  pagination: {
    totalItems: 398434,
    totalPages: 62713,
    currentPage: 424032,
    pageSize: 258684,
    hasMore: false,
  },
  data: [
    {
      id: "d0f55026-e1fd-4753-8900-614342019ff6",
      libraryId: "a7f1c43a-3a86-484b-b65d-e035dffe4f31",
      hash: "<value>",
      mimeType: "<value>",
      extension: "wav",
      size: 689768,
      name: "<value>",
      createdAt: new Date("2023-03-05T23:00:20.399Z"),
      processingStatus: "<value>",
      uploadedById: "be465b32-74d3-48fa-bdfc-bff71426296e",
      uploadedByType: "<value>",
      tokensProcessingTotal: 546885,
    },
  ],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `pagination`                                                           | [components.PaginationInfo](../../models/components/paginationinfo.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `data`                                                                 | [components.DocumentOut](../../models/components/documentout.md)[]     | :heavy_check_mark:                                                     | N/A                                                                    |