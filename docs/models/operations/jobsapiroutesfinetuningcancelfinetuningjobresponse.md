# JobsApiRoutesFineTuningCancelFineTuningJobResponse

OK


## Supported Types

### `components.ClassifierDetailedJobOut`

```typescript
const value: components.ClassifierDetailedJobOut = {
  id: "7dac7abb-0150-466e-a9be-704de54e5a41",
  autoStart: false,
  model: "V90",
  status: "FAILED",
  createdAt: 208826,
  modifiedAt: 682430,
  trainingFiles: [
    "c58a2f7f-3720-4366-bea6-f95b7ee584af",
  ],
  hyperparameters: {},
  checkpoints: [
    {
      metrics: {},
      stepNumber: 366410,
      createdAt: 1716963433,
    },
  ],
  classifierTargets: [
    {
      name: "<value>",
      labels: [
        "<value>",
      ],
      weight: 953.8,
      lossFunction: "multi_class",
    },
  ],
};
```

### `components.CompletionDetailedJobOut`

```typescript
const value: components.CompletionDetailedJobOut = {
  id: "6457ff45-802e-4016-bb44-4d38fb5cf5b1",
  autoStart: false,
  model: "ATS",
  status: "VALIDATED",
  createdAt: 542506,
  modifiedAt: 263577,
  trainingFiles: [
    "a8b58ccb-8a17-4d9f-941a-1c48cc7f744b",
  ],
  hyperparameters: {},
  checkpoints: [
    {
      metrics: {},
      stepNumber: 418788,
      createdAt: 1716963433,
    },
  ],
};
```

