# OCRListBlock

## Example Usage

```typescript
import { OCRListBlock } from "@mistralai/mistralai/models/components";

let value: OCRListBlock = {
  topLeftX: 95640,
  topLeftY: 431085,
  bottomRightX: 496704,
  bottomRightY: 509326,
  content: "<value>",
  type: "list",
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
| `type`                                   | *"list"*                                 | :heavy_check_mark:                       | N/A                                      |