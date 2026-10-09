# PostDatasetRecordsFromFileV1ObservabilityDatasetsDatasetIdImportsFromFilePostRequest

## Example Usage

```typescript
import {
  PostDatasetRecordsFromFileV1ObservabilityDatasetsDatasetIdImportsFromFilePostRequest,
} from "@mistralai/mistralai/models/operations";

let value:
  PostDatasetRecordsFromFileV1ObservabilityDatasetsDatasetIdImportsFromFilePostRequest =
    {
      datasetId: "<id>",
      importDatasetFromFileRequest: {
        fileId: "<id>",
      },
    };
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `datasetId`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | Dataset UUID or workspace-scoped slug. UUID-shaped values are always interpreted as dataset IDs.   |
| `importDatasetFromFileRequest`                                                                     | [components.ImportDatasetFromFileRequest](../../models/components/importdatasetfromfilerequest.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |