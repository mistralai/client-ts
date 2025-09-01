# LibrariesShareCreateV1Request

## Example Usage

```typescript
import { LibrariesShareCreateV1Request } from "@mistralai/mistralai/models/operations";

let value: LibrariesShareCreateV1Request = {
  libraryId: "b7dc8216-e4ce-4ff1-a455-580e870d6c11",
  sharingIn: {
    orgId: "487e3359-6b01-47f9-969c-f4387c394ce9",
    level: "Viewer",
    shareWithUuid: "b4d43faf-9d92-4c96-b0b5-23e55802be64",
    shareWithType: "Workspace",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `libraryId`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `sharingIn`                                                  | [components.SharingIn](../../models/components/sharingin.md) | :heavy_check_mark:                                           | N/A                                                          |