# PostDatasetRecordsFromPlaygroundV1ObservabilityDatasetsDatasetIdImportsFromPlaygroundPostRequest

## Example Usage

```typescript
import {
  PostDatasetRecordsFromPlaygroundV1ObservabilityDatasetsDatasetIdImportsFromPlaygroundPostRequest,
} from "@mistralai/mistralai/models/operations";

let value:
  PostDatasetRecordsFromPlaygroundV1ObservabilityDatasetsDatasetIdImportsFromPlaygroundPostRequest =
    {
      datasetId: "<id>",
      importDatasetFromPlaygroundRequest: {
        conversationIds: [
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
| `datasetId`                                                                                                    | *string*                                                                                                       | :heavy_check_mark:                                                                                             | Dataset UUID or workspace-scoped slug. UUID-shaped values are always interpreted as dataset IDs.               |
| `importDatasetFromPlaygroundRequest`                                                                           | [components.ImportDatasetFromPlaygroundRequest](../../models/components/importdatasetfromplaygroundrequest.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |