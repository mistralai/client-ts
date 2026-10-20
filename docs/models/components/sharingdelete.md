# SharingDelete

## Example Usage

```typescript
import { SharingDelete } from "@mistralai/mistralai/models/components";

let value: SharingDelete = {
  shareWithUuid: "33c1d1d5-b6b7-43ef-a338-5ddf0da5c8e8",
  shareWithType: "Workspace",
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| ~~`orgId`~~                                                                                                             | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible. |
| `shareWithUuid`                                                                                                         | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | The id of the entity to stop sharing with, as returned by the list endpoint                                             |
| `shareWithType`                                                                                                         | [components.EntityType](../../models/components/entitytype.md)                                                          | :heavy_check_mark:                                                                                                      | The type of entity, used to share a library.                                                                            |