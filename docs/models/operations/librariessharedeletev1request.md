# LibrariesShareDeleteV1Request

## Example Usage

```typescript
import { LibrariesShareDeleteV1Request } from "@mistralai/mistralai/models/operations";

let value: LibrariesShareDeleteV1Request = {
  libraryId: "53ea8859-63a5-4c68-8c7f-cdf69baf44ec",
  sharingDelete: {
    orgId: "9b5697c0-659c-412a-ab9f-72a998f21239",
    shareWithUuid: "3777c7c2-8d27-492c-81f7-516a14da32e4",
    shareWithType: "Org",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `libraryId`                                                          | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `sharingDelete`                                                      | [components.SharingDelete](../../models/components/sharingdelete.md) | :heavy_check_mark:                                                   | N/A                                                                  |