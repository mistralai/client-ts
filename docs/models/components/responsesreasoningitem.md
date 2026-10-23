# ResponsesReasoningItem

## Example Usage

```typescript
import { ResponsesReasoningItem } from "@mistralai/mistralai/models/components";

let value: ResponsesReasoningItem = {
  id: "<id>",
  summary: [],
  type: "reasoning",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `id`                                                                                               | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `summary`                                                                                          | [components.ResponsesSummary](../../models/components/responsessummary.md)[]                       | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `type`                                                                                             | *"reasoning"*                                                                                      | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `content`                                                                                          | [components.ResponsesContent](../../models/components/responsescontent.md)[]                       | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `encryptedContent`                                                                                 | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `status`                                                                                           | [components.ResponsesReasoningItemStatus](../../models/components/responsesreasoningitemstatus.md) | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `additionalProperties`                                                                             | Record<string, *any*>                                                                              | :heavy_minus_sign:                                                                                 | N/A                                                                                                |