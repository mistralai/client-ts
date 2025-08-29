# SystemMessage

## Example Usage

```typescript
import { SystemMessage } from "@mistralai/mistralai/models/components";

let value: SystemMessage = {
  content: [
    {
      thinking: [
        {
          referenceIds: [
            848833,
          ],
          type: "reference",
        },
      ],
      type: "thinking",
    },
  ],
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `content`                                          | *components.SystemMessageContent*                  | :heavy_check_mark:                                 | N/A                                                |
| `role`                                             | [components.Role](../../models/components/role.md) | :heavy_minus_sign:                                 | N/A                                                |