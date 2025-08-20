# JobsApiRoutesFineTuningStartFineTuningJobResponse

OK


## Supported Types

### `components.ClassifierDetailedJobOut`

```typescript
const value: components.ClassifierDetailedJobOut = {
  id: "8cc7f744-b660-44dc-ab00-47e649ebd228",
  autoStart: false,
  model: "Wrangler",
  status: "VALIDATED",
  createdAt: 346557,
  modifiedAt: 515854,
  trainingFiles: [
    "a9b6d25c-5a42-44e7-9350-c390d204e486",
  ],
  hyperparameters: {},
  checkpoints: [
    {
      metrics: {},
      stepNumber: 927354,
      createdAt: 1716963433,
    },
  ],
  classifierTargets: [
    {
      name: "<value>",
      labels: [
        "<value>",
      ],
      weight: 7889.95,
      lossFunction: "multi_class",
    },
  ],
};
```

### `components.CompletionDetailedJobOut`

```typescript
const value: components.CompletionDetailedJobOut = {
  id: "8d7773e4-33dc-460f-92dc-fc5363bda209",
  autoStart: false,
  model: "CTS",
  status: "VALIDATED",
  createdAt: 541466,
  modifiedAt: 632917,
  trainingFiles: [
    "7f0ae33c-7f9e-402a-86d6-b91bb1857612",
  ],
  hyperparameters: {},
  checkpoints: [
    {
      metrics: {},
      stepNumber: 192447,
      createdAt: 1716963433,
    },
  ],
};
```

