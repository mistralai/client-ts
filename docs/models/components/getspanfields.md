# GetSpanFields

## Example Usage

```typescript
import { GetSpanFields } from "@mistralai/mistralai/models/components";

let value: GetSpanFields = {
  fieldDefinitions: [
    {
      name: "<value>",
      label: "<value>",
      type: "TEXT",
      supportedOperators: [
        "exists",
      ],
    },
  ],
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `fieldDefinitions`                                                                 | [components.OtelFieldDefinition](../../models/components/otelfielddefinition.md)[] | :heavy_check_mark:                                                                 | N/A                                                                                |