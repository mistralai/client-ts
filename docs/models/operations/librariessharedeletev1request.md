# LibrariesShareDeleteV1Request

## Example Usage

```typescript
import { LibrariesShareDeleteV1Request } from "@mistralai/mistralai/models/operations";

let value: LibrariesShareDeleteV1Request = {
  libraryId: "d717d709-fd9e-4d79-abd0-c7ac8261bfc6",
  sharingDelete: {
    orgId: "484b4fa1-0f35-43ea-b885-963a5c68c7fc",
    shareWithUuid: "f69baf44-ec39-4b56-897c-0659c12ab9f7",
    shareWithType: "Org",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `libraryId`                                                          | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `sharingDelete`                                                      | [components.SharingDelete](../../models/components/sharingdelete.md) | :heavy_check_mark:                                                   | N/A                                                                  |