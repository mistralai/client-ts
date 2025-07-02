# JobsApiRoutesFineTuningStartFineTuningJobResponse

OK


## Supported Types

### `components.ClassifierDetailedJobOut`

```typescript
const value: components.ClassifierDetailedJobOut = {
  id: "f8d95368-0293-4d51-81e1-2d4ad9fb18bc",
  autoStart: false,
  model: "Model T",
  status: "CANCELLED",
  createdAt: 746834,
  modifiedAt: 512349,
  trainingFiles: [
    "78be9eb1-8445-459a-b420-920e81df7016",
  ],
  hyperparameters: {},
  checkpoints: [
    {
      metrics: {},
      stepNumber: 148038,
      createdAt: 1716963433,
    },
  ],
  classifierTargets: [
    {
      name: "<value>",
      labels: [
        "<value>",
      ],
      weight: 8239.9,
      lossFunction: "single_class",
    },
  ],
};
```

### `components.CompletionDetailedJobOut`

```typescript
const value: components.CompletionDetailedJobOut = {
  id: "7a09f2b9-2008-4fab-8792-ecf432fc2862",
  autoStart: false,
  model: "Wrangler",
  status: "VALIDATED",
  createdAt: 941440,
  modifiedAt: 75610,
  trainingFiles: [
    "72081bb2-fb4b-4b56-a59e-2e0a6cb7a8c7",
  ],
  hyperparameters: {},
  checkpoints: [
    {
      metrics: {},
      stepNumber: 250520,
      createdAt: 1716963433,
    },
  ],
};
```

