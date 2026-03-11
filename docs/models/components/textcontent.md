# TextContent

Text content for a message.

## Example Usage

```typescript
import { TextContent } from "@mistralai/mistralai/models/components";

let value: TextContent = {
  type: "text",
  text: "<value>",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `type`                                                           | *"text"*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `text`                                                           | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `annotations`                                                    | [components.Annotations](../../models/components/annotations.md) | :heavy_minus_sign:                                               | N/A                                                              |
| `meta`                                                           | Record<string, *any*>                                            | :heavy_minus_sign:                                               | N/A                                                              |
| `additionalProperties`                                           | Record<string, *any*>                                            | :heavy_minus_sign:                                               | N/A                                                              |