# PostDatasetRecordsFromDatasetV1ObservabilityDatasetsDatasetIdImportsFromDatasetPostRequest

## Example Usage

```typescript
import {
  PostDatasetRecordsFromDatasetV1ObservabilityDatasetsDatasetIdImportsFromDatasetPostRequest,
} from "@mistralai/mistralai/models/operations";

let value:
  PostDatasetRecordsFromDatasetV1ObservabilityDatasetsDatasetIdImportsFromDatasetPostRequest =
    {
      datasetId: "<id>",
      importDatasetFromDatasetRequest: {
        datasetRecordIds: [
          "eabb2a2a-9877-4df5-9505-b5a5bd405c43",
        ],
      },
    };
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `datasetId`                                                                                              | *string*                                                                                                 | :heavy_check_mark:                                                                                       | Dataset UUID or workspace-scoped slug. UUID-shaped values are always interpreted as dataset IDs.         |
| `importDatasetFromDatasetRequest`                                                                        | [components.ImportDatasetFromDatasetRequest](../../models/components/importdatasetfromdatasetrequest.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |