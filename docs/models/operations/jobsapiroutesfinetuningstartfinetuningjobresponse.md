# JobsApiRoutesFineTuningStartFineTuningJobResponse

OK


## Supported Types

### `components.ClassifierFineTuningJobDetails`

```typescript
const value: components.ClassifierFineTuningJobDetails = {
  id: "77b38766-ec3a-4d75-be79-625072841729",
  autoStart: false,
  model: "Mustang",
  status: "CANCELLED",
  createdAt: 19399,
  modifiedAt: 106659,
  trainingFiles: [],
  jobType: "classifier",
  hyperparameters: {},
  checkpoints: [
    {
      metrics: {},
      stepNumber: 141445,
      createdAt: 1716963433,
    },
  ],
  classifierTargets: [],
};
```

### `components.CompletionFineTuningJobDetails`

```typescript
const value: components.CompletionFineTuningJobDetails = {
  id: "40f503f8-72c6-499d-81fe-6d6107f5ac80",
  autoStart: true,
  model: "Camry",
  status: "FAILED",
  createdAt: 414431,
  modifiedAt: 292743,
  trainingFiles: [
    "cb7f6c61-045b-4834-925d-fd27e46b7490",
    "99bb4e64-e5b5-4989-80a2-b41f94fac451",
  ],
  jobType: "completion",
  hyperparameters: {},
  checkpoints: [
    {
      metrics: {},
      stepNumber: 141445,
      createdAt: 1716963433,
    },
  ],
};
```

