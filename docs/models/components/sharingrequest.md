# SharingRequest

## Example Usage

```typescript
import { SharingRequest } from "@mistralai/mistralai/models/components";

let value: SharingRequest = {
  level: "Viewer",
  shareWithUuid: "b869a39c-743d-4e04-8477-79ba21beb8d2",
  shareWithType: "Org",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `orgId`                                                              | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `level`                                                              | [components.ShareEnum](../../models/components/shareenum.md)         | :heavy_check_mark:                                                   | N/A                                                                  |
| `shareWithUuid`                                                      | *string*                                                             | :heavy_check_mark:                                                   | The id of the entity (user, workspace or organization) to share with |
| `shareWithType`                                                      | [components.EntityType](../../models/components/entitytype.md)       | :heavy_check_mark:                                                   | The type of entity, used to share a library.                         |