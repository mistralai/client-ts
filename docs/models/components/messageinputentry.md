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
| `object`                                                                                      | [components.ObjectT](../../models/components/objectt.md)                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `type`                                                                                        | [components.MessageInputEntryType](../../models/components/messageinputentrytype.md)          | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `completedAt`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `role`                                                                                        | [components.MessageInputEntryRole](../../models/components/messageinputentryrole.md)          | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `content`                                                                                     | *components.MessageInputEntryContent*                                                         | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `prefix`                                                                                      | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |