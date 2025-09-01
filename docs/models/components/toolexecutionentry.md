# ToolExecutionEntry

## Example Usage

```typescript
import { ToolExecutionEntry } from "@mistralai/mistralai/models/components";

let value: ToolExecutionEntry = {
  name: "web_search",
  arguments: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `object`                                                                                      | [components.ToolExecutionEntryObject](../../models/components/toolexecutionentryobject.md)    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `type`                                                                                        | [components.ToolExecutionEntryType](../../models/components/toolexecutionentrytype.md)        | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `completedAt`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `name`                                                                                        | [components.BuiltInConnectors](../../models/components/builtinconnectors.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `arguments`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `info`                                                                                        | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | N/A                                                                                           |