# ListLibraryOut

## Example Usage

```typescript
import { ListLibraryOut } from "@mistralai/mistralai/models/components";

let value: ListLibraryOut = {
  data: [
    {
      id: "22dccd56-b81f-4bed-b1e1-e58e1be5f8ad",
      name: "<value>",
      createdAt: new Date("2024-09-24T02:11:48.876Z"),
      updatedAt: new Date("2023-05-26T21:02:03.177Z"),
      ownerId: "501f55c8-818b-4455-af1c-cb4326795686",
      ownerType: "<value>",
      totalSize: 511025,
      nbDocuments: 199415,
      chunkSize: 843252,
    },
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `data`                                                           | [components.LibraryOut](../../models/components/libraryout.md)[] | :heavy_check_mark:                                               | N/A                                                              |