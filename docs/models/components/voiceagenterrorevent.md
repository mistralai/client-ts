# VoiceAgentErrorEvent

Shared error envelope for worker and SDK failures.

## Example Usage

```typescript
import { VoiceAgentErrorEvent } from "@mistralai/mistralai/models/components";

let value: VoiceAgentErrorEvent = {
  source: "interruption_detection",
  code: "<value>",
  message: "<value>",
  fatal: false,
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `type`                                                                                         | *"error"*                                                                                      | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `source`                                                                                       | [components.VoiceAgentErrorEventSource](../../models/components/voiceagenterroreventsource.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `code`                                                                                         | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `message`                                                                                      | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `fatal`                                                                                        | *boolean*                                                                                      | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `payload`                                                                                      | Record<string, *any*>                                                                          | :heavy_minus_sign:                                                                             | N/A                                                                                            |