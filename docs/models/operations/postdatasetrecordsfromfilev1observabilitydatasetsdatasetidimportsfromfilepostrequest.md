# PostDatasetRecordsFromFileV1ObservabilityDatasetsDatasetIdImportsFromFilePostRequest

## Example Usage

```typescript
import {
  PostDatasetRecordsFromFileV1ObservabilityDatasetsDatasetIdImportsFromFilePostRequest,
} from "@mistralai/mistralai/models/operations";

let value:
  PostDatasetRecordsFromFileV1ObservabilityDatasetsDatasetIdImportsFromFilePostRequest =
    {
      datasetId: "24e4af93-f75e-4625-beff-1f845457cc55",
      importDatasetFromFileRequest: {
        fileId: "<id>",
      },
    };
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `datasetId`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `importDatasetFromFileRequest`                                                                     | [components.ImportDatasetFromFileRequest](../../models/components/importdatasetfromfilerequest.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |