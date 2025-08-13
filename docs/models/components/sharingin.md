# SharingIn

## Example Usage

```typescript
import { SharingIn } from "@mistralai/mistralai/models/components";

let value: SharingIn = {
  orgId: "ec594d13-26b8-4706-913e-3dc291bac7e0",
  level: "Editor",
  shareWithUuid: "621d7eb6-58eb-40be-bb27-25ee459f24d7",
  shareWithType: "User",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `orgId`                                                              | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `level`                                                              | [components.ShareEnum](../../models/components/shareenum.md)         | :heavy_check_mark:                                                   | N/A                                                                  |
| `shareWithUuid`                                                      | *string*                                                             | :heavy_check_mark:                                                   | The id of the entity (user, workspace or organization) to share with |
| `shareWithType`                                                      | [components.EntityType](../../models/components/entitytype.md)       | :heavy_check_mark:                                                   | The type of entity, used to share a library.                         |