# JobsApiRoutesFineTuningCreateFineTuningJobResponse

OK


## Supported Types

### `components.JobOut`

```typescript
const value: components.JobOut = {
  id: "ded2a616-4d0f-4550-826e-1fd753900614",
  autoStart: false,
  hyperparameters: {},
  model: "mistral-small-latest",
  status: "STARTED",
  jobType: "<value>",
  createdAt: 12036,
  modifiedAt: 115484,
  trainingFiles: [
    "9ff62a7f-1c43-4a3a-b868-4b65de035dff",
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

