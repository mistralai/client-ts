# AudioContent

Audio provided to or from an LLM.

## Example Usage

```typescript
import { AudioContent } from "@mistralai/mistralai/models/components";

let value: AudioContent = {
  type: "audio",
  data: "<value>",
  mimeType: "<value>",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `type`                                                           | *"audio"*                                                        | :heavy_check_mark:                                               | N/A                                                              |
| `data`                                                           | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `mimeType`                                                       | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `annotations`                                                    | [components.Annotations](../../models/components/annotations.md) | :heavy_minus_sign:                                               | N/A                                                              |
| `meta`                                                           | Record<string, *any*>                                            | :heavy_minus_sign:                                               | N/A                                                              |