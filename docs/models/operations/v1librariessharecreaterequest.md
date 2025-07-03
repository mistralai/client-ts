# V1LibrariesShareCreateRequest

## Example Usage

```typescript
import { V1LibrariesShareCreateRequest } from "@mistralai/mistralai/models/operations";

let value: V1LibrariesShareCreateRequest = {
  libraryId: "d3581164-67ff-42e1-a825-b6cbf8c55661",
  sharingIn: {
    orgId: "1e0742cb-2acc-41ab-bd87-fc85d717d709",
    level: "Editor",
    shareWithUuid: "9ed79bd0-c7ac-4826-b1bf-c69484b4fa10",
    shareWithType: "User",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `libraryId`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `sharingIn`                                                  | [components.SharingIn](../../models/components/sharingin.md) | :heavy_check_mark:                                           | N/A                                                          |