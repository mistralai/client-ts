# GetSearchIndexSchemaDetailResponseField

## Example Usage

```typescript
import { GetSearchIndexSchemaDetailResponseField } from "@mistralai/mistralai/models/components";

let value: GetSearchIndexSchemaDetailResponseField = {
  name: "<value>",
  type: "int",
  storage: "in_memory",
  indexType: null,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `name`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `type`                                                                           | [components.SchemaFieldDataType](../../models/components/schemafielddatatype.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `storage`                                                                        | [components.SchemaFieldStorage](../../models/components/schemafieldstorage.md)   | :heavy_check_mark:                                                               | N/A                                                                              |
| `indexType`                                                                      | [components.SchemaFieldIndex](../../models/components/schemafieldindex.md)       | :heavy_check_mark:                                                               | N/A                                                                              |