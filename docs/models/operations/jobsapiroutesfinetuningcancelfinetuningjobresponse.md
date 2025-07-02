# JobsApiRoutesFineTuningCancelFineTuningJobResponse

OK


## Supported Types

### `components.ClassifierDetailedJobOut`

```typescript
const value: components.ClassifierDetailedJobOut = {
  id: "cd048634-f450-4d23-94e3-cce13b342271",
  autoStart: false,
  model: "Escalade",
  status: "QUEUED",
  createdAt: 388333,
  modifiedAt: 94122,
  trainingFiles: [
    "7dd19d3c-ec10-4349-a6b5-25ef3c4e2a1f",
  ],
  hyperparameters: {},
  checkpoints: [
    {
      metrics: {},
      stepNumber: 841816,
      createdAt: 1716963433,
    },
  ],
  classifierTargets: [
    {
      name: "<value>",
      labels: [
        "<value>",
      ],
      weight: 5666.69,
      lossFunction: "single_class",
    },
  ],
};
```

### `components.CompletionDetailedJobOut`

```typescript
const value: components.CompletionDetailedJobOut = {
  id: "987c2265-1dc8-4f1c-a453-c2da0caeb8d4",
  autoStart: false,
  model: "Civic",
  status: "CANCELLATION_REQUESTED",
  createdAt: 226196,
  modifiedAt: 15738,
  trainingFiles: [
    "5808db9f-fd97-409f-9d52-cbfd817584dd",
  ],
  hyperparameters: {},
  checkpoints: [
    {
      metrics: {},
      stepNumber: 599581,
      createdAt: 1716963433,
    },
  ],
};
```

