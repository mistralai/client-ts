# SystemMessage

## Example Usage

```typescript
import { SystemMessage } from "@mistralai/mistralai/models/components";

let value: SystemMessage = {
  content: "<value>",
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `role`                            | *"system"*                        | :heavy_minus_sign:                | N/A                               |
| `content`                         | *components.SystemMessageContent* | :heavy_check_mark:                | N/A                               |