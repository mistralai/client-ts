# GetSearchIndexSchemaDetailResponseSchemaModel

## Example Usage

```typescript
import { GetSearchIndexSchemaDetailResponseSchemaModel } from "@mistralai/mistralai/models/components";

let value: GetSearchIndexSchemaDetailResponseSchemaModel = {
  name: "<value>",
  embeddingDimensions: null,
  fields: [
    {
      name: "<value>",
      type: "float",
      storage: "in_memory",
      indexType: "ann",
    },
  ],
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                     | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `embeddingDimensions`                                                                                                      | *number*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `fields`                                                                                                                   | [components.GetSearchIndexSchemaDetailResponseField](../../models/components/getsearchindexschemadetailresponsefield.md)[] | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |