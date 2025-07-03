# JobsApiRoutesFineTuningStartFineTuningJobResponse

OK


## Supported Types

### `components.ClassifierDetailedJobOut`

```typescript
const value: components.ClassifierDetailedJobOut = {
  id: "c5a424e7-350c-4390-9d20-4e4864ecc8d7",
  autoStart: false,
  model: "Fiesta",
  status: "VALIDATING",
  createdAt: 923652,
  modifiedAt: 258750,
  trainingFiles: [
    "33dc60f2-dcfc-4536-a3bd-a2097358a7f0",
  ],
  hyperparameters: {},
  checkpoints: [
    {
      metrics: {},
      stepNumber: 909558,
      createdAt: 1716963433,
    },
  ],
  classifierTargets: [
    {
      name: "<value>",
      labels: [
        "<value>",
      ],
      weight: 2365.64,
      lossFunction: "single_class",
    },
  ],
};
```

### `components.CompletionDetailedJobOut`

```typescript
const value: components.CompletionDetailedJobOut = {
  id: "c7f9e02a-6d6b-491b-8b18-5761213d06c1",
  autoStart: false,
  model: "Model T",
  status: "FAILED",
  createdAt: 563024,
  modifiedAt: 171640,
  trainingFiles: [
    "c22c5545-5b35-4ce9-918a-5dc92be4fc49",
  ],
  hyperparameters: {},
  checkpoints: [
    {
      metrics: {},
      stepNumber: 99467,
      createdAt: 1716963433,
    },
  ],
};
```

