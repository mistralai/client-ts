# SearchRequest

## Example Usage

```typescript
import { SearchRequest } from "@mistralai/mistralai/models/components";

let value: SearchRequest = {
  query: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `query`            | *string*           | :heavy_check_mark: | N/A                |
| `queryEmbedding`   | *number*[]         | :heavy_minus_sign: | N/A                |
| `topK`             | *number*           | :heavy_minus_sign: | N/A                |