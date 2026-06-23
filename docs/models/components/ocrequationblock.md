# OCREquationBlock

## Example Usage

```typescript
import { OCREquationBlock } from "@mistralai/mistralai/models/components";

let value: OCREquationBlock = {
  topLeftX: 528840,
  topLeftY: 824309,
  bottomRightX: 942378,
  bottomRightY: 950743,
  content: "<value>",
  type: "equation",
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
| `type`                                   | *"equation"*                             | :heavy_check_mark:                       | N/A                                      |