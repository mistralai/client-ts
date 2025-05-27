# JobsApiRoutesFineTuningCreateFineTuningJobResponse

OK


## Supported Types

### `operations.One`

```typescript
const value: operations.One = {
  id: "55fd60da-2f1d-446c-baf9-1ecb062dbefc",
  autoStart: false,
  model: "Jetta",
  status: "QUEUED",
  createdAt: 14251,
  modifiedAt: 342104,
  trainingFiles: [
    "ddf10e48-f6a6-4c83-a448-bfbc256a445c",
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

