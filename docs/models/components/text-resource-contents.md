# TextResourceContents

Text contents of a resource.

## Example Usage

```typescript
import { TextResourceContents } from "@mistralai/mistralai/models/components";

let value: TextResourceContents = {
  uri: "https://good-natured-hyena.biz/",
  text: "<value>",
};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `uri`                  | *string*               | :heavy_check_mark:     | N/A                    |
| `mimeType`             | *string*               | :heavy_minus_sign:     | N/A                    |
| `meta`                 | Record<string, *any*>  | :heavy_minus_sign:     | N/A                    |
| `text`                 | *string*               | :heavy_check_mark:     | N/A                    |
| `additionalProperties` | Record<string, *any*>  | :heavy_minus_sign:     | N/A                    |