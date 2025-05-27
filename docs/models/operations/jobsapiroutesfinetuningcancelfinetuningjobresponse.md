# JobsApiRoutesFineTuningCancelFineTuningJobResponse

OK


## Supported Types

### `components.ClassifierDetailedJobOut`

```typescript
const value: components.ClassifierDetailedJobOut = {
  id: "62d05efa-b088-4513-b569-b55004baccdb",
  autoStart: false,
  model: "Spyder",
  status: "FAILED_VALIDATION",
  createdAt: 588158,
  modifiedAt: 34267,
  trainingFiles: [
    "f2bd531b-7be2-4e64-8ff3-a1ada6669ee0",
  ],
  hyperparameters: {},
  checkpoints: [
    {
      metrics: {},
      stepNumber: 112224,
      createdAt: 1716963433,
    },
  ],
  classifierTargets: [
    {
      name: "<value>",
      labels: [
        "<value>",
      ],
      weight: 1933.34,
      lossFunction: "single_class",
    },
  ],
};
```

### `components.CompletionDetailedJobOut`

```typescript
const value: components.CompletionDetailedJobOut = {
  id: "8abefadc-4e00-447a-81ac-2687cfc1c132",
  autoStart: false,
  model: "Fortwo",
  status: "FAILED",
  createdAt: 470321,
  modifiedAt: 959696,
  trainingFiles: [
    "3cd87968-66b1-42dc-b46e-d9306add0353",
  ],
  hyperparameters: {},
  checkpoints: [
    {
      metrics: {},
      stepNumber: 767466,
      createdAt: 1716963433,
    },
  ],
};
```

