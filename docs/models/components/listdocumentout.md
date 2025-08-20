# ListDocumentOut

## Example Usage

```typescript
import { ListDocumentOut } from "@mistralai/mistralai/models/components";

let value: ListDocumentOut = {
  pagination: {
    totalItems: 636061,
    totalPages: 240020,
    currentPage: 160538,
    pageSize: 796392,
    hasMore: false,
  },
  data: [
    {
      id: "f79d7f9d-ed2a-4616-84d0-f55026e1fd75",
      libraryId: "90061434-2019-4ff6-a2a7-f1c43a3a8684",
      hash: "<value>",
      mimeType: "<value>",
      extension: "png",
      size: 360545,
      name: "<value>",
      createdAt: new Date("2025-06-27T04:59:29.330Z"),
      processingStatus: "<value>",
      uploadedById: "e035dffe-4f31-4f3b-a0be-465b3274d38f",
      uploadedByType: "<value>",
      tokensProcessingTotal: 867290,
    },
  ],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `pagination`                                                           | [components.PaginationInfo](../../models/components/paginationinfo.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `data`                                                                 | [components.DocumentOut](../../models/components/documentout.md)[]     | :heavy_check_mark:                                                     | N/A                                                                    |