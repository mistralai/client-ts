# JobsApiRoutesFineTuningStartFineTuningJobResponse

OK


## Supported Types

### `components.ClassifierDetailedJobOut`

```typescript
const value: components.ClassifierDetailedJobOut = {
  id: "0c390d20-4e48-464e-8cc8-d7773e433dc6",
  autoStart: false,
  model: "XC90",
  status: "STARTED",
  createdAt: 851423,
  modifiedAt: 781723,
  trainingFiles: [
    "fc5363bd-a209-4735-88a7-f0ae33c7f9e0",
  ],
  hyperparameters: {},
  checkpoints: [
    {
      metrics: {},
      stepNumber: 684419,
      createdAt: 1716963433,
    },
  ],
  classifierTargets: [
    {
      name: "<value>",
      labels: [
        "<value>",
      ],
      weight: 4164.66,
      lossFunction: "multi_class",
    },
  ],
};
```

### `components.CompletionDetailedJobOut`

```typescript
const value: components.CompletionDetailedJobOut = {
  id: "6b91bb18-5761-4213-9d06-c13ba92c22c5",
  autoStart: false,
  model: "Charger",
  status: "VALIDATED",
  createdAt: 340587,
  modifiedAt: 696368,
  trainingFiles: [
    "35ce918a-5dc9-42be-84fc-4941da926e20",
  ],
  hyperparameters: {},
  checkpoints: [
    {
      metrics: {},
      stepNumber: 250180,
      createdAt: 1716963433,
    },
  ],
};
```

