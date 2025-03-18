# JobsApiRoutesFineTuningCreateFineTuningJobResponse

OK


## Supported Types

### `components.JobOut`

```typescript
const value: components.JobOut = {
  id: "dfcbff71-4262-496e-bf84-9e6847638458",
  autoStart: false,
  hyperparameters: {},
  model: "Countach",
  status: "CANCELLATION_REQUESTED",
  jobType: "<value>",
  createdAt: 862319,
  modifiedAt: 48690,
  trainingFiles: [
    "4715ba9b-35ae-4840-ab05-8e160594319b",
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

