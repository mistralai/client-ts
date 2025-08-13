# JobsApiRoutesFineTuningStartFineTuningJobResponse

OK


## Supported Types

### `components.ClassifierDetailedJobOut`

```typescript
const value: components.ClassifierDetailedJobOut = {
  id: "7350c390-d204-4e48-b64e-cc8d7773e433",
  autoStart: false,
  model: "Mustang",
  status: "RUNNING",
  createdAt: 13781,
  modifiedAt: 975736,
  trainingFiles: [
    "2dcfc536-3bda-4209-a735-8a7f0ae33c7f",
  ],
  hyperparameters: {},
  checkpoints: [
    {
      metrics: {},
      stepNumber: 923442,
      createdAt: 1716963433,
    },
  ],
  classifierTargets: [
    {
      name: "<value>",
      labels: [
        "<value>",
      ],
      weight: 122.1,
      lossFunction: "single_class",
    },
  ],
};
```

### `components.CompletionDetailedJobOut`

```typescript
const value: components.CompletionDetailedJobOut = {
  id: "a6d6b91b-b185-4761-8213-d06c13ba92c2",
  autoStart: false,
  model: "PT Cruiser",
  status: "VALIDATED",
  createdAt: 312617,
  modifiedAt: 278672,
  trainingFiles: [
    "55b35ce9-18a5-4dc9-b2be-4fc4941da926",
  ],
  hyperparameters: {},
  checkpoints: [
    {
      metrics: {},
      stepNumber: 163304,
      createdAt: 1716963433,
    },
  ],
};
```

