# VoiceAgentToolCallEndedEvent

`result` is the exact text the model received: the tool output, the
error message when `status` is "error", or null when "cancelled".

## Example Usage

```typescript
import { VoiceAgentToolCallEndedEvent } from "@mistralai/mistralai/models/components";

let value: VoiceAgentToolCallEndedEvent = {
  id: "<id>",
  name: "<value>",
  ts: 5900.3,
  arguments: "<value>",
  status: "error",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                         | *"tool_call.ended"*                                                                                            | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `id`                                                                                                           | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `name`                                                                                                         | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `phase`                                                                                                        | *"ended"*                                                                                                      | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `ts`                                                                                                           | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `arguments`                                                                                                    | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `status`                                                                                                       | [components.VoiceAgentToolCallEndedEventStatus](../../models/components/voiceagenttoolcallendedeventstatus.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `result`                                                                                                       | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |