# ChatModerationRequest

## Example Usage

```typescript
import { ChatModerationRequest } from "@mistralai/mistralai/models/components";

let value: ChatModerationRequest = {
  model: "Accord",
  inputs: [
    [
      {
        content: [
          {
            documentUrl: "https://probable-jungle.org/",
            type: "document_url",
          },
        ],
        role: "user",
      },
    ],
  ],
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `model`                                  | *string*                                 | :heavy_check_mark:                       | N/A                                      |
| `inputs`                                 | *components.ChatModerationRequestInputs* | :heavy_check_mark:                       | Chat to classify                         |
| `truncateForContextLength`               | *boolean*                                | :heavy_minus_sign:                       | N/A                                      |