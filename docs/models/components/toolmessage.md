# ToolMessage

## Example Usage

```typescript
import { ToolMessage } from "@mistralai/mistralai/models/components";

let value: ToolMessage = {
  content: [],
};
```

## Fields

| Field                           | Type                            | Required                        | Description                     |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `role`                          | *"tool"*                        | :heavy_minus_sign:              | N/A                             |
| `content`                       | *components.ToolMessageContent* | :heavy_check_mark:              | N/A                             |
| `toolCallId`                    | *string*                        | :heavy_minus_sign:              | N/A                             |
| `name`                          | *string*                        | :heavy_minus_sign:              | N/A                             |