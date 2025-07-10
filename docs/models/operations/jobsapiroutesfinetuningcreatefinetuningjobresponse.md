# JobsApiRoutesFineTuningCreateFineTuningJobResponse

OK


## Supported Types

### `operations.One`

```typescript
const value: operations.One = {
  id: "39194651-8f94-4f6b-9afe-21ce7b132930",
  autoStart: false,
  model: "Mercielago",
  status: "FAILED_VALIDATION",
  createdAt: 330725,
  modifiedAt: 833479,
  trainingFiles: [
    "44877284-6bec-469b-9652-bd5c9c6b6187",
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

