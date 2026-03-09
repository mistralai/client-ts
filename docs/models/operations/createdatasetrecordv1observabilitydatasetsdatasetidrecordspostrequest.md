# CreateDatasetRecordV1ObservabilityDatasetsDatasetIdRecordsPostRequest

## Example Usage

```typescript
import { CreateDatasetRecordV1ObservabilityDatasetsDatasetIdRecordsPostRequest } from "@mistralai/mistralai/models/operations";

let value:
  CreateDatasetRecordV1ObservabilityDatasetsDatasetIdRecordsPostRequest = {
    datasetId: "5258dfde-f22c-4567-aa05-b202ef694690",
    postDatasetRecordInSchema: {
      payload: {
        messages: [
          {
            "key": "<value>",
            "key1": "<value>",
            "key2": "<value>",
          },
        ],
      },
      properties: {
        "key": "<value>",
        "key1": "<value>",
        "key2": "<value>",
      },
    },
  };
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `datasetId`                                                                                  | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `postDatasetRecordInSchema`                                                                  | [components.PostDatasetRecordInSchema](../../models/components/postdatasetrecordinschema.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |