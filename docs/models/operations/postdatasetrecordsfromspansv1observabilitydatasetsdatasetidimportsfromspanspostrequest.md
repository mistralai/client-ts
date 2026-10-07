# PostDatasetRecordsFromSpansV1ObservabilityDatasetsDatasetIdImportsFromSpansPostRequest

## Example Usage

```typescript
import {
  PostDatasetRecordsFromSpansV1ObservabilityDatasetsDatasetIdImportsFromSpansPostRequest,
} from "@mistralai/mistralai/models/operations";

let value:
  PostDatasetRecordsFromSpansV1ObservabilityDatasetsDatasetIdImportsFromSpansPostRequest =
    {
      datasetId: "<id>",
      importDatasetFromSpansRequest: {
        spanReferences: [
          {
            traceId: "<id>",
            spanId: "<id>",
          },
        ],
        mappingContract: {
          version: 1,
          mappings: [],
        },
      },
    };
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `datasetId`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | Dataset UUID or workspace-scoped slug. UUID-shaped values are always interpreted as dataset IDs.     |
| `importDatasetFromSpansRequest`                                                                      | [components.ImportDatasetFromSpansRequest](../../models/components/importdatasetfromspansrequest.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |