# FunctionResultEntry

## Example Usage

```typescript
import { FunctionResultEntry } from "@mistralai/mistralai/models/components";

let value: FunctionResultEntry = {
  toolCallId: "<id>",
  result: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `object`                                                                                      | [components.FunctionResultEntryObject](../../models/components/functionresultentryobject.md)  | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `type`                                                                                        | [components.FunctionResultEntryType](../../models/components/functionresultentrytype.md)      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `completedAt`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `toolCallId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `result`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |