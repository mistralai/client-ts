# GetDatasetImportTaskV1ObservabilityDatasetsDatasetIdTasksTaskIdGetRequest

## Example Usage

```typescript
import { GetDatasetImportTaskV1ObservabilityDatasetsDatasetIdTasksTaskIdGetRequest } from "@mistralai/mistralai/models/operations";

let value:
  GetDatasetImportTaskV1ObservabilityDatasetsDatasetIdTasksTaskIdGetRequest = {
    datasetId: "<id>",
    taskId: "2577349e-674d-4339-914e-9ff48b5cb9a9",
  };
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `datasetId`                                                                                      | *string*                                                                                         | :heavy_check_mark:                                                                               | Dataset UUID or workspace-scoped slug. UUID-shaped values are always interpreted as dataset IDs. |
| `taskId`                                                                                         | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |