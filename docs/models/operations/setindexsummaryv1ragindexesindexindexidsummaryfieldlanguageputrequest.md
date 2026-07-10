# SetIndexSummaryV1RagIndexesIndexIndexIdSummaryFieldLanguagePutRequest

## Example Usage

```typescript
import { SetIndexSummaryV1RagIndexesIndexIndexIdSummaryFieldLanguagePutRequest } from "@mistralai/mistralai/models/operations";

let value:
  SetIndexSummaryV1RagIndexesIndexIndexIdSummaryFieldLanguagePutRequest = {
    indexId: "c8ece1f2-78fb-4f92-a338-0fa6625c1be7",
    language: "nl",
    updateSummaryRequestSummary: {
      content: "<value>",
      status: "handwritten",
      translated: true,
    },
  };
```

## Fields

| Field                                                                                                                                                                                  | Type                                                                                                                                                                                   | Required                                                                                                                                                                               | Description                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `indexId`                                                                                                                                                                              | *string*                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                     | N/A                                                                                                                                                                                    |
| `language`                                                                                                                                                                             | [operations.SetIndexSummaryV1RagIndexesIndexIndexIdSummaryFieldLanguagePutLanguage](../../models/operations/setindexsummaryv1ragindexesindexindexidsummaryfieldlanguageputlanguage.md) | :heavy_check_mark:                                                                                                                                                                     | N/A                                                                                                                                                                                    |
| `updateSummaryRequestSummary`                                                                                                                                                          | [components.UpdateSummaryRequestSummary](../../models/components/updatesummaryrequestsummary.md)                                                                                       | :heavy_check_mark:                                                                                                                                                                     | N/A                                                                                                                                                                                    |