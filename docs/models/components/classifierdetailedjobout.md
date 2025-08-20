# ClassifierDetailedJobOut

## Example Usage

```typescript
import { ClassifierDetailedJobOut } from "@mistralai/mistralai/models/components";

let value: ClassifierDetailedJobOut = {
  id: "2dbefcf9-005d-4df1-b0e4-8f6a6c83448b",
  autoStart: false,
  model: "Model 3",
  status: "SUCCESS",
  createdAt: 168926,
  modifiedAt: 374062,
  trainingFiles: [
    "6a445c91-15cb-4bc4-888b-f4ca9cf02c18",
  ],
  hyperparameters: {},
  checkpoints: [
    {
      metrics: {},
      stepNumber: 274295,
      createdAt: 1716963433,
    },
  ],
  classifierTargets: [
    {
      name: "<value>",
      labels: [
        "<value>",
      ],
      weight: 7018.41,
      lossFunction: "single_class",
    },
  ],
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                               | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `autoStart`                                                                                                                        | *boolean*                                                                                                                          | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `model`                                                                                                                            | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | The name of the model to fine-tune.                                                                                                |
| `status`                                                                                                                           | [components.ClassifierDetailedJobOutStatus](../../models/components/classifierdetailedjoboutstatus.md)                             | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `createdAt`                                                                                                                        | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `modifiedAt`                                                                                                                       | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `trainingFiles`                                                                                                                    | *string*[]                                                                                                                         | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `validationFiles`                                                                                                                  | *string*[]                                                                                                                         | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |
| `object`                                                                                                                           | [components.ClassifierDetailedJobOutObject](../../models/components/classifierdetailedjoboutobject.md)                             | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |
| `fineTunedModel`                                                                                                                   | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |
| `suffix`                                                                                                                           | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |
| `integrations`                                                                                                                     | *components.ClassifierDetailedJobOutIntegrations*[]                                                                                | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |
| `trainedTokens`                                                                                                                    | *number*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |
| `metadata`                                                                                                                         | [components.JobMetadataOut](../../models/components/jobmetadataout.md)                                                             | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |
| `jobType`                                                                                                                          | [components.ClassifierDetailedJobOutJobType](../../models/components/classifierdetailedjoboutjobtype.md)                           | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |
| `hyperparameters`                                                                                                                  | [components.ClassifierTrainingParameters](../../models/components/classifiertrainingparameters.md)                                 | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `events`                                                                                                                           | [components.EventOut](../../models/components/eventout.md)[]                                                                       | :heavy_minus_sign:                                                                                                                 | Event items are created every time the status of a fine-tuning job changes. The timestamped list of all events is accessible here. |
| `checkpoints`                                                                                                                      | [components.CheckpointOut](../../models/components/checkpointout.md)[]                                                             | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |
| `classifierTargets`                                                                                                                | [components.ClassifierTargetOut](../../models/components/classifiertargetout.md)[]                                                 | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |