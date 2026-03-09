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
      extension: "m2v",
      size: 290711,
      name: "<value>",
      createdAt: new Date("2026-06-14T03:59:49.681Z"),
      processStatus: "missing_content",
      uploadedById: "80e4c504-111a-47d6-a3c5-08462a75c037",
      uploadedByType: "<value>",
      processingStatus: "<value>",
      tokensProcessingTotal: 490565,
    },
  ],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `pagination`                                                           | [components.PaginationInfo](../../models/components/paginationinfo.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `data`                                                                 | [components.DocumentOut](../../models/components/documentout.md)[]     | :heavy_check_mark:                                                     | N/A                                                                    |