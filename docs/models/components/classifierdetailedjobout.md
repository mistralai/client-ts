# ClassifierDetailedJobOut

## Example Usage

```typescript
import { ClassifierDetailedJobOut } from "@mistralai/mistralai/models/components";

let value: ClassifierDetailedJobOut = {
  id: "adfecb52-1368-4cf1-819b-def662aad179",
  autoStart: false,
  model: "Beetle",
  status: "CANCELLED",
  createdAt: 58534,
  modifiedAt: 470621,
  trainingFiles: [
    "17f6d146-6a5b-4a66-a91d-ab816650b19b",
  ],
  hyperparameters: {},
  checkpoints: [
    {
      metrics: {},
      stepNumber: 959143,
      createdAt: 1716963433,
    },
  ],
  classifierTargets: [
    {
      name: "<value>",
      labels: [
        "<value>",
      ],
      weight: 1032.98,
      lossFunction: "multi_class",
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