# SetManagedIndexSummaryV1ContextSearchIndexesIndexNameSummaryFieldLanguagePutRequest

## Example Usage

```typescript
import {
  SetManagedIndexSummaryV1ContextSearchIndexesIndexNameSummaryFieldLanguagePutRequest,
} from "@mistralai/mistralai/models/operations";

let value:
  SetManagedIndexSummaryV1ContextSearchIndexesIndexNameSummaryFieldLanguagePutRequest =
    {
      language: "pl",
      indexName: "<value>",
      updateSummaryRequestSummary: {
        content: "<value>",
        status: "generated_confirmed",
        translated: false,
      },
    };
```

## Fields

| Field                                                                                                                                                                                                              | Type                                                                                                                                                                                                               | Required                                                                                                                                                                                                           | Description                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `language`                                                                                                                                                                                                         | [operations.SetManagedIndexSummaryV1ContextSearchIndexesIndexNameSummaryFieldLanguagePutLanguage](../../models/operations/setmanagedindexsummaryv1contextsearchindexesindexnamesummaryfieldlanguageputlanguage.md) | :heavy_check_mark:                                                                                                                                                                                                 | N/A                                                                                                                                                                                                                |
| `indexName`                                                                                                                                                                                                        | *string*                                                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                                 | N/A                                                                                                                                                                                                                |
| `updateSummaryRequestSummary`                                                                                                                                                                                      | [components.UpdateSummaryRequestSummary](../../models/components/updatesummaryrequestsummary.md)                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                                 | N/A                                                                                                                                                                                                                |