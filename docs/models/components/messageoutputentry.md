# MessageOutputEntry

## Example Usage

```typescript
import { MessageOutputEntry } from "@mistralai/mistralai/models/components";

let value: MessageOutputEntry = {
  content: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `object`                                                                                      | [components.MessageOutputEntryObject](../../models/components/messageoutputentryobject.md)    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `type`                                                                                        | [components.MessageOutputEntryType](../../models/components/messageoutputentrytype.md)        | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `completedAt`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `agentId`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `model`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `role`                                                                                        | [components.MessageOutputEntryRole](../../models/components/messageoutputentryrole.md)        | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `content`                                                                                     | *components.MessageOutputEntryContent*                                                        | :heavy_check_mark:                                                                            | N/A                                                                                           |