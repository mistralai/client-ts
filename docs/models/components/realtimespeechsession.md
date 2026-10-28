# RealtimeSpeechSession

## Example Usage

```typescript
import { RealtimeSpeechSession } from "@mistralai/mistralai/models/components";

let value: RealtimeSpeechSession = {
  requestId: "<id>",
  model: "Beetle",
  isRefAudio: true,
  streamingMode: "responsive",
  responseFormat: "pcm",
  expressiveness: 7459.26,
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `requestId`                                                                                      | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `model`                                                                                          | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `voice`                                                                                          | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `isRefAudio`                                                                                     | *boolean*                                                                                        | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `streamingMode`                                                                                  | [components.RealtimeSpeechStreamingMode](../../models/components/realtimespeechstreamingmode.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `responseFormat`                                                                                 | [components.SpeechOutputFormat](../../models/components/speechoutputformat.md)                   | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `expressiveness`                                                                                 | *number*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |