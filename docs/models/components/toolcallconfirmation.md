# ToolCallConfirmation

## Example Usage

```typescript
import { ToolCallConfirmation } from "@mistralai/mistralai/models/components";

let value: ToolCallConfirmation = {
  toolCallId: "<id>",
  confirmation: "deny",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `toolCallId`                                                       | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `confirmation`                                                     | [components.Confirmation](../../models/components/confirmation.md) | :heavy_check_mark:                                                 | N/A                                                                |