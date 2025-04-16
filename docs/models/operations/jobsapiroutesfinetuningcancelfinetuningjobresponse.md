# JobsApiRoutesFineTuningCancelFineTuningJobResponse

OK


## Supported Types

### `components.ClassifierDetailedJobOut`

```typescript
const value: components.ClassifierDetailedJobOut = {
  id: "537fe10e-83aa-4140-8323-a012544cf8f6",
  autoStart: false,
  model: "Element",
  status: "VALIDATING",
  createdAt: 493407,
  modifiedAt: 657044,
  trainingFiles: [
    "7eeb726b-41eb-49cd-97ee-4988f4fe7dca",
  ],
  hyperparameters: {},
  checkpoints: [
    {
      metrics: {},
      stepNumber: 196451,
      createdAt: 1716963433,
    },
  ],
  classifierTargets: [
    {
      name: "<value>",
      labels: [
        "<value>",
      ],
      weight: 6715.28,
      lossFunction: "multi_class",
    },
  ],
};
```

### `components.CompletionDetailedJobOut`

```typescript
const value: components.CompletionDetailedJobOut = {
  id: "0a7e5782-bd04-40fa-9f8c-556a5ef03103",
  autoStart: false,
  model: "Roadster",
  status: "VALIDATING",
  createdAt: 493945,
  modifiedAt: 929619,
  trainingFiles: [
    "ac8f9036-9c6b-4c5f-aae8-bce286e1fe17",
  ],
  hyperparameters: {},
  checkpoints: [
    {
      metrics: {},
      stepNumber: 738152,
      createdAt: 1716963433,
    },
  ],
};
```

