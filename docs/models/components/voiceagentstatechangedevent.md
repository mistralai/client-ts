# VoiceAgentStateChangedEvent

## Example Usage

```typescript
import { VoiceAgentStateChangedEvent } from "@mistralai/mistralai/models/components";

let value: VoiceAgentStateChangedEvent = {
  oldState: "initializing",
  state: "thinking",
  ts: 9706.19,
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `type`                                                     | *"agent.state.changed"*                                    | :heavy_minus_sign:                                         | N/A                                                        |
| `oldState`                                                 | [components.OldState](../../models/components/oldstate.md) | :heavy_check_mark:                                         | N/A                                                        |
| `state`                                                    | [components.State](../../models/components/state.md)       | :heavy_check_mark:                                         | N/A                                                        |
| `ts`                                                       | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |