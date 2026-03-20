# JobsApiRoutesFineTuningCancelFineTuningJobResponse

OK


## Supported Types

### `components.ClassifierFineTuningJobDetails`

```typescript
const value: components.ClassifierFineTuningJobDetails = {
  id: "de2c6670-f1e8-4614-b13c-9ab77822704e",
  autoStart: true,
  model: "Beetle",
  status: "FAILED",
  createdAt: 147136,
  modifiedAt: 910870,
  trainingFiles: [
    "0ad9ab3d-acef-4066-8671-f76471059ca9",
    "abc46acb-3b23-4abb-a314-dffc7708bf1a",
  ],
  jobType: "classifier",
  hyperparameters: {},
  checkpoints: [
    {
      metrics: {},
      stepNumber: 364125,
      createdAt: 1716963433,
    },
  ],
  classifierTargets: [],
};
```

### `components.CompletionFineTuningJobDetails`

```typescript
const value: components.CompletionFineTuningJobDetails = {
  id: "00931eba-91c1-431f-ab53-f13af37caca7",
  autoStart: true,
  model: "Grand Cherokee",
  status: "FAILED_VALIDATION",
  createdAt: 630040,
  modifiedAt: 969645,
  trainingFiles: [
    "6702bef1-52df-4fbf-96ab-92899ff42ec5",
    "aed4c13c-d618-4e15-8f99-7f7b4f24d947",
  ],
  jobType: "completion",
  hyperparameters: {},
  checkpoints: [
    {
      metrics: {},
      stepNumber: 364125,
      createdAt: 1716963433,
    },
  ],
};
```

