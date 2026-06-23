# OCRFooterBlock

## Example Usage

```typescript
import { OCRFooterBlock } from "@mistralai/mistralai/models/components";

let value: OCRFooterBlock = {
  topLeftX: 160416,
  topLeftY: 828952,
  bottomRightX: 862210,
  bottomRightY: 971152,
  content: "<value>",
  type: "footer",
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
| `type`                                   | *"footer"*                               | :heavy_check_mark:                       | N/A                                      |