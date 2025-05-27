# JobsApiRoutesFineTuningGetFineTuningJobResponse

OK


## Supported Types

### `components.ClassifierDetailedJobOut`

```typescript
const value: components.ClassifierDetailedJobOut = {
  id: "a515285f-f99f-4ec5-8537-fe10e83aa140",
  autoStart: false,
  model: "Alpine",
  status: "STARTED",
  createdAt: 685467,
  modifiedAt: 49499,
  trainingFiles: [
    "12544cf8-f616-447a-97ee-b726b41eb9cd",
  ],
  hyperparameters: {},
  checkpoints: [
    {
      metrics: {},
      stepNumber: 881189,
      createdAt: 1716963433,
    },
  ],
  classifierTargets: [
    {
      name: "<value>",
      labels: [
        "<value>",
      ],
      weight: 9164.19,
      lossFunction: "single_class",
    },
  ],
};
```

### `components.CompletionDetailedJobOut`

```typescript
const value: components.CompletionDetailedJobOut = {
  id: "988f4fe7-dca5-43ad-b0a7-e5782bd040fa",
  autoStart: false,
  model: "Fortwo",
  status: "CANCELLED",
  createdAt: 374414,
  modifiedAt: 353819,
  trainingFiles: [
    "6a5ef031-037d-437e-aac8-f90369c6bc5f",
  ],
  hyperparameters: {},
  checkpoints: [
    {
      metrics: {},
      stepNumber: 880998,
      createdAt: 1716963433,
    },
  ],
};
```

