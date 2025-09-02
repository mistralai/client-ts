# ChatModerationRequest

## Example Usage

```typescript
import { ChatModerationRequest } from "@mistralai/mistralai/models/components";

let value: ChatModerationRequest = {
  inputs: [
    {
      content: [
        {
          thinking: [
            {
              text: "<value>",
              type: "text",
            },
          ],
          type: "thinking",
        },
      ],
      role: "system",
    },
  ],
  model: "A4",
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `inputs`                                 | *components.ChatModerationRequestInputs* | :heavy_check_mark:                       | Chat to classify                         |
| `model`                                  | *string*                                 | :heavy_check_mark:                       | N/A                                      |