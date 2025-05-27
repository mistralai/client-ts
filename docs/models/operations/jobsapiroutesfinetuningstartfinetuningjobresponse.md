# JobsApiRoutesFineTuningStartFineTuningJobResponse

OK


## Supported Types

### `components.ClassifierDetailedJobOut`

```typescript
const value: components.ClassifierDetailedJobOut = {
  id: "ce13b342-2715-4606-a17d-d19d3cec1034",
  autoStart: false,
  model: "El Camino",
  status: "SUCCESS",
  createdAt: 353075,
  modifiedAt: 154425,
  trainingFiles: [
    "5ef3c4e2-a1fb-4d97-9987-c22651dc8f1c",
  ],
  hyperparameters: {},
  checkpoints: [
    {
      metrics: {},
      stepNumber: 368599,
      createdAt: 1716963433,
    },
  ],
  classifierTargets: [
    {
      name: "<value>",
      labels: [
        "<value>",
      ],
      weight: 2192.79,
      lossFunction: "multi_class",
    },
  ],
};
```

### `components.CompletionDetailedJobOut`

```typescript
const value: components.CompletionDetailedJobOut = {
  id: "2da0caeb-8d48-44f3-b058-08db9ffd9709",
  autoStart: false,
  model: "Ranchero",
  status: "VALIDATED",
  createdAt: 152047,
  modifiedAt: 784059,
  trainingFiles: [
    "bfd81758-4dd5-496e-b2bf-23bc79371547",
  ],
  hyperparameters: {},
  checkpoints: [
    {
      metrics: {},
      stepNumber: 181267,
      createdAt: 1716963433,
    },
  ],
};
```

