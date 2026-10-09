# RRFRetrieverFilter


## Supported Types

### `components.And`

```typescript
const value: components.And = {
  type: "and",
  matches: [],
};
```

### `components.Equal`

```typescript
const value: components.Equal = {
  type: "equal",
  field: "<value>",
  value: "<value>",
};
```

### `components.In`

```typescript
const value: components.In = {
  type: "in",
  field: "<value>",
  values: [
    new Date("2025-01-20T03:48:06.281Z"),
  ],
};
```

### `components.Not`

```typescript
const value: components.Not = {
  type: "not",
  match: {
    type: "and",
    matches: [],
  },
};
```

### `components.Or`

```typescript
const value: components.Or = {
  type: "or",
  matches: [
    {
      type: "and",
      matches: [],
    },
  ],
};
```

### `components.Range`

```typescript
const value: components.Range = {
  type: "range",
  field: "<value>",
};
```

