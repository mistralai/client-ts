# JobsApiRoutesFineTuningCreateFineTuningJobResponse

OK


## Supported Types

### `components.JobOut`

```typescript
const value: components.JobOut = {
  id: "61434201-9ff6-42a7-bf1c-43a3a8684b65",
  autoStart: false,
  hyperparameters: {},
  model: "V90",
  status: "QUEUED",
  jobType: "<value>",
  createdAt: 232627,
  modifiedAt: 348519,
  trainingFiles: [
    "dffe4f31-f3b0-4be4-a65b-3274d38fadfc",
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

