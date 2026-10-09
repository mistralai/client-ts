# Range

Check that the given field falls in a range.

Requires at least one operator.

## Example Usage

```typescript
import { Range } from "@mistralai/mistralai/models/components";

let value: Range = {
  type: "range",
  field: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `type`             | *"range"*          | :heavy_check_mark: | N/A                |
| `field`            | *string*           | :heavy_check_mark: | N/A                |
| `gt`               | *components.Gt*    | :heavy_minus_sign: | N/A                |
| `gte`              | *components.Gte*   | :heavy_minus_sign: | N/A                |
| `lt`               | *components.Lt*    | :heavy_minus_sign: | N/A                |
| `lte`              | *components.Lte*   | :heavy_minus_sign: | N/A                |