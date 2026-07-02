# PromptsGetRequest

## Example Usage

```typescript
import { PromptsGetRequest } from "@mistralai/mistralai/models/operations";

let value: PromptsGetRequest = {
  promptId: "<id>",
  version: 1,
};
```

## Fields

| Field              | Type               | Required           | Description        | Example            |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| `promptId`         | *string*           | :heavy_check_mark: | N/A                |                    |
| `version`          | *number*           | :heavy_minus_sign: | N/A                | 1                  |
| `alias`            | *string*           | :heavy_minus_sign: | N/A                |                    |
| `fields`           | *string*[]         | :heavy_minus_sign: | N/A                |                    |