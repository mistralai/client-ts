# TurnDetectionEndEvent

## Example Usage

```typescript
import { TurnDetectionEndEvent } from "@mistralai/mistralai/models/components";

let value: TurnDetectionEndEvent = {
  timeS: 8398.72,
  endReason: "timeout",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `timeS`                                                                                | *number*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `type`                                                                                 | *"turn.end"*                                                                           | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `endReason`                                                                            | [components.TurnDetectionEndReason](../../models/components/turndetectionendreason.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |