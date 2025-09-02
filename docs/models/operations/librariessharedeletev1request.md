# LibrariesShareDeleteV1Request

## Example Usage

```typescript
import { LibrariesShareDeleteV1Request } from "@mistralai/mistralai/models/operations";

let value: LibrariesShareDeleteV1Request = {
  libraryId: "c85d717d-709f-4d9e-bd79-bd0c7ac8261b",
  sharingDelete: {
    orgId: "c69484b4-fa10-4f35-93ea-885963a5c68c",
    shareWithUuid: "fcdf69ba-f44e-4c39-ab56-97c0659c12ab",
    shareWithType: "Org",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `libraryId`                                                          | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `sharingDelete`                                                      | [components.SharingDelete](../../models/components/sharingdelete.md) | :heavy_check_mark:                                                   | N/A                                                                  |