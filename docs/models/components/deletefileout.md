# DeleteFileOut

## Example Usage

```typescript
import { DeleteFileOut } from "@mistralai/mistralai/models/components";

let value: DeleteFileOut = {
  id: "497f6eca-6276-4993-bfeb-53cbbbba6f09",
  object: "file",
  deleted: false,
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `id`                                 | *string*                             | :heavy_check_mark:                   | The ID of the deleted file.          | 497f6eca-6276-4993-bfeb-53cbbbba6f09 |
| `object`                             | *string*                             | :heavy_check_mark:                   | The object type that was deleted     | file                                 |
| `deleted`                            | *boolean*                            | :heavy_check_mark:                   | The deletion status.                 | false                                |