# JobsApiRoutesFineTuningCreateFineTuningJobResponse

OK


## Supported Types

### `components.JobOut`

```typescript
const value: components.JobOut = {
  id: "38fadfcb-ff71-4426-a296-ef849e684763",
  autoStart: false,
  hyperparameters: {},
  model: "Colorado",
  status: "VALIDATED",
  jobType: "<value>",
  createdAt: 524970,
  modifiedAt: 750595,
  trainingFiles: [
    "5ed04715-ba9b-435a-8e84-0b058e160594",
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

