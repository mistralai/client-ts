# PostDatasetRecordsFromDatasetV1ObservabilityDatasetsDatasetIdImportsFromDatasetPostRequest

## Example Usage

```typescript
import {
  PostDatasetRecordsFromDatasetV1ObservabilityDatasetsDatasetIdImportsFromDatasetPostRequest,
} from "@mistralai/mistralai/models/operations";

let value:
  PostDatasetRecordsFromDatasetV1ObservabilityDatasetsDatasetIdImportsFromDatasetPostRequest =
    {
      datasetId: "7eabb2a2-a987-47df-8550-5b5a5bd405c4",
      importDatasetFromDatasetRequest: {
        datasetRecordIds: [
          "de0fad5b-1e1b-415b-9d6b-e83b5a9bb8b8",
        ],
      },
    };
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `datasetId`                                                                                              | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `importDatasetFromDatasetRequest`                                                                        | [components.ImportDatasetFromDatasetRequest](../../models/components/importdatasetfromdatasetrequest.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |