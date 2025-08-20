# JobsApiRoutesFineTuningCreateFineTuningJobResponse

OK


## Supported Types

### `operations.One`

```typescript
const value: operations.One = {
  id: "0e2d5c54-147d-47f8-a06b-3b80c8174e4f",
  autoStart: false,
  model: "Corvette",
  status: "CANCELLED",
  createdAt: 697401,
  modifiedAt: 413962,
  trainingFiles: [
    "acdd2d03-9194-4651-a8f9-4f6bafe21ce7",
  ],
  object: "job",
  jobType: "classifier",
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

