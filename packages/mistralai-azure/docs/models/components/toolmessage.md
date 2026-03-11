# ToolMessage

## Example Usage

```typescript
import { ToolMessage } from "@mistralai/mistralai-azure/models/components";

let value: ToolMessage = {
  role: "tool",
  content: [],
};
```

## Fields

| Field                           | Type                            | Required                        | Description                     |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `role`                          | *"tool"*                        | :heavy_check_mark:              | N/A                             |
| `content`                       | *components.ToolMessageContent* | :heavy_check_mark:              | N/A                             |
| `toolCallId`                    | *string*                        | :heavy_minus_sign:              | N/A                             |
| `name`                          | *string*                        | :heavy_minus_sign:              | N/A                             |