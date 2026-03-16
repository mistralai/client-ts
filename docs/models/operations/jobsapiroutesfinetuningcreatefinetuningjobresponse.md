# JobsApiRoutesFineTuningCreateFineTuningJobResponse

OK


## Supported Types

### `operations.ResponseT`

```typescript
const value: operations.ResponseT = {
  id: "193d948b-d7d0-47b1-8a07-1df7b6f7b521",
  autoStart: false,
  model: "Ranchero",
  status: "STARTED",
  createdAt: 38884,
  modifiedAt: 400180,
  trainingFiles: [],
  jobType: "completion",
  hyperparameters: {
    learningRate: 0.0001,
  },
};
```

### `components.LegacyJobMetadata`

```typescript
const value: components.LegacyJobMetadata = {
  expectedDurationSeconds: 220,
  cost: 10,
  costCurrency: "EUR",
  trainTokensPerStep: 131072,
  trainTokens: 1310720,
  dataTokens: 305375,
  details: "<value>",
  epochs: 4.2922,
  trainingSteps: 10,
};
```

