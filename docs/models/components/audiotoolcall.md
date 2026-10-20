# AudioToolCall

## Example Usage

```typescript
import { AudioToolCall } from "@mistralai/mistralai/models/components";

let value: AudioToolCall = {
  id: "<id>",
  name: "<value>",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `id`                                             | *string*                                         | :heavy_check_mark:                               | N/A                                              |
| `name`                                           | *string*                                         | :heavy_check_mark:                               | N/A                                              |
| `arguments`                                      | *string*                                         | :heavy_minus_sign:                               | JSON text, or null when unavailable or withheld. |