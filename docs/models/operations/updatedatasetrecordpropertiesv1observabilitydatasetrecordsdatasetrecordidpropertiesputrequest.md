# UpdateDatasetRecordPropertiesV1ObservabilityDatasetRecordsDatasetRecordIdPropertiesPutRequest

## Example Usage

```typescript
import {
  UpdateDatasetRecordPropertiesV1ObservabilityDatasetRecordsDatasetRecordIdPropertiesPutRequest,
} from "@mistralai/mistralai/models/operations";

let value:
  UpdateDatasetRecordPropertiesV1ObservabilityDatasetRecordsDatasetRecordIdPropertiesPutRequest =
    {
      datasetRecordId: "120ff658-061e-454d-aacb-5f77e39fdfea",
      updateDatasetRecordPropertiesRequest: {
        properties: {
          "key": "<value>",
          "key1": "<value>",
        },
      },
    };
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `datasetRecordId`                                                                                                  | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `updateDatasetRecordPropertiesRequest`                                                                             | [components.UpdateDatasetRecordPropertiesRequest](../../models/components/updatedatasetrecordpropertiesrequest.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |