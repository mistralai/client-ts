# FunctionCallEntry

## Example Usage

```typescript
import { FunctionCallEntry } from "@mistralai/mistralai/models/components";

let value: FunctionCallEntry = {
  toolCallId: "<id>",
  name: "<value>",
  arguments: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `object`                                                                                      | [components.FunctionCallEntryObject](../../models/components/functioncallentryobject.md)      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `type`                                                                                        | [components.FunctionCallEntryType](../../models/components/functioncallentrytype.md)          | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `completedAt`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `toolCallId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `arguments`                                                                                   | *components.FunctionCallEntryArguments*                                                       | :heavy_check_mark:                                                                            | N/A                                                                                           |