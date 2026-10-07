# CreateManagedIndexRequest

## Example Usage

```typescript
import { CreateManagedIndexRequest } from "@mistralai/mistralai/models/components";

let value: CreateManagedIndexRequest = {
  name: "<value>",
  config: {
    embedding: {
      type: "custom",
      name: "<value>",
      dimensions: 172781,
    },
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `name`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `schema`                                                                       | [components.ManagedIndexFields](../../models/components/managedindexfields.md) | :heavy_minus_sign:                                                             | N/A                                                                            |
| `config`                                                                       | [components.ManagedIndexConfig](../../models/components/managedindexconfig.md) | :heavy_check_mark:                                                             | N/A                                                                            |