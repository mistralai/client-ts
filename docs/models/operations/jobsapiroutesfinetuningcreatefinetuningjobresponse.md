# JobsApiRoutesFineTuningCreateFineTuningJobResponse

OK


## Supported Types

### `operations.One`

```typescript
const value: operations.One = {
  id: "b5c163a1-6485-4b0a-934c-f5d1ac26e109",
  autoStart: false,
  model: "PT Cruiser",
  status: "CANCELLATION_REQUESTED",
  createdAt: 299153,
  modifiedAt: 388404,
  trainingFiles: [
    "79fb64f2-bea6-435b-baed-de4568a4064f",
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

