# UpdatePromptVersionRequest

## Example Usage

```typescript
import { UpdatePromptVersionRequest } from "@mistralai/mistralai/models/operations";

let value: UpdatePromptVersionRequest = {
  aliases: [],
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `notes`                           | *string*                          | :heavy_minus_sign:                | Notes for this version.           |
| `aliases`                         | *string*[]                        | :heavy_check_mark:                | Aliases pointing to this version. |