# JobsApiRoutesFineTuningStartFineTuningJobResponse

OK


## Supported Types

### `components.ClassifierDetailedJobOut`

```typescript
const value: components.ClassifierDetailedJobOut = {
  id: "569b5500-4bac-4cdb-bfe9-90f2bd531b7b",
  autoStart: false,
  model: "Altima",
  status: "CANCELLATION_REQUESTED",
  createdAt: 411626,
  modifiedAt: 305267,
  trainingFiles: [
    "ff3a1ada-6669-4ee0-8213-58abefadc4e0",
  ],
  hyperparameters: {},
  checkpoints: [
    {
      metrics: {},
      stepNumber: 273732,
      createdAt: 1716963433,
    },
  ],
  classifierTargets: [
    {
      name: "<value>",
      labels: [
        "<value>",
      ],
      weight: 4620.97,
      lossFunction: "multi_class",
    },
  ],
};
```

### `components.CompletionDetailedJobOut`

```typescript
const value: components.CompletionDetailedJobOut = {
  id: "1ac2687c-fc1c-4132-a38a-7f3cd8796866",
  autoStart: false,
  model: "ATS",
  status: "STARTED",
  createdAt: 851199,
  modifiedAt: 771078,
  trainingFiles: [
    "46ed9306-add0-4353-bcc8-f2e12b196bec",
  ],
  hyperparameters: {},
  checkpoints: [
    {
      metrics: {},
      stepNumber: 32945,
      createdAt: 1716963433,
    },
  ],
};
```

