# ChatModerationRequest

## Example Usage

```typescript
import { ChatModerationRequest } from "@mistralai/mistralai/models/components";

let value: ChatModerationRequest = {
  inputs: [],
  model: "Model S",
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `inputs`                                  | *components.ChatModerationRequestInputs3* | :heavy_check_mark:                        | Chat to classify                          |
| `model`                                   | *string*                                  | :heavy_check_mark:                        | N/A                                       |