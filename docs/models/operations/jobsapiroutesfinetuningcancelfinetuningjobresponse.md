# JobsApiRoutesFineTuningCancelFineTuningJobResponse

OK


## Supported Types

### `components.ClassifierDetailedJobOut`

```typescript
const value: components.ClassifierDetailedJobOut = {
  id: "9324efc1-74d2-4cfb-aacc-8c936806a157",
  autoStart: true,
  model: "Land Cruiser",
  status: "CANCELLATION_REQUESTED",
  createdAt: 306183,
  modifiedAt: 163064,
  trainingFiles: [
    "4aadd7e9-6b01-477f-86b6-3ada38b71e42",
    "689691d3-0952-4741-a8e0-c05d353daf37",
  ],
  hyperparameters: {},
  checkpoints: [
    {
      metrics: {},
      stepNumber: 738998,
      createdAt: 1716963433,
    },
  ],
  classifierTargets: [],
};
```

### `components.CompletionDetailedJobOut`

```typescript
const value: components.CompletionDetailedJobOut = {
  id: "456fe44d-6df9-48f2-930f-131af06a7b94",
  autoStart: false,
  model: "Taurus",
  status: "VALIDATED",
  createdAt: 45490,
  modifiedAt: 318849,
  trainingFiles: [
    "c6396397-fb35-4d61-8f27-af5626373d30",
  ],
  hyperparameters: {},
  checkpoints: [
    {
      metrics: {},
      stepNumber: 738998,
      createdAt: 1716963433,
    },
  ],
};
```

