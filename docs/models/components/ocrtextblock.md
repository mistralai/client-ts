# OCRTextBlock

## Example Usage

```typescript
import { OCRTextBlock } from "@mistralai/mistralai/models/components";

let value: OCRTextBlock = {
  topLeftX: 405309,
  topLeftY: 413135,
  bottomRightX: 535040,
  bottomRightY: 348887,
  content: "<value>",
  type: "text",
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
| `type`                                   | *"text"*                                 | :heavy_check_mark:                       | N/A                                      |