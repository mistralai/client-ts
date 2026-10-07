# UpdateDatasetV1ObservabilityDatasetsDatasetIdPatchRequest

## Example Usage

```typescript
import { UpdateDatasetV1ObservabilityDatasetsDatasetIdPatchRequest } from "@mistralai/mistralai/models/operations";

let value: UpdateDatasetV1ObservabilityDatasetsDatasetIdPatchRequest = {
  datasetId: "<id>",
  updateDatasetRequest: {},
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `datasetId`                                                                                      | *string*                                                                                         | :heavy_check_mark:                                                                               | Dataset UUID or workspace-scoped slug. UUID-shaped values are always interpreted as dataset IDs. |
| `updateDatasetRequest`                                                                           | [components.UpdateDatasetRequest](../../models/components/updatedatasetrequest.md)               | :heavy_check_mark:                                                                               | N/A                                                                                              |