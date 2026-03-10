# OCRTableObject

## Example Usage

```typescript
import { OCRTableObject } from "@mistralai/mistralai/models/components";

let value: OCRTableObject = {
  id: "<id>",
  content: "<value>",
  format: "html",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `id`                                                   | *string*                                               | :heavy_check_mark:                                     | Table ID for extracted table in a page                 |
| `content`                                              | *string*                                               | :heavy_check_mark:                                     | Content of the table in the given format               |
| `format`                                               | [components.Format](../../models/components/format.md) | :heavy_check_mark:                                     | Format of the table                                    |