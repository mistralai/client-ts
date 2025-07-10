# SharingIn

## Example Usage

```typescript
import { SharingIn } from "@mistralai/mistralai/models/components";

let value: SharingIn = {
  orgId: "d1326b87-0613-4e3d-bc29-1bac7e04b621",
  level: "Viewer",
  shareWithUuid: "eb658eb0-beb2-4725-9ee4-59f24d7e2855",
  shareWithType: "Workspace",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `orgId`                                                              | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `level`                                                              | [components.ShareEnum](../../models/components/shareenum.md)         | :heavy_check_mark:                                                   | N/A                                                                  |
| `shareWithUuid`                                                      | *string*                                                             | :heavy_check_mark:                                                   | The id of the entity (user, workspace or organization) to share with |
| `shareWithType`                                                      | [components.EntityType](../../models/components/entitytype.md)       | :heavy_check_mark:                                                   | The type of entity, used to share a library.                         |