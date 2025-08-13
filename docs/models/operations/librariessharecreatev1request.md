# LibrariesShareCreateV1Request

## Example Usage

```typescript
import { LibrariesShareCreateV1Request } from "@mistralai/mistralai/models/operations";

let value: LibrariesShareCreateV1Request = {
  libraryId: "467ff2e1-825b-46cb-bf8c-5566181e0742",
  sharingIn: {
    orgId: "b2acc1ab-d87f-4c85-ad71-7d709fd9ed79",
    level: "Editor",
    shareWithUuid: "0c7ac826-1bfc-4694-a84b-4fa10f353ea8",
    shareWithType: "User",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `libraryId`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `sharingIn`                                                  | [components.SharingIn](../../models/components/sharingin.md) | :heavy_check_mark:                                           | N/A                                                          |