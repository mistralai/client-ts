# SpanDatasetMapping

## Example Usage

```typescript
import { SpanDatasetMapping } from "@mistralai/mistralai/models/components";

let value: SpanDatasetMapping = {
  targetField: "<value>",
  sourceField: {
    namespace: "resource_attributes",
    key: "<key>",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `targetField`                                                                                  | *string*                                                                                       | :heavy_check_mark:                                                                             | Literal top-level key to create in the dataset record payload.                                 |
| `sourceField`                                                                                  | [components.SpanDatasetSourceReference](../../models/components/spandatasetsourcereference.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |