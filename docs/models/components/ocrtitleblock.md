# OCRTitleBlock

## Example Usage

```typescript
import { OCRTitleBlock } from "@mistralai/mistralai/models/components";

let value: OCRTitleBlock = {
  topLeftX: 838416,
  topLeftY: 677429,
  bottomRightX: 906381,
  bottomRightY: 702320,
  content: "<value>",
  type: "title",
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `topLeftX`                               | *number*                                 | :heavy_check_mark:                       | N/A                                      |
| `topLeftY`                               | *number*                                 | :heavy_check_mark:                       | N/A                                      |
| `bottomRightX`                           | *number*                                 | :heavy_check_mark:                       | N/A                                      |
| `bottomRightY`                           | *number*                                 | :heavy_check_mark:                       | N/A                                      |
| `content`                                | *string*                                 | :heavy_check_mark:                       | Text/markdown/html content of this block |
| `type`                                   | *"title"*                                | :heavy_check_mark:                       | N/A                                      |