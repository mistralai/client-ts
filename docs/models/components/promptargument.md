# PromptArgument

Describes an argument that a prompt can accept.

## Example Usage

```typescript
import { PromptArgument } from "@mistralai/mistralai/models/components";

let value: PromptArgument = {
  name: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `name`             | *string*           | :heavy_check_mark: | N/A                |
| `title`            | *string*           | :heavy_minus_sign: | N/A                |
| `description`      | *string*           | :heavy_minus_sign: | N/A                |
| `required`         | *boolean*          | :heavy_minus_sign: | N/A                |