# ToolMessage

## Example Usage

```typescript
import { ToolMessage } from "@mistralai/mistralai-azure/models/components";

let value: ToolMessage = {
  content: "<value>",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `content`                                                                | *components.ToolMessageContent*                                          | :heavy_check_mark:                                                       | N/A                                                                      |
| `toolCallId`                                                             | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `name`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `role`                                                                   | [components.ToolMessageRole](../../models/components/toolmessagerole.md) | :heavy_minus_sign:                                                       | N/A                                                                      |