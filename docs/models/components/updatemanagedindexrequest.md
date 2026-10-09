# UpdateManagedIndexRequest

The schema an index should have. Sent whole, not as a patch.

No ``config``: the embedding configuration is fixed at creation, so there is
nothing for a caller to send back.

## Example Usage

```typescript
import { UpdateManagedIndexRequest } from "@mistralai/mistralai/models/components";

let value: UpdateManagedIndexRequest = {
  schema: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `schema`                                                                       | [components.ManagedIndexFields](../../models/components/managedindexfields.md) | :heavy_check_mark:                                                             | N/A                                                                            |