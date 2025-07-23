# JobsApiRoutesFineTuningCreateFineTuningJobResponse

OK


## Supported Types

### `operations.One`

```typescript
const value: operations.One = {
  id: "d0391946-518f-494f-86ba-fe21ce7b1329",
  autoStart: false,
  model: "A4",
  status: "VALIDATED",
  createdAt: 677213,
  modifiedAt: 577864,
  trainingFiles: [
    "5d448772-846b-4ec6-a9b6-52bd5c9c6b61",
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

