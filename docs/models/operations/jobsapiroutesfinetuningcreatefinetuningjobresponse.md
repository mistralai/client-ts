# JobsApiRoutesFineTuningCreateFineTuningJobResponse

OK


## Supported Types

### `components.JobOut`

```typescript
const value: components.JobOut = {
  id: "90061434-2019-4ff6-a2a7-f1c43a3a8684",
  autoStart: false,
  hyperparameters: {},
  model: "codestral-latest",
  status: "VALIDATED",
  jobType: "<value>",
  createdAt: 828657,
  modifiedAt: 924967,
  trainingFiles: [
    "035dffe4-f31f-43b0-bbe4-65b3274d38fa",
  ],
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

