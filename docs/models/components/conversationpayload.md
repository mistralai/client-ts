# ConversationPayload

## Example Usage

```typescript
import { ConversationPayload } from "@mistralai/mistralai/models/components";

let value: ConversationPayload = {
  messages: [
    {
      "key": "<value>",
      "key1": "<value>",
    },
    {
      "key": "<value>",
      "key1": "<value>",
    },
  ],
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `messages`              | Record<string, *any*>[] | :heavy_check_mark:      | N/A                     |
| `additionalProperties`  | Record<string, *any*>   | :heavy_minus_sign:      | N/A                     |