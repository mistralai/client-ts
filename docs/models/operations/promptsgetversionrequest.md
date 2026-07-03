# PromptsGetVersionRequest

## Example Usage

```typescript
import { PromptsGetVersionRequest } from "@mistralai/mistralai/models/operations";

let value: PromptsGetVersionRequest = {
  promptId: "<id>",
  version: 1,
};
```

## Fields

| Field              | Type               | Required           | Description        | Example            |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| `promptId`         | *string*           | :heavy_check_mark: | N/A                |                    |
| `version`          | *number*           | :heavy_check_mark: | N/A                | 1                  |
| `fields`           | *string*[]         | :heavy_minus_sign: | N/A                |                    |