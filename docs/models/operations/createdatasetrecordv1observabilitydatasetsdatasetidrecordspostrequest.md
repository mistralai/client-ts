# CreateDatasetRecordV1ObservabilityDatasetsDatasetIdRecordsPostRequest

## Example Usage

```typescript
import { CreateDatasetRecordV1ObservabilityDatasetsDatasetIdRecordsPostRequest } from "@mistralai/mistralai/models/operations";

let value:
  CreateDatasetRecordV1ObservabilityDatasetsDatasetIdRecordsPostRequest = {
    datasetId: "<id>",
    createDatasetRecordRequest: {
      payload: {
        "key": "<value>",
      },
    },
  };
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `datasetId`                                                                                      | *string*                                                                                         | :heavy_check_mark:                                                                               | Dataset UUID or workspace-scoped slug. UUID-shaped values are always interpreted as dataset IDs. |
| `createDatasetRecordRequest`                                                                     | [components.CreateDatasetRecordRequest](../../models/components/createdatasetrecordrequest.md)   | :heavy_check_mark:                                                                               | N/A                                                                                              |