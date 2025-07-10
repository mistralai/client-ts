# SharingDelete

## Example Usage

```typescript
import { SharingDelete } from "@mistralai/mistralai/models/components";

let value: SharingDelete = {
  orgId: "bb49cc5c-b2d7-4779-897d-a66c530ee152",
  shareWithUuid: "e0f1d955-c5a8-47e8-8db0-c3e0517d425d",
  shareWithType: "User",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `orgId`                                                              | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `shareWithUuid`                                                      | *string*                                                             | :heavy_check_mark:                                                   | The id of the entity (user, workspace or organization) to share with |
| `shareWithType`                                                      | [components.EntityType](../../models/components/entitytype.md)       | :heavy_check_mark:                                                   | The type of entity, used to share a library.                         |