# RealtimeSpeechSessionUpdated

## Example Usage

```typescript
import { RealtimeSpeechSessionUpdated } from "@mistralai/mistralai/models/components";

let value: RealtimeSpeechSessionUpdated = {
  session: {
    requestId: "<id>",
    model: "Grand Cherokee",
    isRefAudio: false,
    streamingMode: "long_form",
    responseFormat: "mp3",
    expressiveness: 4631.3,
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `type`                                                                               | *"session.updated"*                                                                  | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `session`                                                                            | [components.RealtimeSpeechSession](../../models/components/realtimespeechsession.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |