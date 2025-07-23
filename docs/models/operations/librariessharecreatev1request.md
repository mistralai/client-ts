# LibrariesShareCreateV1Request

## Example Usage

```typescript
import { LibrariesShareCreateV1Request } from "@mistralai/mistralai/models/operations";

let value: LibrariesShareCreateV1Request = {
  libraryId: "0bd35811-6467-4ff2-9e18-25b6cbf8c556",
  sharingIn: {
    orgId: "181e0742-cb2a-4cc1-8abd-87fc85d717d7",
    level: "Editor",
    shareWithUuid: "fd9ed79b-d0c7-4ac8-8261-bfc69484b4fa",
    shareWithType: "User",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `libraryId`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `sharingIn`                                                  | [components.SharingIn](../../models/components/sharingin.md) | :heavy_check_mark:                                           | N/A                                                          |