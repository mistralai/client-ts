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
              referenceIds: [
                244157,
              ],
              type: "reference",
            },
          ],
          type: "thinking",
        },
      ],
      role: "tool",
    },
  ],
  model: "Countach",
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `inputs`                                 | *components.ChatModerationRequestInputs* | :heavy_check_mark:                       | Chat to classify                         |
| `model`                                  | *string*                                 | :heavy_check_mark:                       | N/A                                      |