# JobsApiRoutesFineTuningGetFineTuningJobResponse

OK


## Supported Types

### `components.ClassifierDetailedJobOut`

```typescript
const value: components.ClassifierDetailedJobOut = {
  id: "7bbec47b-2374-4d95-adcf-d62d05efab08",
  autoStart: false,
  model: "Countach",
  status: "QUEUED",
  createdAt: 228907,
  modifiedAt: 357984,
  trainingFiles: [
    "69b55004-bacc-4dbf-8e99-0f2bd531b7be",
  ],
  hyperparameters: {},
  checkpoints: [
    {
      metrics: {},
      stepNumber: 919171,
      createdAt: 1716963433,
    },
  ],
  classifierTargets: [
    {
      name: "<value>",
      labels: [
        "<value>",
      ],
      weight: 4116.26,
      lossFunction: "single_class",
    },
  ],
};
```

### `components.CompletionDetailedJobOut`

```typescript
const value: components.CompletionDetailedJobOut = {
  id: "ff3a1ada-6669-4ee0-8213-58abefadc4e0",
  autoStart: false,
  model: "Charger",
  status: "RUNNING",
  createdAt: 638363,
  modifiedAt: 101770,
  trainingFiles: [
    "ac2687cf-c1c1-4323-88a7-f3cd8796866b",
  ],
  hyperparameters: {},
  checkpoints: [
    {
      metrics: {},
      stepNumber: 166542,
      createdAt: 1716963433,
    },
  ],
};
```

