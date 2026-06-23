# RegisterSearchIndexRequestVespaSchemaField

## Example Usage

```typescript
import { RegisterSearchIndexRequestVespaSchemaField } from "@mistralai/mistralai/models/components";

let value: RegisterSearchIndexRequestVespaSchemaField = {
  name: "<value>",
  type: "long",
  storage: "on_disk",
  ranking: "string",
  indexType: "bm25",
  multidimensional: false,
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `name`                                                                                 | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `type`                                                                                 | [components.SchemaFieldDataType](../../models/components/schemafielddatatype.md)       | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `storage`                                                                              | [components.SchemaFieldStorage](../../models/components/schemafieldstorage.md)         | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `ranking`                                                                              | [components.SchemaFieldRankingType](../../models/components/schemafieldrankingtype.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `indexType`                                                                            | [components.SchemaFieldIndex](../../models/components/schemafieldindex.md)             | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `multidimensional`                                                                     | *boolean*                                                                              | :heavy_check_mark:                                                                     | N/A                                                                                    |