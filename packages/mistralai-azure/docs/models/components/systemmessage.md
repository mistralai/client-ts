# SystemMessage

## Example Usage

```typescript
import { SystemMessage } from "@mistralai/mistralai-azure/models/components";

let value: SystemMessage = {
  content: [
    {
      text: "<value>",
      type: "text",
    },
  ],
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `content`                                          | *components.SystemMessageContent*                  | :heavy_check_mark:                                 | N/A                                                |
| `role`                                             | [components.Role](../../models/components/role.md) | :heavy_minus_sign:                                 | N/A                                                |