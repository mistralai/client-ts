# VoiceAgentSessionUpdatedEvent

Sent to every participant once a session update is committed.

`instructions` and `tools` reach the agent at its next turn boundary.

## Example Usage

```typescript
import { VoiceAgentSessionUpdatedEvent } from "@mistralai/mistralai/models/components";

let value: VoiceAgentSessionUpdatedEvent = {
  session: {
    llm: {},
    tts: {},
    stt: {},
    turn: {},
  },
  ts: 9472.38,
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                               | *"session.updated"*                                                                                                  | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `session`                                                                                                            | [components.AudioAgentConfigurationResponseConfig](../../models/components/audioagentconfigurationresponseconfig.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `ts`                                                                                                                 | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |