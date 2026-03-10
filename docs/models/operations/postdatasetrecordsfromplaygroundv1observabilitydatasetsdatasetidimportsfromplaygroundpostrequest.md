# PostDatasetRecordsFromPlaygroundV1ObservabilityDatasetsDatasetIdImportsFromPlaygroundPostRequest

## Example Usage

```typescript
import {
  PostDatasetRecordsFromPlaygroundV1ObservabilityDatasetsDatasetIdImportsFromPlaygroundPostRequest,
} from "@mistralai/mistralai/models/operations";

let value:
  PostDatasetRecordsFromPlaygroundV1ObservabilityDatasetsDatasetIdImportsFromPlaygroundPostRequest =
    {
      datasetId: "c7bf5806-37f6-42af-b253-85994ffc010f",
      importDatasetFromPlaygroundRequest: {
        conversationIds: [],
      },
    };
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `datasetId`                                                                                                    | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `importDatasetFromPlaygroundRequest`                                                                           | [components.ImportDatasetFromPlaygroundRequest](../../models/components/importdatasetfromplaygroundrequest.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |