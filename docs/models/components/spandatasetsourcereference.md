# SpanDatasetSourceReference

## Example Usage

```typescript
import { SpanDatasetSourceReference } from "@mistralai/mistralai/models/components";

let value: SpanDatasetSourceReference = {
  namespace: "span_attributes",
  key: "<key>",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `namespace`                                                                                    | [components.SpanDatasetSourceNamespace](../../models/components/spandatasetsourcenamespace.md) | :heavy_check_mark:                                                                             | Attribute maps that may supply dataset payload values.                                         |
| `key`                                                                                          | *string*                                                                                       | :heavy_check_mark:                                                                             | Literal attribute dictionary key; dots do not denote a nested path.                            |