# AudioSpeechCapabilities

## Example Usage

```typescript
import { AudioSpeechCapabilities } from "@mistralai/mistralai/models/components";

let value: AudioSpeechCapabilities = {};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `modes`                                       | *string*[]                                    | :heavy_minus_sign:                            | Supported modes: `offline` and/or `realtime`. |
| `instruction`                                 | *boolean*                                     | :heavy_minus_sign:                            | N/A                                           |
| `responseFormats`                             | *string*[]                                    | :heavy_minus_sign:                            | Accepted `response_format` values.            |