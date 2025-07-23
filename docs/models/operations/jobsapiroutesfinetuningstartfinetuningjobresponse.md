# JobsApiRoutesFineTuningStartFineTuningJobResponse

OK


## Supported Types

### `components.ClassifierDetailedJobOut`

```typescript
const value: components.ClassifierDetailedJobOut = {
  id: "25c5a424-e735-40c3-b90d-204e4864ecc8",
  autoStart: false,
  model: "Explorer",
  status: "RUNNING",
  createdAt: 493774,
  modifiedAt: 236910,
  trainingFiles: [
    "e433dc60-f2dc-4fc5-b363-bda2097358a7",
  ],
  hyperparameters: {},
  checkpoints: [
    {
      metrics: {},
      stepNumber: 46226,
      createdAt: 1716963433,
    },
  ],
  classifierTargets: [
    {
      name: "<value>",
      labels: [
        "<value>",
      ],
      weight: 6582.08,
      lossFunction: "multi_class",
    },
  ],
};
```

### `components.CompletionDetailedJobOut`

```typescript
const value: components.CompletionDetailedJobOut = {
  id: "33c7f9e0-2a6d-46b9-b1bb-185761213d06",
  autoStart: false,
  model: "Accord",
  status: "VALIDATING",
  createdAt: 727440,
  modifiedAt: 647553,
  trainingFiles: [
    "92c22c55-455b-435c-9e91-8a5dc92be4fc",
  ],
  hyperparameters: {},
  checkpoints: [
    {
      metrics: {},
      stepNumber: 616821,
      createdAt: 1716963433,
    },
  ],
};
```

