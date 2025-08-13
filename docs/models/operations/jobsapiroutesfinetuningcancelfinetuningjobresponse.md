# JobsApiRoutesFineTuningCancelFineTuningJobResponse

OK


## Supported Types

### `components.ClassifierDetailedJobOut`

```typescript
const value: components.ClassifierDetailedJobOut = {
  id: "b015066e-9be7-404d-ae54-e5a418e93ac5",
  autoStart: false,
  model: "Mercielago",
  status: "STARTED",
  createdAt: 964101,
  modifiedAt: 451252,
  trainingFiles: [
    "f3720366-ea6f-495b-97ee-584afd51f645",
  ],
  hyperparameters: {},
  checkpoints: [
    {
      metrics: {},
      stepNumber: 956752,
      createdAt: 1716963433,
    },
  ],
  classifierTargets: [
    {
      name: "<value>",
      labels: [
        "<value>",
      ],
      weight: 9866.23,
      lossFunction: "single_class",
    },
  ],
};
```

### `components.CompletionDetailedJobOut`

```typescript
const value: components.CompletionDetailedJobOut = {
  id: "5802e016-b444-4d38-afb5-cf5b1e1584a8",
  autoStart: false,
  model: "Cruze",
  status: "FAILED_VALIDATION",
  createdAt: 812186,
  modifiedAt: 810697,
  trainingFiles: [
    "b8a17d9f-41a1-4c48-8cc7-f744b6604dcb",
  ],
  hyperparameters: {},
  checkpoints: [
    {
      metrics: {},
      stepNumber: 26990,
      createdAt: 1716963433,
    },
  ],
};
```

