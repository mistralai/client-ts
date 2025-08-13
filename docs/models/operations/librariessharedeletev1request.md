# LibrariesShareDeleteV1Request

## Example Usage

```typescript
import { LibrariesShareDeleteV1Request } from "@mistralai/mistralai/models/operations";

let value: LibrariesShareDeleteV1Request = {
  libraryId: "963a5c68-c7fc-4df6-b9ba-f44ec39b5697",
  sharingDelete: {
    orgId: "0659c12a-b9f7-42a9-b98f-2123993777c7",
    shareWithUuid: "28d2792c-1f75-416a-814d-a32e42f4176e",
    shareWithType: "User",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `libraryId`                                                          | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `sharingDelete`                                                      | [components.SharingDelete](../../models/components/sharingdelete.md) | :heavy_check_mark:                                                   | N/A                                                                  |