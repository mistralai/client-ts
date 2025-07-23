# JobsApiRoutesFineTuningCancelFineTuningJobResponse

OK


## Supported Types

### `components.ClassifierDetailedJobOut`

```typescript
const value: components.ClassifierDetailedJobOut = {
  id: "277dac7a-bb01-4506-96e9-be704de54e5a",
  autoStart: false,
  model: "ATS",
  status: "FAILED_VALIDATION",
  createdAt: 923232,
  modifiedAt: 618641,
  trainingFiles: [
    "3ac58a2f-7f37-4203-a66e-a6f95b7ee584",
  ],
  hyperparameters: {},
  checkpoints: [
    {
      metrics: {},
      stepNumber: 992347,
      createdAt: 1716963433,
    },
  ],
  classifierTargets: [
    {
      name: "<value>",
      labels: [
        "<value>",
      ],
      weight: 8325.89,
      lossFunction: "single_class",
    },
  ],
};
```

### `components.CompletionDetailedJobOut`

```typescript
const value: components.CompletionDetailedJobOut = {
  id: "1f6457ff-4580-42e0-a16b-444d38fb5cf5",
  autoStart: false,
  model: "A8",
  status: "CANCELLED",
  createdAt: 96256,
  modifiedAt: 372925,
  trainingFiles: [
    "84a8b58c-cb8a-417d-99f4-1a1c48cc7f74",
  ],
  hyperparameters: {},
  checkpoints: [
    {
      metrics: {},
      stepNumber: 743643,
      createdAt: 1716963433,
    },
  ],
};
```

