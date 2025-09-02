# LibrariesShareCreateV1Request

## Example Usage

```typescript
import { LibrariesShareCreateV1Request } from "@mistralai/mistralai/models/operations";

let value: LibrariesShareCreateV1Request = {
  libraryId: "a84453ed-75f3-4803-b9a9-dfc7d1a82f59",
  sharingIn: {
    orgId: "81d5fed5-cf87-40bd-8358-116467ff2e18",
    level: "Viewer",
    shareWithUuid: "b6cbf8c5-5661-481e-9074-2cb2acc1abd8",
    shareWithType: "Org",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `libraryId`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `sharingIn`                                                  | [components.SharingIn](../../models/components/sharingin.md) | :heavy_check_mark:                                           | N/A                                                          |