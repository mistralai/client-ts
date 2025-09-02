# JobsApiRoutesFineTuningCancelFineTuningJobResponse

OK


## Supported Types

### `components.ClassifierDetailedJobOut`

```typescript
const value: components.ClassifierDetailedJobOut = {
  id: "5b436ce0-2f98-4d00-9fdb-27ee0c0f6f54",
  autoStart: false,
  model: "Model T",
  status: "STARTED",
  createdAt: 864058,
  modifiedAt: 590573,
  trainingFiles: [
    "ff2f00ff-277d-4ac7-9abb-015066e9be70",
  ],
  hyperparameters: {},
  checkpoints: [
    {
      metrics: {},
      stepNumber: 814159,
      createdAt: 1716963433,
    },
  ],
  classifierTargets: [
    {
      name: "<value>",
      labels: [
        "<value>",
      ],
      weight: 9018.42,
      lossFunction: "single_class",
    },
  ],
};
```

### `components.CompletionDetailedJobOut`

```typescript
const value: components.CompletionDetailedJobOut = {
  id: "4e5a418e-93ac-458a-a2f7-f3720366ea6f",
  autoStart: false,
  model: "Corvette",
  status: "FAILED",
  createdAt: 495700,
  modifiedAt: 881168,
  trainingFiles: [
    "e584afd5-1f64-457f-8f45-802e016b444d",
  ],
  hyperparameters: {},
  checkpoints: [
    {
      metrics: {},
      stepNumber: 562402,
      createdAt: 1716963433,
    },
  ],
};
```

