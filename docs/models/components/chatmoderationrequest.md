# ChatModerationRequest

## Example Usage

```typescript
import { ChatModerationRequest } from "@mistralai/mistralai/models/components";

let value: ChatModerationRequest = {
  model: "1",
  inputs: [
    {
      content: [
        {
          referenceIds: [
            409054,
          ],
        },
      ],
    },
  ],
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `model`                                  | *string*                                 | :heavy_check_mark:                       | N/A                                      |
| `inputs`                                 | *components.ChatModerationRequestInputs* | :heavy_check_mark:                       | Chat to classify                         |
| `truncateForContextLength`               | *boolean*                                | :heavy_minus_sign:                       | N/A                                      |