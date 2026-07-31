# OtelFieldDefinition

## Example Usage

```typescript
import { OtelFieldDefinition } from "@mistralai/mistralai/models/components";

let value: OtelFieldDefinition = {
  name: "<value>",
  label: "<value>",
  type: "TEXT",
  supportedOperators: [
    "ilike",
  ],
  supportedAggregations: [
    "avg",
  ],
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                               | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `label`                                                                                                              | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `type`                                                                                                               | [components.OtelFieldDefinitionType](../../models/components/otelfielddefinitiontype.md)                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `group`                                                                                                              | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `supportedOperators`                                                                                                 | [components.OtelFieldDefinitionSupportedOperator](../../models/components/otelfielddefinitionsupportedoperator.md)[] | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `supportedAggregations`                                                                                              | [components.MetricAggregation](../../models/components/metricaggregation.md)[]                                       | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |