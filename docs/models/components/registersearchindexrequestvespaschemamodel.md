# RegisterSearchIndexRequestVespaSchemaModel

## Example Usage

```typescript
import { RegisterSearchIndexRequestVespaSchemaModel } from "@mistralai/mistralai/models/components";

let value: RegisterSearchIndexRequestVespaSchemaModel = {
  name: "<value>",
  fields: [
    {
      name: "<value>",
      type: "int",
      storage: "in_memory",
      ranking: "timestamp",
      indexType: "bm25",
      multidimensional: false,
    },
  ],
  sd: "<value>",
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                           | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `fields`                                                                                                                         | [components.RegisterSearchIndexRequestVespaSchemaField](../../models/components/registersearchindexrequestvespaschemafield.md)[] | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `sd`                                                                                                                             | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |