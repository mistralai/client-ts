# JudgeDatasetRecordV1ObservabilityDatasetRecordsDatasetRecordIdLiveJudgingPostRequest

## Example Usage

```typescript
import {
  JudgeDatasetRecordV1ObservabilityDatasetRecordsDatasetRecordIdLiveJudgingPostRequest,
} from "@mistralai/mistralai/models/operations";

let value:
  JudgeDatasetRecordV1ObservabilityDatasetRecordsDatasetRecordIdLiveJudgingPostRequest =
    {
      datasetRecordId: "5fc84a2f-83f7-404e-9fd1-6a28eecb84cd",
      postDatasetRecordJudgingInSchema: {
        judgeDefinition: {
          name: "<value>",
          description: "encode separately rubbery cheerfully",
          modelName: "<value>",
          output: {
            options: [
              {
                value: "<value>",
                description: "without indeed because",
              },
            ],
          },
          instructions: "<value>",
          tools: [
            "<value 1>",
            "<value 2>",
            "<value 3>",
          ],
        },
      },
    };
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `datasetRecordId`                                                                                          | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `postDatasetRecordJudgingInSchema`                                                                         | [components.PostDatasetRecordJudgingInSchema](../../models/components/postdatasetrecordjudginginschema.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |