# ResponsesAnnotationURLCitation

## Example Usage

```typescript
import { ResponsesAnnotationURLCitation } from "@mistralai/mistralai/models/components";

let value: ResponsesAnnotationURLCitation = {
  endIndex: 308925,
  startIndex: 833525,
  title: "<value>",
  type: "url_citation",
  url: "https://damaged-scale.net/",
};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `endIndex`             | *number*               | :heavy_check_mark:     | N/A                    |
| `startIndex`           | *number*               | :heavy_check_mark:     | N/A                    |
| `title`                | *string*               | :heavy_check_mark:     | N/A                    |
| `type`                 | *"url_citation"*       | :heavy_check_mark:     | N/A                    |
| `url`                  | *string*               | :heavy_check_mark:     | N/A                    |
| `additionalProperties` | Record<string, *any*>  | :heavy_minus_sign:     | N/A                    |