# SharingIn

## Example Usage

```typescript
import { SharingIn } from "@mistralai/mistralai/models/components";

let value: SharingIn = {
  level: "Editor",
  shareWithUuid: "c4c2161d-23a2-49b1-8fe1-95d2a2e37e8e",
  shareWithType: "User",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `orgId`                                                              | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `level`                                                              | [components.ShareEnum](../../models/components/shareenum.md)         | :heavy_check_mark:                                                   | N/A                                                                  |
| `shareWithUuid`                                                      | *string*                                                             | :heavy_check_mark:                                                   | The id of the entity (user, workspace or organization) to share with |
| `shareWithType`                                                      | [components.EntityType](../../models/components/entitytype.md)       | :heavy_check_mark:                                                   | The type of entity, used to share a library.                         |