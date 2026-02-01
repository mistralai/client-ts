# RealtimeTranscriptionError

## Example Usage

```typescript
import { RealtimeTranscriptionError } from "@mistralai/mistralai/models/components";

let value: RealtimeTranscriptionError = {
  error: {
    message: "<value>",
    code: 785565,
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                     | *"error"*                                                                                                  | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `error`                                                                                                    | [components.RealtimeTranscriptionErrorDetail](../../models/components/realtimetranscriptionerrordetail.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |