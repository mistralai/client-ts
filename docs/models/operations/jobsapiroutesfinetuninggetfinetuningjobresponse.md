# JobsApiRoutesFineTuningGetFineTuningJobResponse

OK


## Supported Types

### `components.ClassifierDetailedJobOut`

```typescript
const value: components.ClassifierDetailedJobOut = {
  id: "5c9c6b61-874e-4606-b6dc-3d3510ae7dca",
  autoStart: false,
  model: "Prius",
  status: "VALIDATING",
  createdAt: 789015,
  modifiedAt: 692662,
  trainingFiles: [
    "613c3fb7-99f2-44b3-8d52-09d4ec099357",
  ],
  hyperparameters: {},
  checkpoints: [
    {
      metrics: {},
      stepNumber: 149776,
      createdAt: 1716963433,
    },
  ],
  classifierTargets: [
    {
      name: "<value>",
      labels: [
        "<value>",
      ],
      weight: 1640.04,
      lossFunction: "single_class",
    },
  ],
};
```

### `components.CompletionDetailedJobOut`

```typescript
const value: components.CompletionDetailedJobOut = {
  id: "bd2caef1-1c23-4ef5-8dd9-9949326b9fa2",
  autoStart: false,
  model: "ATS",
  status: "STARTED",
  createdAt: 597951,
  modifiedAt: 838287,
  trainingFiles: [
    "e68c4927-2766-4324-a3bb-91910539ebcf",
  ],
  hyperparameters: {},
  checkpoints: [
    {
      metrics: {},
      stepNumber: 577731,
      createdAt: 1716963433,
    },
  ],
};
```

