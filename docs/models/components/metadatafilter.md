# MetadataFilter

## Example Usage

```typescript
import { MetadataFilter } from "@mistralai/mistralai/models/components";

let value: MetadataFilter = {
  key: "<key>",
  operator: "lte",
  value: false,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `key`                                                                            | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `operator`                                                                       | [components.SystemParamOperator](../../models/components/systemparamoperator.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `value`                                                                          | *components.MetadataFilterValue*                                                 | :heavy_check_mark:                                                               | N/A                                                                              |