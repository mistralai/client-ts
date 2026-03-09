# ChatCompletionFields

## Example Usage

```typescript
import { ChatCompletionFields } from "@mistralai/mistralai/models/components";

let value: ChatCompletionFields = {
  fieldDefinitions: [
    {
      name: "<value>",
      label: "<value>",
      type: "ARRAY",
      supportedOperators: [],
    },
  ],
  fieldGroups: [],
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `fieldDefinitions`                                                                 | [components.BaseFieldDefinition](../../models/components/basefielddefinition.md)[] | :heavy_check_mark:                                                                 | N/A                                                                                |
| `fieldGroups`                                                                      | [components.FieldGroup](../../models/components/fieldgroup.md)[]                   | :heavy_check_mark:                                                                 | N/A                                                                                |