# ValidationError

## Example Usage

```typescript
import { ValidationError } from "@mistralai/mistralai-gcp/models/components";

let value: ValidationError = {
  loc: [
    18789,
  ],
  msg: "<value>",
  type: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `loc`              | *components.Loc*[] | :heavy_check_mark: | N/A                |
| `msg`              | *string*           | :heavy_check_mark: | N/A                |
| `type`             | *string*           | :heavy_check_mark: | N/A                |