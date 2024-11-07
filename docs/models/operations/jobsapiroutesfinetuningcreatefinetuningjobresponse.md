# JobsApiRoutesFineTuningCreateFineTuningJobResponse

OK


## Supported Types

### `components.JobOut`

```typescript
const value: components.JobOut = {
  id: "211a368d-b420-4447-8ab4-62c0bcc45945",
  autoStart: false,
  hyperparameters: {},
  model: "codestral-latest",
  status: "QUEUED",
  jobType: "<value>",
  createdAt: 799796,
  modifiedAt: 76956,
  trainingFiles: [
    "849fa068-8a42-46f2-be87-e7b6ebb5ca32",
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

