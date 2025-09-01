# SharingDelete

## Example Usage

```typescript
import { SharingDelete } from "@mistralai/mistralai/models/components";

let value: SharingDelete = {
  orgId: "33c1d1d5-b6b7-43ef-a338-5ddf0da5c8e8",
  shareWithUuid: "8c9881d1-b753-49ab-8af0-6499dc0fbb8f",
  shareWithType: "Workspace",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `orgId`                                                              | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `shareWithUuid`                                                      | *string*                                                             | :heavy_check_mark:                                                   | The id of the entity (user, workspace or organization) to share with |
| `shareWithType`                                                      | [components.EntityType](../../models/components/entitytype.md)       | :heavy_check_mark:                                                   | The type of entity, used to share a library.                         |