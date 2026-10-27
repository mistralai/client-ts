# RealtimeSpeechSessionUpdateMessage

## Example Usage

```typescript
import { RealtimeSpeechSessionUpdateMessage } from "@mistralai/mistralai/models/components";

let value: RealtimeSpeechSessionUpdateMessage = {
  session: {},
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                         | *"session.update"*                                                                                             | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `session`                                                                                                      | [components.RealtimeSpeechSessionUpdatePayload](../../models/components/realtimespeechsessionupdatepayload.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |