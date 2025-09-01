# JobsApiRoutesFineTuningCreateFineTuningJobResponse

OK


## Supported Types

### `operations.One`

```typescript
const value: operations.One = {
  id: "94f6bafe-21ce-47b1-8329-304a95d44877",
  autoStart: false,
  model: "Focus",
  status: "VALIDATING",
  createdAt: 392180,
  modifiedAt: 733571,
  trainingFiles: [
    "ec69b652-bd5c-49c6-8b61-874e6066dc3d",
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

