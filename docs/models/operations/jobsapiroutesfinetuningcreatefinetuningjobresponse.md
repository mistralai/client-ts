# JobsApiRoutesFineTuningCreateFineTuningJobResponse

OK


## Supported Types

### `operations.One`

```typescript
const value: operations.One = {
  id: "9020e2d5-c541-447d-b7f8-06b3b80c8174",
  autoStart: false,
  model: "Civic",
  status: "CANCELLATION_REQUESTED",
  createdAt: 546133,
  modifiedAt: 323614,
  trainingFiles: [
    "db6acdd2-d039-4194-b651-8f94f6bafe21",
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

