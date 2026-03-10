# PostDatasetRecordsFromExplorerV1ObservabilityDatasetsDatasetIdImportsFromExplorerPostRequest

## Example Usage

```typescript
import {
  PostDatasetRecordsFromExplorerV1ObservabilityDatasetsDatasetIdImportsFromExplorerPostRequest,
} from "@mistralai/mistralai/models/operations";

let value:
  PostDatasetRecordsFromExplorerV1ObservabilityDatasetsDatasetIdImportsFromExplorerPostRequest =
    {
      datasetId: "2490ecee-c5f9-43c4-aa87-924bad03f873",
      importDatasetFromExplorerRequest: {
        completionEventIds: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
      },
    };
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `datasetId`                                                                                                    | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `importDatasetFromExplorerRequest`                                                                             | [components.ImportDatasetFromExplorerRequest](../../models/components/import-dataset-from-explorer-request.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |