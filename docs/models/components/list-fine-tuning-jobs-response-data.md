# ListFineTuningJobsResponseData


## Supported Types

### `components.ClassifierFineTuningJob`

```typescript
const value: components.ClassifierFineTuningJob = {
  id: "73c64afe-c6f9-43a3-8b7f-79c79946b4fd",
  autoStart: true,
  model: "Fiesta",
  status: "VALIDATING",
  createdAt: 177483,
  modifiedAt: 160336,
  trainingFiles: [
    "bed69422-4753-440f-bcf5-3166513248d4",
    "70dcfc45-78f6-42e6-ae57-abaea266f9e0",
    "a21067a8-a33f-4a8b-a4ef-005463d99b21",
  ],
  jobType: "classifier",
  hyperparameters: {},
};
```

### `components.CompletionFineTuningJob`

```typescript
const value: components.CompletionFineTuningJob = {
  id: "aa5979da-9ac0-400a-8ab7-2f61022dea84",
  autoStart: false,
  model: "Roadster",
  status: "STARTED",
  createdAt: 726960,
  modifiedAt: 415027,
  trainingFiles: [
    "20c6fcf4-5df1-45b0-908c-dcb8ee01cc88",
    "d854681e-5ee6-4b54-a994-1be93938b219",
    "bd3ea048-a05f-43c4-9eda-2f32c5884184",
  ],
  jobType: "completion",
  hyperparameters: {},
};
```

