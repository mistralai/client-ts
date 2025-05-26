# ChatModerationRequest

## Example Usage

```typescript
import { ChatModerationRequest } from "@mistralai/mistralai/models/components";

let value: ChatModerationRequest = {
  inputs: [
    {
      content: [
        {
          text: "<value>",
          type: "text",
        },
      ],
      role: "tool",
    },
  ],
  model: "Beetle",
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `inputs`                                 | *components.ChatModerationRequestInputs* | :heavy_check_mark:                       | Chat to classify                         |
| `model`                                  | *string*                                 | :heavy_check_mark:                       | N/A                                      |