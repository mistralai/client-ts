# JobsApiRoutesFineTuningUpdateFineTunedModelResponse

OK


## Supported Types

### `components.ClassifierFineTunedModel`

```typescript
const value: components.ClassifierFineTunedModel = {
  id: "<id>",
  created: 385092,
  ownedBy: "<value>",
  workspaceId: "<id>",
  root: "<value>",
  rootVersion: "<value>",
  archived: true,
  capabilities: {},
  job: "14ce4667-ac22-41ac-8d5e-01ba39f72659",
  classifierTargets: [
    {
      name: "<value>",
      labels: [
        "<value 1>",
        "<value 2>",
      ],
      weight: 6616.25,
      lossFunction: "single_class",
    },
  ],
  modelType: "classifier",
};
```

### `components.CompletionFineTunedModel`

```typescript
const value: components.CompletionFineTunedModel = {
  id: "<id>",
  created: 647324,
  ownedBy: "<value>",
  workspaceId: "<id>",
  root: "<value>",
  rootVersion: "<value>",
  archived: true,
  capabilities: {},
  job: "4f0133a4-a8c2-4af2-b920-a6498990f2a3",
  modelType: "completion",
};
```

