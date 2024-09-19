# SystemMessage

## Example Usage

```typescript
import { SystemMessage } from "@mistralai/mistralai-gcp/models/components";

let value: SystemMessage = {
  content: [
    {
      text: "<value>",
    },
  ],
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `content`                                          | *components.Content*                               | :heavy_check_mark:                                 | N/A                                                |
| `role`                                             | [components.Role](../../models/components/role.md) | :heavy_minus_sign:                                 | N/A                                                |