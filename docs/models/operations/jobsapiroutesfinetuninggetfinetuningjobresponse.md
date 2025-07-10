# JobsApiRoutesFineTuningGetFineTuningJobResponse

OK


## Supported Types

### `components.ClassifierDetailedJobOut`

```typescript
const value: components.ClassifierDetailedJobOut = {
  id: "799f24b3-d520-49d4-bec0-993570226bd2",
  autoStart: false,
  model: "Mercielago",
  status: "CANCELLED",
  createdAt: 968792,
  modifiedAt: 124460,
  trainingFiles: [
    "1c23ef5d-d999-4493-b26b-9fa22139de68",
  ],
  hyperparameters: {},
  checkpoints: [
    {
      metrics: {},
      stepNumber: 312070,
      createdAt: 1716963433,
    },
  ],
  classifierTargets: [
    {
      name: "<value>",
      labels: [
        "<value>",
      ],
      weight: 5956.69,
      lossFunction: "single_class",
    },
  ],
};
```

### `components.CompletionDetailedJobOut`

```typescript
const value: components.CompletionDetailedJobOut = {
  id: "72766324-3bb9-4191-9053-9ebcfa99d6ca",
  autoStart: false,
  model: "1",
  status: "VALIDATING",
  createdAt: 699989,
  modifiedAt: 579690,
  trainingFiles: [
    "46a26688-5c10-46e4-b2e2-5b436ce02f98",
  ],
  hyperparameters: {},
  checkpoints: [
    {
      metrics: {},
      stepNumber: 39783,
      createdAt: 1716963433,
    },
  ],
};
```

