# JobsApiRoutesFineTuningCreateFineTuningJobResponse

OK


## Supported Types

### `operations.One`

```typescript
const value: operations.One = {
  id: "d6818f5f-200d-4efe-9e7c-d20456efe43b",
  autoStart: true,
  model: "Prius",
  status: "CANCELLATION_REQUESTED",
  createdAt: 263852,
  modifiedAt: 463777,
  trainingFiles: [
    "9f003c6f-9c82-4b28-9533-cb5576df3462",
  ],
  object: "job",
  jobType: "completion",
  hyperparameters: {
    learningRate: 0.0001,
  },
};
```

### `components.LegacyJobMetadataOut`

```typescript
const value: components.LegacyJobMetadataOut = {
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

