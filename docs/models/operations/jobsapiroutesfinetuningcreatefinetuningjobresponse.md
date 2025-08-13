# JobsApiRoutesFineTuningCreateFineTuningJobResponse

OK


## Supported Types

### `operations.One`

```typescript
const value: operations.One = {
  id: "18f94f6b-afe2-41ce-a7b1-329304a95d44",
  autoStart: false,
  model: "F-150",
  status: "RUNNING",
  createdAt: 155785,
  modifiedAt: 504646,
  trainingFiles: [
    "46bec69b-652b-4d5c-b9c6-b61874e6066d",
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

