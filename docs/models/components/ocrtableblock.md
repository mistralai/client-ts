# OCRTableBlock

## Example Usage

```typescript
import { OCRTableBlock } from "@mistralai/mistralai/models/components";

let value: OCRTableBlock = {
  topLeftX: 101665,
  topLeftY: 855336,
  bottomRightX: 459836,
  bottomRightY: 157241,
  content: "<value>",
  type: "table",
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `topLeftX`                                                                            | *number*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `topLeftY`                                                                            | *number*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `bottomRightX`                                                                        | *number*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `bottomRightY`                                                                        | *number*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `content`                                                                             | *string*                                                                              | :heavy_check_mark:                                                                    | Text/markdown/html content of this block                                              |
| `type`                                                                                | *"table"*                                                                             | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `tableId`                                                                             | *string*                                                                              | :heavy_minus_sign:                                                                    | References the corresponding entry in OCRPageObject.tables, when tables are extracted |