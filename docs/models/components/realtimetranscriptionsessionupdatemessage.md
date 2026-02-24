# RealtimeTranscriptionSessionUpdateMessage

## Example Usage

```typescript
import { RealtimeTranscriptionSessionUpdateMessage } from "@mistralai/mistralai/models/components";

let value: RealtimeTranscriptionSessionUpdateMessage = {
  session: {},
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                       | *"session.update"*                                                                                                           | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `session`                                                                                                                    | [components.RealtimeTranscriptionSessionUpdatePayload](../../models/components/realtimetranscriptionsessionupdatepayload.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |