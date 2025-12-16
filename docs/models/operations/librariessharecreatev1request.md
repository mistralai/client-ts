# LibrariesShareCreateV1Request

## Example Usage

```typescript
import { LibrariesShareCreateV1Request } from "@mistralai/mistralai/models/operations";

let value: LibrariesShareCreateV1Request = {
  libraryId: "b7dc8216-e4ce-4ff1-a455-580e870d6c11",
  sharingIn: {
    level: "Viewer",
    shareWithUuid: "87e33596-b017-4f96-89cf-4387c394ce94",
    shareWithType: "Org",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `libraryId`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `sharingIn`                                                  | [components.SharingIn](../../models/components/sharingin.md) | :heavy_check_mark:                                           | N/A                                                          |