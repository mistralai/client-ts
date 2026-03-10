# ImageContent

Image content for a message.

## Example Usage

```typescript
import { ImageContent } from "@mistralai/mistralai/models/components";

let value: ImageContent = {
  data: "<value>",
  mimeType: "<value>",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `type`                                                           | *"image"*                                                        | :heavy_check_mark:                                               | N/A                                                              |
| `data`                                                           | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `mimeType`                                                       | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `annotations`                                                    | [components.Annotations](../../models/components/annotations.md) | :heavy_minus_sign:                                               | N/A                                                              |
| `meta`                                                           | Record<string, *any*>                                            | :heavy_minus_sign:                                               | N/A                                                              |
| `additionalProperties`                                           | Record<string, *any*>                                            | :heavy_minus_sign:                                               | N/A                                                              |