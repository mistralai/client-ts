# UpdateSkillVersionRequest

## Example Usage

```typescript
import { UpdateSkillVersionRequest } from "@mistralai/mistralai/models/operations";

let value: UpdateSkillVersionRequest = {
  aliases: [
    "<value 1>",
  ],
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `notes`                           | *string*                          | :heavy_minus_sign:                | Notes for this version.           |
| `aliases`                         | *string*[]                        | :heavy_check_mark:                | Aliases pointing to this version. |