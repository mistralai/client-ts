# FTModelOut

## Example Usage

```typescript
import { FTModelOut } from "@mistralai/mistralai/models/components";

let value: FTModelOut = {
  id: "<id>",
  created: 383441,
  ownedBy: "<value>",
  root: "<value>",
  archived: false,
  capabilities: {},
  job: "c89e110d-cdfc-47c1-9a2f-864c790999fa",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `id`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `object`                                                                               | [components.FTModelOutObject](../../models/components/ftmodeloutobject.md)             | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `created`                                                                              | *number*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `ownedBy`                                                                              | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `root`                                                                                 | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `archived`                                                                             | *boolean*                                                                              | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `name`                                                                                 | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `description`                                                                          | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `capabilities`                                                                         | [components.FTModelCapabilitiesOut](../../models/components/ftmodelcapabilitiesout.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `maxContextLength`                                                                     | *number*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `aliases`                                                                              | *string*[]                                                                             | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `job`                                                                                  | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |