# DeleteDatasetV1ObservabilityDatasetsDatasetIdDeleteRequest

## Example Usage

```typescript
import { DeleteDatasetV1ObservabilityDatasetsDatasetIdDeleteRequest } from "@mistralai/mistralai/models/operations";

let value: DeleteDatasetV1ObservabilityDatasetsDatasetIdDeleteRequest = {
  datasetId: "<id>",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `datasetId`                                                                                      | *string*                                                                                         | :heavy_check_mark:                                                                               | Dataset UUID or workspace-scoped slug. UUID-shaped values are always interpreted as dataset IDs. |