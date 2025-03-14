# DeleteModelOut

## Example Usage

```typescript
import { DeleteModelOut } from "@mistralai/mistralai/models/components";

let value: DeleteModelOut = {
  id: "ft:open-mistral-7b:587a6b29:20240514:7e773925",
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   | Example                                       |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `id`                                          | *string*                                      | :heavy_check_mark:                            | The ID of the deleted model.                  | ft:open-mistral-7b:587a6b29:20240514:7e773925 |
| `object`                                      | *string*                                      | :heavy_minus_sign:                            | The object type that was deleted              |                                               |
| `deleted`                                     | *boolean*                                     | :heavy_minus_sign:                            | The deletion status                           | true                                          |