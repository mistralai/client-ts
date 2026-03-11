# SystemMessage

## Example Usage

```typescript
import { SystemMessage } from "@mistralai/mistralai/models/components";

let value: SystemMessage = {
  role: "system",
  content: "<value>",
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `role`                            | *"system"*                        | :heavy_check_mark:                | N/A                               |
| `content`                         | *components.SystemMessageContent* | :heavy_check_mark:                | N/A                               |