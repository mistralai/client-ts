# SharingIn

## Example Usage

```typescript
import { SharingIn } from "@mistralai/mistralai/models/components";

let value: SharingIn = {
  orgId: "91fe6347-0a66-4cbf-95ec-594d1326b870",
  level: "Viewer",
  shareWithUuid: "3e3dc291-bac7-4e04-bb62-1d7eb658eb0b",
  shareWithType: "Org",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `orgId`                                                              | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `level`                                                              | [components.ShareEnum](../../models/components/shareenum.md)         | :heavy_check_mark:                                                   | N/A                                                                  |
| `shareWithUuid`                                                      | *string*                                                             | :heavy_check_mark:                                                   | The id of the entity (user, workspace or organization) to share with |
| `shareWithType`                                                      | [components.EntityType](../../models/components/entitytype.md)       | :heavy_check_mark:                                                   | The type of entity, used to share a library.                         |