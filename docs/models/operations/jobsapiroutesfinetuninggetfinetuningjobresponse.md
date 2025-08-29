# JobsApiRoutesFineTuningGetFineTuningJobResponse

OK


## Supported Types

### `components.ClassifierDetailedJobOut`

```typescript
const value: components.ClassifierDetailedJobOut = {
  id: "209d4ec0-9935-4702-b26b-d2caef11c23e",
  autoStart: false,
  model: "Corvette",
  status: "CANCELLED",
  createdAt: 858857,
  modifiedAt: 605391,
  trainingFiles: [
    "9949326b-9fa2-4213-89de-68c492727663",
  ],
  hyperparameters: {},
  checkpoints: [
    {
      metrics: {},
      stepNumber: 275665,
      createdAt: 1716963433,
    },
  ],
  classifierTargets: [
    {
      name: "<value>",
      labels: [
        "<value>",
      ],
      weight: 2395.8,
      lossFunction: "multi_class",
    },
  ],
};
```

### `components.CompletionDetailedJobOut`

```typescript
const value: components.CompletionDetailedJobOut = {
  id: "b9191053-9ebc-4fa9-99d6-ca403b946a26",
  autoStart: false,
  model: "Golf",
  status: "FAILED_VALIDATION",
  createdAt: 367727,
  modifiedAt: 762734,
  trainingFiles: [
    "106e42e2-5b43-46ce-802f-98d00fdb27ee",
  ],
  hyperparameters: {},
  checkpoints: [
    {
      metrics: {},
      stepNumber: 752492,
      createdAt: 1716963433,
    },
  ],
};
```

