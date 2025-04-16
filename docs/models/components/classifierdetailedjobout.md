# ClassifierDetailedJobOut

## Example Usage

```typescript
import { ClassifierDetailedJobOut } from "@mistralai/mistralai/models/components";

let value: ClassifierDetailedJobOut = {
  id: "8fadfcbf-f714-4262-996e-f849e6847638",
  autoStart: false,
  model: "Durango",
  status: "FAILED_VALIDATION",
  createdAt: 750595,
  modifiedAt: 333507,
  trainingFiles: [
    "ed04715b-a9b3-45ae-8840-b058e1605943",
  ],
  hyperparameters: {},
  checkpoints: [
    {
      metrics: {},
      stepNumber: 577140,
      createdAt: 1716963433,
    },
  ],
  classifierTargets: [
    {
      name: "<value>",
      labels: [
        "<value>",
      ],
      weight: 6952.7,
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