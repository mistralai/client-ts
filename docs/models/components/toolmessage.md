# ToolMessage

## Example Usage

```typescript
import { ToolMessage } from "@mistralai/mistralai/models/components";

let value: ToolMessage = {
  content: [
    {
      fileId: "08851356-9b55-4004-9bac-cdbfe990f2bd",
    },
  ],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `content`                                                                | *components.ToolMessageContent*                                          | :heavy_check_mark:                                                       | N/A                                                                      |
| `toolCallId`                                                             | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `name`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `role`                                                                   | [components.ToolMessageRole](../../models/components/toolmessagerole.md) | :heavy_minus_sign:                                                       | N/A                                                                      |