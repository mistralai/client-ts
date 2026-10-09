# GetDatasetImportTasksV1ObservabilityDatasetsDatasetIdTasksGetRequest

## Example Usage

```typescript
import { GetDatasetImportTasksV1ObservabilityDatasetsDatasetIdTasksGetRequest } from "@mistralai/mistralai/models/operations";

let value:
  GetDatasetImportTasksV1ObservabilityDatasetsDatasetIdTasksGetRequest = {
    datasetId: "<id>",
  };
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `datasetId`                                                                                      | *string*                                                                                         | :heavy_check_mark:                                                                               | Dataset UUID or workspace-scoped slug. UUID-shaped values are always interpreted as dataset IDs. |
| `pageSize`                                                                                       | *number*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `page`                                                                                           | *number*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |