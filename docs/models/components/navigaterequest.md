# NavigateRequest

## Example Usage

```typescript
import { NavigateRequest } from "@mistralai/mistralai/models/components";

let value: NavigateRequest = {
  sourceId: "<id>",
  startOffset: 447218,
  endOffset: 362096,
  direction: "next",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `sourceId`                                                                       | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `startOffset`                                                                    | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `endOffset`                                                                      | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `direction`                                                                      | [components.NavigationDirection](../../models/components/navigationdirection.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `topK`                                                                           | *number*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `contentType`                                                                    | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |