# JobsApiRoutesFineTuningGetFineTuningJobResponse

OK


## Supported Types

### `components.ClassifierDetailedJobOut`

```typescript
const value: components.ClassifierDetailedJobOut = {
  id: "3d5209d4-ec09-4935-8702-26bd2caef11c",
  autoStart: false,
  model: "CTS",
  status: "CANCELLED",
  createdAt: 938965,
  modifiedAt: 318471,
  trainingFiles: [
    "dd999493-26b9-4fa2-9213-9de68c492727",
  ],
  hyperparameters: {},
  checkpoints: [
    {
      metrics: {},
      stepNumber: 433265,
      createdAt: 1716963433,
    },
  ],
  classifierTargets: [
    {
      name: "<value>",
      labels: [
        "<value>",
      ],
      weight: 2437.12,
      lossFunction: "single_class",
    },
  ],
};
```

### `components.CompletionDetailedJobOut`

```typescript
const value: components.CompletionDetailedJobOut = {
  id: "43bb9191-0539-4ebc-afa9-9d6ca403b946",
  autoStart: false,
  model: "Alpine",
  status: "RUNNING",
  createdAt: 416624,
  modifiedAt: 542601,
  trainingFiles: [
    "85c106e4-2e25-4b43-96ce-02f98d00fdb2",
  ],
  hyperparameters: {},
  checkpoints: [
    {
      metrics: {},
      stepNumber: 937294,
      createdAt: 1716963433,
    },
  ],
};
```

