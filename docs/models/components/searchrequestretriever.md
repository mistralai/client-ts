# SearchRequestRetriever


## Supported Types

### `components.KeywordRetriever`

```typescript
const value: components.KeywordRetriever = {
  type: "keyword",
  query: "<value>",
};
```

### `components.NearestNeighbourRetriever`

```typescript
const value: components.NearestNeighbourRetriever = {
  type: "nearest_neighbour",
};
```

### `components.RRFRetriever`

```typescript
const value: components.RRFRetriever = {
  type: "rrf",
  retrievers: [],
};
```

