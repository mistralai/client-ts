# BaseFieldDefinition

## Example Usage

```typescript
import { BaseFieldDefinition } from "@mistralai/mistralai/models/components";

let value: BaseFieldDefinition = {
  name: "<value>",
  label: "<value>",
  type: "ENUM",
  supportedOperators: [
    "includes",
  ],
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `name`                                                                                   | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `label`                                                                                  | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `type`                                                                                   | [components.BaseFieldDefinitionType](../../models/components/basefielddefinitiontype.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `group`                                                                                  | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `supportedOperators`                                                                     | [components.SupportedOperator](../../models/components/supportedoperator.md)[]           | :heavy_check_mark:                                                                       | N/A                                                                                      |