# JobsApiRoutesFineTuningCancelFineTuningJobResponse

OK


## Supported Types

### `components.ClassifierDetailedJobOut`

```typescript
const value: components.ClassifierDetailedJobOut = {
  id: "36ce02f9-8d00-4fdb-b27e-e0c0f6f545b3",
  autoStart: false,
  model: "Impala",
  status: "CANCELLATION_REQUESTED",
  createdAt: 987085,
  modifiedAt: 185182,
  trainingFiles: [
    "f00ff277-dac7-4abb-9015-066e9be704de",
  ],
  hyperparameters: {},
  checkpoints: [
    {
      metrics: {},
      stepNumber: 293991,
      createdAt: 1716963433,
    },
  ],
  classifierTargets: [
    {
      name: "<value>",
      labels: [
        "<value>",
      ],
      weight: 9245.06,
      lossFunction: "single_class",
    },
  ],
};
```

### `components.CompletionDetailedJobOut`

```typescript
const value: components.CompletionDetailedJobOut = {
  id: "a418e93a-c58a-42f7-9f37-20366ea6f95b",
  autoStart: false,
  model: "Silverado",
  status: "CANCELLED",
  createdAt: 367350,
  modifiedAt: 562339,
  trainingFiles: [
    "4afd51f6-457f-4f45-a802-e016b444d38f",
  ],
  hyperparameters: {},
  checkpoints: [
    {
      metrics: {},
      stepNumber: 336350,
      createdAt: 1716963433,
    },
  ],
};
```

