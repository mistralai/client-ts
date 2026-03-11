# OCRUsageInfo

## Example Usage

```typescript
import { OCRUsageInfo } from "@mistralai/mistralai/models/components";

let value: OCRUsageInfo = {
  pagesProcessed: 329301,
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `pagesProcessed`          | *number*                  | :heavy_check_mark:        | Number of pages processed |
| `docSizeBytes`            | *number*                  | :heavy_minus_sign:        | Document size in bytes    |