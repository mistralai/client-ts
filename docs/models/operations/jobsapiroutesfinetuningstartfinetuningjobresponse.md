# JobsApiRoutesFineTuningStartFineTuningJobResponse

OK


## Supported Types

### `components.ClassifierDetailedJobOut`

```typescript
const value: components.ClassifierDetailedJobOut = {
  id: "1c48cc7f-744b-4660-84dc-b0047e649ebd",
  autoStart: false,
  model: "Alpine",
  status: "FAILED_VALIDATION",
  createdAt: 697371,
  modifiedAt: 954989,
  trainingFiles: [
    "558a9b6d-25c5-4a42-94e7-350c390d204e",
  ],
  hyperparameters: {},
  checkpoints: [
    {
      metrics: {},
      stepNumber: 503479,
      createdAt: 1716963433,
    },
  ],
  classifierTargets: [
    {
      name: "<value>",
      labels: [
        "<value>",
      ],
      weight: 4072.3,
      lossFunction: "single_class",
    },
  ],
};
```

### `components.CompletionDetailedJobOut`

```typescript
const value: components.CompletionDetailedJobOut = {
  id: "ecc8d777-3e43-43dc-860f-2dcfc5363bda",
  autoStart: false,
  model: "911",
  status: "FAILED_VALIDATION",
  createdAt: 462673,
  modifiedAt: 199704,
  trainingFiles: [
    "58a7f0ae-33c7-4f9e-902a-6d6b91bb1857",
  ],
  hyperparameters: {},
  checkpoints: [
    {
      metrics: {},
      stepNumber: 104774,
      createdAt: 1716963433,
    },
  ],
};
```

