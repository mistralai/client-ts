# SystemParamFilter

## Example Usage

```typescript
import { SystemParamFilter } from "@mistralai/mistralai/models/components";

let value: SystemParamFilter = {
  key: "<key>",
  operator: "contains",
  value: true,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `key`                                                                            | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `operator`                                                                       | [components.SystemParamOperator](../../models/components/systemparamoperator.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `value`                                                                          | *components.SystemParamFilterValue*                                              | :heavy_check_mark:                                                               | N/A                                                                              |