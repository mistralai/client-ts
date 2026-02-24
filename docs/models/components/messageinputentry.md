# MessageInputEntry

Representation of an input message inside the conversation.

## Example Usage

```typescript
import { MessageInputEntry } from "@mistralai/mistralai/models/components";

let value: MessageInputEntry = {
  role: "assistant",
  content: [],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `object`                                                                                      | *"entry"*                                                                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `type`                                                                                        | *"message.input"*                                                                             | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `completedAt`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `role`                                                                                        | [components.Role](../../models/components/role.md)                                            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `content`                                                                                     | *components.MessageInputEntryContent*                                                         | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `prefix`                                                                                      | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |