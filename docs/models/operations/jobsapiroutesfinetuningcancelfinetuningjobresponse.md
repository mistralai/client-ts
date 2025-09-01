# JobsApiRoutesFineTuningCancelFineTuningJobResponse

OK


## Supported Types

### `components.ClassifierDetailedJobOut`

```typescript
const value: components.ClassifierDetailedJobOut = {
  id: "5066e9be-704d-4e54-be5a-418e93ac58a2",
  autoStart: false,
  model: "Explorer",
  status: "CANCELLATION_REQUESTED",
  createdAt: 189574,
  modifiedAt: 483774,
  trainingFiles: [
    "20366ea6-f95b-47ee-9584-afd51f6457ff",
  ],
  hyperparameters: {},
  checkpoints: [
    {
      metrics: {},
      stepNumber: 351469,
      createdAt: 1716963433,
    },
  ],
  classifierTargets: [
    {
      name: "<value>",
      labels: [
        "<value>",
      ],
      weight: 5118.07,
      lossFunction: "single_class",
    },
  ],
};
```

### `components.CompletionDetailedJobOut`

```typescript
const value: components.CompletionDetailedJobOut = {
  id: "2e016b44-4d38-4fb5-bcf5-b1e1584a8b58",
  autoStart: false,
  model: "Prius",
  status: "SUCCESS",
  createdAt: 541936,
  modifiedAt: 673261,
  trainingFiles: [
    "17d9f41a-1c48-4cc7-9f74-4b6604dcb004",
  ],
  hyperparameters: {},
  checkpoints: [
    {
      metrics: {},
      stepNumber: 909742,
      createdAt: 1716963433,
    },
  ],
};
```

