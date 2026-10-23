# ResponsesMessage

## Example Usage

```typescript
import { ResponsesMessage } from "@mistralai/mistralai/models/components";

let value: ResponsesMessage = {
  content: [],
  role: "user",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `content`                                                                              | *components.ResponsesMessageContent*[]                                                 | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `role`                                                                                 | [components.ResponsesMessageRole](../../models/components/responsesmessagerole.md)     | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `status`                                                                               | [components.ResponsesMessageStatus](../../models/components/responsesmessagestatus.md) | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `type`                                                                                 | *"message"*                                                                            | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `additionalProperties`                                                                 | Record<string, *any*>                                                                  | :heavy_minus_sign:                                                                     | N/A                                                                                    |