# GetDatasetByIdV1ObservabilityDatasetsDatasetIdGetRequest

## Example Usage

```typescript
import { GetDatasetByIdV1ObservabilityDatasetsDatasetIdGetRequest } from "@mistralai/mistralai/models/operations";

let value: GetDatasetByIdV1ObservabilityDatasetsDatasetIdGetRequest = {
  datasetId: "<id>",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `datasetId`                                                                                      | *string*                                                                                         | :heavy_check_mark:                                                                               | Dataset UUID or workspace-scoped slug. UUID-shaped values are always interpreted as dataset IDs. |