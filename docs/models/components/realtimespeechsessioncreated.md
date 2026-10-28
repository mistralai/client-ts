# RealtimeSpeechSessionCreated

## Example Usage

```typescript
import { RealtimeSpeechSessionCreated } from "@mistralai/mistralai/models/components";

let value: RealtimeSpeechSessionCreated = {
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
| `type`                                                                               | *"session.created"*                                                                  | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `session`                                                                            | [components.RealtimeSpeechSession](../../models/components/realtimespeechsession.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |