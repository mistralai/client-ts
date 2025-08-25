# OCRPageDimensions

## Example Usage

```typescript
import { OCRPageDimensions } from "@mistralai/mistralai-azure/models/components";

let value: OCRPageDimensions = {
  dpi: 318569,
  height: 667411,
  width: 131797,
};
```

## Fields

| Field                           | Type                            | Required                        | Description                     |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `dpi`                           | *number*                        | :heavy_check_mark:              | Dots per inch of the page-image |
| `height`                        | *number*                        | :heavy_check_mark:              | Height of the image in pixels   |
| `width`                         | *number*                        | :heavy_check_mark:              | Width of the image in pixels    |