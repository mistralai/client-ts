# GetSearchIndexSchemaDetailResponseField

## Example Usage

```typescript
import { GetSearchIndexSchemaDetailResponseField } from "@mistralai/mistralai/models/components";

let value: GetSearchIndexSchemaDetailResponseField = {
  name: "<value>",
  type: 1,
  storage: 1,
  indexType: null,
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `name`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `type`                                                                         | [components.SchemaFieldType](../../models/components/schemafieldtype.md)       | :heavy_check_mark:                                                             | N/A                                                                            |
| `storage`                                                                      | [components.SchemaFieldStorage](../../models/components/schemafieldstorage.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `indexType`                                                                    | [components.SchemaFieldIndex](../../models/components/schemafieldindex.md)     | :heavy_check_mark:                                                             | N/A                                                                            |