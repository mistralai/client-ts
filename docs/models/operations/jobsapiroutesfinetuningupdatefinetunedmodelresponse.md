# JobsApiRoutesFineTuningUpdateFineTunedModelResponse

OK


## Supported Types

### `components.ClassifierFineTunedModel`

```typescript
const value: components.ClassifierFineTunedModel = {
  id: "<id>",
  created: 452679,
  ownedBy: "<value>",
  workspaceId: "<id>",
  root: "<value>",
  rootVersion: "<value>",
  archived: true,
  capabilities: {},
  classifierTargets: [
    {
      name: "<value>",
      labels: [],
      weight: 9707.43,
      lossFunction: "multi_class",
    },
  ],
  modelType: "classifier",
};
```

### `components.CompletionFineTunedModel`

```typescript
const value: components.CompletionFineTunedModel = {
  id: "<id>",
  created: 986465,
  ownedBy: "<value>",
  workspaceId: "<id>",
  root: "<value>",
  rootVersion: "<value>",
  archived: true,
  capabilities: {},
  modelType: "completion",
};
```

