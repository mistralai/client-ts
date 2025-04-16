# JobsApiRoutesFineTuningGetFineTuningJobResponse

OK


## Supported Types

### `components.ClassifierDetailedJobOut`

```typescript
const value: components.ClassifierDetailedJobOut = {
  id: "06a61142-f2c9-498f-b5c8-6f916cbe4c79",
  autoStart: false,
  model: "XC90",
  status: "CANCELLED",
  createdAt: 359097,
  modifiedAt: 887701,
  trainingFiles: [
    "a60c8cbc-4c87-4a01-84f2-5055fd60da2f",
  ],
  hyperparameters: {},
  checkpoints: [
    {
      metrics: {},
      stepNumber: 867115,
      createdAt: 1716963433,
    },
  ],
  classifierTargets: [
    {
      name: "<value>",
      labels: [
        "<value>",
      ],
      weight: 2942.66,
      lossFunction: "single_class",
    },
  ],
};
```

### `components.CompletionDetailedJobOut`

```typescript
const value: components.CompletionDetailedJobOut = {
  id: "caf91ecb-062d-4bef-9cf9-005ddf10e48f",
  autoStart: false,
  model: "Malibu",
  status: "RUNNING",
  createdAt: 768195,
  modifiedAt: 527715,
  trainingFiles: [
    "3448bfbc-256a-4445-bc91-15cbbc488bf4",
  ],
  hyperparameters: {},
  checkpoints: [
    {
      metrics: {},
      stepNumber: 659971,
      createdAt: 1716963433,
    },
  ],
};
```

