# JobsApiRoutesFineTuningGetFineTuningJobResponse

OK


## Supported Types

### `components.ClassifierDetailedJobOut`

```typescript
const value: components.ClassifierDetailedJobOut = {
  id: "fb799f24-b3d5-4209-bd4e-c0993570226b",
  autoStart: false,
  model: "Aventador",
  status: "SUCCESS",
  createdAt: 670710,
  modifiedAt: 890688,
  trainingFiles: [
    "f11c23ef-5dd9-4994-9932-6b9fa22139de",
  ],
  hyperparameters: {},
  checkpoints: [
    {
      metrics: {},
      stepNumber: 558583,
      createdAt: 1716963433,
    },
  ],
  classifierTargets: [
    {
      name: "<value>",
      labels: [
        "<value>",
      ],
      weight: 8092,
      lossFunction: "single_class",
    },
  ],
};
```

### `components.CompletionDetailedJobOut`

```typescript
const value: components.CompletionDetailedJobOut = {
  id: "92727663-243b-4b91-b910-539ebcfa99d6",
  autoStart: false,
  model: "Malibu",
  status: "VALIDATED",
  createdAt: 13688,
  modifiedAt: 209920,
  trainingFiles: [
    "b946a266-885c-4106-ae42-e25b436ce02f",
  ],
  hyperparameters: {},
  checkpoints: [
    {
      metrics: {},
      stepNumber: 551410,
      createdAt: 1716963433,
    },
  ],
};
```

