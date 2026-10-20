# SetManagedIndexSummaryV1RagManagedIndexesIndexNameSummaryFieldLanguagePutRequest

## Example Usage

```typescript
import { SetManagedIndexSummaryV1RagManagedIndexesIndexNameSummaryFieldLanguagePutRequest } from "@mistralai/mistralai/models/operations";

let value:
  SetManagedIndexSummaryV1RagManagedIndexesIndexNameSummaryFieldLanguagePutRequest =
    {
      language: "fr",
      indexName: "<value>",
      updateSummaryRequestSummary: {
        content: "<value>",
        status: "generated_confirmed",
        translated: true,
      },
    };
```

## Fields

| Field                                                                                                                                                                                                        | Type                                                                                                                                                                                                         | Required                                                                                                                                                                                                     | Description                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `language`                                                                                                                                                                                                   | [operations.SetManagedIndexSummaryV1RagManagedIndexesIndexNameSummaryFieldLanguagePutLanguage](../../models/operations/setmanagedindexsummaryv1ragmanagedindexesindexnamesummaryfieldlanguageputlanguage.md) | :heavy_check_mark:                                                                                                                                                                                           | N/A                                                                                                                                                                                                          |
| `indexName`                                                                                                                                                                                                  | *string*                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                           | N/A                                                                                                                                                                                                          |
| `updateSummaryRequestSummary`                                                                                                                                                                                | [components.UpdateSummaryRequestSummary](../../models/components/updatesummaryrequestsummary.md)                                                                                                             | :heavy_check_mark:                                                                                                                                                                                           | N/A                                                                                                                                                                                                          |