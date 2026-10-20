# VoiceAgentToolCallStartedEvent

## Example Usage

```typescript
import { VoiceAgentToolCallStartedEvent } from "@mistralai/mistralai/models/components";

let value: VoiceAgentToolCallStartedEvent = {
  id: "<id>",
  name: "<value>",
  ts: 5866.61,
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `type`                | *"tool_call.started"* | :heavy_minus_sign:    | N/A                   |
| `id`                  | *string*              | :heavy_check_mark:    | N/A                   |
| `name`                | *string*              | :heavy_check_mark:    | N/A                   |
| `phase`               | *"started"*           | :heavy_minus_sign:    | N/A                   |
| `ts`                  | *number*              | :heavy_check_mark:    | N/A                   |