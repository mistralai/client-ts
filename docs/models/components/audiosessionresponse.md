# AudioSessionResponse

## Example Usage

```typescript
import { AudioSessionResponse } from "@mistralai/mistralai/models/components";

let value: AudioSessionResponse = {
  id: "ae8db0dd-f0d5-43a8-ba93-aaf67af27d5a",
  status: "active",
  numParticipants: 707589,
  createdAt: new Date("2026-10-25T11:15:16.963Z"),
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `id`                                                                                               | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `status`                                                                                           | [components.AudioSessionResponseStatus](../../models/components/audiosessionresponsestatus.md)     | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `numParticipants`                                                                                  | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `createdAt`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `phoneCall`                                                                                        | [components.AudioSessionPhoneCall](../../models/components/audiosessionphonecall.md)               | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `transcripts`                                                                                      | *components.Transcript*[]                                                                          | :heavy_minus_sign:                                                                                 | The turns of the conversation, or null while no transcript has been recorded for this session yet. |