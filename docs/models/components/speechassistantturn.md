# SpeechAssistantTurn

## Example Usage

```typescript
import { SpeechAssistantTurn } from "@mistralai/mistralai/models/components";

let value: SpeechAssistantTurn = {
  role: "assistant",
  text: "<value>",
  audio: {
    data: "<value>",
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `role`                                                     | *"assistant"*                                              | :heavy_check_mark:                                         | N/A                                                        |
| `text`                                                     | *string*                                                   | :heavy_check_mark:                                         | Text the assistant spoke on this turn.                     |
| `audio`                                                    | [components.RawAudio](../../models/components/rawaudio.md) | :heavy_check_mark:                                         | N/A                                                        |