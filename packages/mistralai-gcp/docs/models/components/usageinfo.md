# UsageInfo

## Example Usage

```typescript
import { UsageInfo } from "@mistralai/mistralai-gcp/models/components";

let value: UsageInfo = {
  promptTokens: 16,
  completionTokens: 34,
  totalTokens: 50,
};
```

## Fields

| Field              | Type               | Required           | Description        | Example            |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| `promptTokens`     | *number*           | :heavy_check_mark: | N/A                | 16                 |
| `completionTokens` | *number*           | :heavy_check_mark: | N/A                | 34                 |
| `totalTokens`      | *number*           | :heavy_check_mark: | N/A                | 50                 |