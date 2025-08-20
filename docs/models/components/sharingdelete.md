# SharingDelete

## Example Usage

```typescript
import { SharingDelete } from "@mistralai/mistralai/models/components";

let value: SharingDelete = {
  orgId: "25ee459f-24d7-4e28-8557-65ebb49cc5cb",
  shareWithUuid: "d777997d-a66c-4530-9ee1-521e0f1d955c",
  shareWithType: "Workspace",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `orgId`                                                              | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `shareWithUuid`                                                      | *string*                                                             | :heavy_check_mark:                                                   | The id of the entity (user, workspace or organization) to share with |
| `shareWithType`                                                      | [components.EntityType](../../models/components/entitytype.md)       | :heavy_check_mark:                                                   | The type of entity, used to share a library.                         |