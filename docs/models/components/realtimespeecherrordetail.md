# RealtimeSpeechErrorDetail

## Example Usage

```typescript
import { RealtimeSpeechErrorDetail } from "@mistralai/mistralai/models/components";

let value: RealtimeSpeechErrorDetail = {
  message: "<value>",
  code: 633389,
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `message`                                     | *components.RealtimeSpeechErrorDetailMessage* | :heavy_check_mark:                            | Human-readable error message.                 |
| `code`                                        | *number*                                      | :heavy_check_mark:                            | Internal error code for debugging.            |