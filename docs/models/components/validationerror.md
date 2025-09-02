# ValidationError

## Example Usage

```typescript
import { ValidationError } from "@mistralai/mistralai/models/components";

let value: ValidationError = {
  loc: [
    929957,
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