# PipelineConfigDefinition


## Supported Types

### `components.DetectionDefinitionV1`

```typescript
const value: components.DetectionDefinitionV1 = {
  targetAttributes: [],
  patterns: [],
};
```

### `components.ModerationDefinitionV1`

```typescript
const value: components.ModerationDefinitionV1 = {};
```

### `components.JudgeDefinitionV1`

```typescript
const value: components.JudgeDefinitionV1 = {
  model: "Land Cruiser",
  prompt: "<value>",
  resultSpec: {
    type: "numeric",
    min: 323.73,
    max: 2924.57,
  },
};
```

### `components.ExportDefinitionV1`

```typescript
const value: components.ExportDefinitionV1 = {
  destination: {
    protocol: "<value>",
    endpoint: "<value>",
  },
};
```

