# ExportDatasetToJsonlV1ObservabilityDatasetsDatasetIdExportsToJsonlGetRequest

## Example Usage

```typescript
import { ExportDatasetToJsonlV1ObservabilityDatasetsDatasetIdExportsToJsonlGetRequest } from "@mistralai/mistralai/models/operations";

let value:
  ExportDatasetToJsonlV1ObservabilityDatasetsDatasetIdExportsToJsonlGetRequest =
    {
      datasetId: "<id>",
    };
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `datasetId`                                                                                      | *string*                                                                                         | :heavy_check_mark:                                                                               | Dataset UUID or workspace-scoped slug. UUID-shaped values are always interpreted as dataset IDs. |