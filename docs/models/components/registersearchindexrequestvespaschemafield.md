# RegisterSearchIndexRequestVespaSchemaField

## Example Usage

```typescript
import { RegisterSearchIndexRequestVespaSchemaField } from "@mistralai/mistralai/models/components";

let value: RegisterSearchIndexRequestVespaSchemaField = {
  name: "<value>",
  type: 3,
  storage: 2,
  indexType: 3,
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `name`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `type`                                                                         | [components.SchemaFieldType](../../models/components/schemafieldtype.md)       | :heavy_check_mark:                                                             | N/A                                                                            |
| `storage`                                                                      | [components.SchemaFieldStorage](../../models/components/schemafieldstorage.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `indexType`                                                                    | [components.SchemaFieldIndex](../../models/components/schemafieldindex.md)     | :heavy_check_mark:                                                             | N/A                                                                            |