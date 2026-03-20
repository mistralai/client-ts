# UpdateDatasetRecordPayloadV1ObservabilityDatasetRecordsDatasetRecordIdPayloadPutRequest

## Example Usage

```typescript
import {
  UpdateDatasetRecordPayloadV1ObservabilityDatasetRecordsDatasetRecordIdPayloadPutRequest,
} from "@mistralai/mistralai/models/operations";

let value:
  UpdateDatasetRecordPayloadV1ObservabilityDatasetRecordsDatasetRecordIdPayloadPutRequest =
    {
      datasetRecordId: "c6665fb1-ffeb-49a2-86b2-2be882e8388b",
      updateDatasetRecordPayloadRequest: {
        payload: {
          messages: [
            {
              "key": "<value>",
              "key1": "<value>",
              "key2": "<value>",
            },
            {
              "key": "<value>",
            },
            {},
          ],
        },
      },
    };
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `datasetRecordId`                                                                                            | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `updateDatasetRecordPayloadRequest`                                                                          | [components.UpdateDatasetRecordPayloadRequest](../../models/components/updatedatasetrecordpayloadrequest.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |