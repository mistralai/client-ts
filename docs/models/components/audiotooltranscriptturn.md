# AudioToolTranscriptTurn

## Example Usage

```typescript
import { AudioToolTranscriptTurn } from "@mistralai/mistralai/models/components";

let value: AudioToolTranscriptTurn = {
  role: "tool",
  toolCallId: "<id>",
  name: "<value>",
  status: "success",
  timestamp: new Date("2024-10-09T00:38:41.258Z"),
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `role`                                                                                               | *"tool"*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `toolCallId`                                                                                         | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `name`                                                                                               | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `result`                                                                                             | *any*                                                                                                | :heavy_minus_sign:                                                                                   | Decoded JSON or plain text; null when unavailable or withheld.                                       |
| `status`                                                                                             | [components.AudioToolTranscriptTurnStatus](../../models/components/audiotooltranscriptturnstatus.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `timestamp`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | When the tool started executing.                                                                     |
| `durationMs`                                                                                         | *number*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |