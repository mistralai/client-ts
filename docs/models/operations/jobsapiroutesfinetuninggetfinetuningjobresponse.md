# JobsApiRoutesFineTuningGetFineTuningJobResponse

OK


## Supported Types

### `components.ClassifierDetailedJobOut`

```typescript
const value: components.ClassifierDetailedJobOut = {
  id: "2bd5c9c6-b618-474e-b606-6dc3d3510ae7",
  autoStart: false,
  model: "PT Cruiser",
  status: "FAILED",
  createdAt: 978229,
  modifiedAt: 802188,
  trainingFiles: [
    "4cb613c3-fb79-49f2-84b3-d5209d4ec099",
  ],
  hyperparameters: {},
  checkpoints: [
    {
      metrics: {},
      stepNumber: 334544,
      createdAt: 1716963433,
    },
  ],
  classifierTargets: [
    {
      name: "<value>",
      labels: [
        "<value>",
      ],
      weight: 4582.79,
      lossFunction: "single_class",
    },
  ],
};
```

### `components.CompletionDetailedJobOut`

```typescript
const value: components.CompletionDetailedJobOut = {
  id: "226bd2ca-ef11-4c23-bef5-dd99949326b9",
  autoStart: false,
  model: "LeBaron",
  status: "STARTED",
  createdAt: 161218,
  modifiedAt: 93067,
  trainingFiles: [
    "39de68c4-9272-4766-a324-3bb91910539e",
  ],
  hyperparameters: {},
  checkpoints: [
    {
      metrics: {},
      stepNumber: 767361,
      createdAt: 1716963433,
    },
  ],
};
```

