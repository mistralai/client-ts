# EmbeddingResponseData

## Example Usage

```typescript
import { EmbeddingResponseData } from "@mistralai/mistralai/models/components";

let value: EmbeddingResponseData = {
  object: "embedding",
  embedding: [
    0.1,
    0.2,
    0.3,
  ],
  index: 0,
};
```

## Fields

| Field              | Type               | Required           | Description        | Example            |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| `object`           | *string*           | :heavy_minus_sign: | N/A                | embedding          |
| `embedding`        | *number*[]         | :heavy_minus_sign: | N/A                | [<br/>0.1,<br/>0.2,<br/>0.3<br/>] |
| `index`            | *number*           | :heavy_minus_sign: | N/A                | 0                  |