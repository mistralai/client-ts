# ResponsesOutputMessage

## Example Usage

```typescript
import { ResponsesOutputMessage } from "@mistralai/mistralai/models/components";

let value: ResponsesOutputMessage = {
  id: "<id>",
  content: [
    {
      annotations: [],
      text: "<value>",
      type: "output_text",
    },
  ],
  role: "assistant",
  status: "in_progress",
  type: "message",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `id`                                                                                               | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `content`                                                                                          | *components.ResponsesOutputMessageContent*[]                                                       | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `role`                                                                                             | *"assistant"*                                                                                      | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `status`                                                                                           | [components.ResponsesOutputMessageStatus](../../models/components/responsesoutputmessagestatus.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `type`                                                                                             | *"message"*                                                                                        | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `phase`                                                                                            | [components.ResponsesOutputMessagePhase](../../models/components/responsesoutputmessagephase.md)   | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `additionalProperties`                                                                             | Record<string, *any*>                                                                              | :heavy_minus_sign:                                                                                 | N/A                                                                                                |