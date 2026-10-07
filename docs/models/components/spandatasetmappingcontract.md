# SpanDatasetMappingContract

Mapping rules applied independently to every requested telemetry span.

Version 1 mappings are optional per span: a missing, null, blank-string, or empty-array
source omits the target key. JSON object and array strings become structured values;
scalar-looking and malformed JSON strings remain strings.

## Example Usage

```typescript
import { SpanDatasetMappingContract } from "@mistralai/mistralai/models/components";

let value: SpanDatasetMappingContract = {
  version: 1,
  mappings: [],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `version`                                                                        | *1*                                                                              | :heavy_check_mark:                                                               | N/A                                                                              |
| `mappings`                                                                       | [components.SpanDatasetMapping](../../models/components/spandatasetmapping.md)[] | :heavy_check_mark:                                                               | N/A                                                                              |