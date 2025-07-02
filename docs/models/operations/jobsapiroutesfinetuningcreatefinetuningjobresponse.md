# JobsApiRoutesFineTuningCreateFineTuningJobResponse

OK


## Supported Types

### `operations.One`

```typescript
const value: operations.One = {
  id: "eeb726b4-1eb9-4cd7-8ee4-988f4fe7dca5",
  autoStart: false,
  model: "Mercielago",
  status: "CANCELLED",
  createdAt: 16252,
  modifiedAt: 642804,
  trainingFiles: [
    "7e5782bd-040f-4af8-8c55-6a5ef031037d",
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

