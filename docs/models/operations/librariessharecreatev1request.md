# LibrariesShareCreateV1Request

## Example Usage

```typescript
import { LibrariesShareCreateV1Request } from "@mistralai/mistralai/models/operations";

let value: LibrariesShareCreateV1Request = {
  libraryId: "ff2e1825-b6cb-4f8c-a556-6181e0742cb2",
  sharingIn: {
    orgId: "cc1abd87-fc85-4d71-b7d7-09fd9ed79bd0",
    level: "Viewer",
    shareWithUuid: "ac8261bf-c694-484b-94fa-10f353ea8859",
    shareWithType: "User",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `libraryId`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `sharingIn`                                                  | [components.SharingIn](../../models/components/sharingin.md) | :heavy_check_mark:                                           | N/A                                                          |