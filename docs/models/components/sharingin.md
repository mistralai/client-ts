# SharingIn

## Example Usage

```typescript
import { SharingIn } from "@mistralai/mistralai/models/components";

let value: SharingIn = {
  orgId: "bc4c2161-d23a-429b-b1fe-195d2a2e37e8",
  level: "Viewer",
  shareWithUuid: "3ed37090-9599-4057-9ccc-af8f13fa82cf",
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