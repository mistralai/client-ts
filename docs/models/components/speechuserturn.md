# SpeechUserTurn

## Example Usage

```typescript
import { SpeechUserTurn } from "@mistralai/mistralai/models/components";

let value: SpeechUserTurn = {
  role: "user",
  audio: {
    data: "<value>",
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `role`                                                     | *"user"*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `audio`                                                    | [components.RawAudio](../../models/components/rawaudio.md) | :heavy_check_mark:                                         | N/A                                                        |