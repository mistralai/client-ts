# SpeechStreamDone

## Example Usage

```typescript
import { SpeechStreamDone } from "@mistralai/mistralai/models/components";

let value: SpeechStreamDone = {
  type: "speech.audio.done",
  usage: {},
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `type`                                                       | *"speech.audio.done"*                                        | :heavy_check_mark:                                           | N/A                                                          |
| `usage`                                                      | [components.UsageInfo](../../models/components/usageinfo.md) | :heavy_check_mark:                                           | N/A                                                          |