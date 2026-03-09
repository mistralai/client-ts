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
      postDatasetImportFromFileInSchema: {
        fileId: "<id>",
      },
    };
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `datasetId`                                                                                                  | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `postDatasetImportFromFileInSchema`                                                                          | [components.PostDatasetImportFromFileInSchema](../../models/components/postdatasetimportfromfileinschema.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |