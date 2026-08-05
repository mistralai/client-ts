# RegisterDeploymentRequestVespaField

## Example Usage

```typescript
import { RegisterDeploymentRequestVespaField } from "@mistralai/mistralai/models/components";

let value: RegisterDeploymentRequestVespaField = {
  name: "<value>",
  type: "string",
  storage: "on_disk",
  ranking: "language",
  indexType: "attribute",
  multidimensional: true,
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