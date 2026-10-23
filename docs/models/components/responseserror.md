# ResponsesError

## Example Usage

```typescript
import { ResponsesError } from "@mistralai/mistralai/models/components";

let value: ResponsesError = {
  code: "image_too_small",
  message: "<value>",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `code`                                             | [components.Code](../../models/components/code.md) | :heavy_check_mark:                                 | N/A                                                |
| `message`                                          | *string*                                           | :heavy_check_mark:                                 | N/A                                                |
| `additionalProperties`                             | Record<string, *any*>                              | :heavy_minus_sign:                                 | N/A                                                |