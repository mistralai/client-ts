# JudgeOutputUnion


## Supported Types

### `components.JudgeClassificationOutput`

```typescript
const value: components.JudgeClassificationOutput = {
  type: "CLASSIFICATION",
  options: [
    {
      value: "<value>",
      description:
        "round whether like yet midst than inquisitively resource cafe",
    },
  ],
};
```

### `components.JudgeRegressionOutput`

```typescript
const value: components.JudgeRegressionOutput = {
  type: "REGRESSION",
  minDescription: "<value>",
  maxDescription: "<value>",
};
```

