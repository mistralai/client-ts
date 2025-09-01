# LibrariesShareDeleteV1Request

## Example Usage

```typescript
import { LibrariesShareDeleteV1Request } from "@mistralai/mistralai/models/operations";

let value: LibrariesShareDeleteV1Request = {
  libraryId: "60a98302-6f5c-420d-b196-340076197225",
  sharingDelete: {
    orgId: "62303524-1a55-4463-a880-73404efa3580",
    shareWithUuid: "e895052c-9149-4add-be08-9a4b900934aa",
    shareWithType: "Workspace",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `libraryId`                                                          | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `sharingDelete`                                                      | [components.SharingDelete](../../models/components/sharingdelete.md) | :heavy_check_mark:                                                   | N/A                                                                  |