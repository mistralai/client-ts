# GrepRequest

## Example Usage

```typescript
import { GrepRequest } from "@mistralai/mistralai/models/components";

let value: GrepRequest = {
  sourceId: "<id>",
  pattern: "<value>",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `sourceId`                                                 | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `pattern`                                                  | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `mode`                                                     | [components.GrepMode](../../models/components/grepmode.md) | :heavy_minus_sign:                                         | N/A                                                        |
| `topK`                                                     | *number*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `contentType`                                              | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |