# ResponsesCustomTool

## Example Usage

```typescript
import { ResponsesCustomTool } from "@mistralai/mistralai/models/components";

let value: ResponsesCustomTool = {
  name: "<value>",
  type: "custom",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `name`                                                                                                       | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `type`                                                                                                       | *"custom"*                                                                                                   | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `allowedCallers`                                                                                             | [components.ResponsesCustomToolAllowedCaller](../../models/components/responsescustomtoolallowedcaller.md)[] | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `deferLoading`                                                                                               | *boolean*                                                                                                    | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `description`                                                                                                | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `format`                                                                                                     | *components.ResponsesCustomToolFormat*                                                                       | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `additionalProperties`                                                                                       | Record<string, *any*>                                                                                        | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |