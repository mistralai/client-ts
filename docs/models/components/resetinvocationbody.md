# ResetInvocationBody

## Example Usage

```typescript
import { ResetInvocationBody } from "@mistralai/mistralai/models/components";

let value: ResetInvocationBody = {
  eventId: 232382,
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `eventId`                                                      | *number*                                                       | :heavy_check_mark:                                             | The event ID to reset the workflow execution to                |
| `reason`                                                       | *string*                                                       | :heavy_minus_sign:                                             | Reason for resetting the workflow execution                    |
| `excludeSignals`                                               | *boolean*                                                      | :heavy_minus_sign:                                             | Whether to exclude signals that happened after the reset point |
| `excludeUpdates`                                               | *boolean*                                                      | :heavy_minus_sign:                                             | Whether to exclude updates that happened after the reset point |