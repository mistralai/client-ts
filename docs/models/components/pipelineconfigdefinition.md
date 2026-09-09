# PipelineConfigDefinition


## Supported Types

### `components.DetectionDefinition`

```typescript
const value: components.DetectionDefinition = {
  targetAttributes: [],
  patterns: [],
};
```

### `components.ModerationDefinition`

```typescript
const value: components.ModerationDefinition = {};
```

### `components.JudgeDefinition`

```typescript
const value: components.JudgeDefinition = {
  model: "Expedition",
  prompt: "<value>",
};
```

### `components.ExportDefinition`

```typescript
const value: components.ExportDefinition = {
  destination: {
    protocol: "<value>",
    endpoint: "<value>",
  },
};
```

