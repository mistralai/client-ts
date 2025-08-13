# SharingDelete

## Example Usage

```typescript
import { SharingDelete } from "@mistralai/mistralai/models/components";

let value: SharingDelete = {
  orgId: "5765ebb4-9cc5-4cb2-bd77-7997da66c530",
  shareWithUuid: "e1521e0f-1d95-45c5-ba87-e8db0c3e0517",
  shareWithType: "User",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `orgId`                                                              | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `shareWithUuid`                                                      | *string*                                                             | :heavy_check_mark:                                                   | The id of the entity (user, workspace or organization) to share with |
| `shareWithType`                                                      | [components.EntityType](../../models/components/entitytype.md)       | :heavy_check_mark:                                                   | The type of entity, used to share a library.                         |