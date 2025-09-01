# ListDocumentOut

## Example Usage

```typescript
import { ListDocumentOut } from "@mistralai/mistralai/models/components";

let value: ListDocumentOut = {
  pagination: {
    totalItems: 380132,
    totalPages: 913256,
    currentPage: 408894,
    pageSize: 811833,
    hasMore: true,
  },
  data: [
    {
      id: "6c934a1f-b0c4-4285-8979-81eaacc68f1f",
      libraryId: "35352f20-efcb-46ad-b6d2-15eb6e494b7c",
      hash: "<value>",
      mimeType: "<value>",
      extension: "mp4",
      size: 710884,
      name: "<value>",
      createdAt: new Date("2025-08-13T21:39:06.524Z"),
      processingStatus: "<value>",
      uploadedById: "e74d2380-e4c5-4041-911a-7d63c508462a",
      uploadedByType: "<value>",
      tokensProcessingTotal: 312938,
    },
  ],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `pagination`                                                           | [components.PaginationInfo](../../models/components/paginationinfo.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `data`                                                                 | [components.DocumentOut](../../models/components/documentout.md)[]     | :heavy_check_mark:                                                     | N/A                                                                    |