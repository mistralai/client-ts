# ListLibraryOut

## Example Usage

```typescript
import { ListLibraryOut } from "@mistralai/mistralai/models/components";

let value: ListLibraryOut = {
  data: [
    {
      id: "4310eac4-917f-4e5f-a3ff-cad4d9052f77",
      name: "<value>",
      createdAt: new Date("2024-02-08T23:14:58.127Z"),
      updatedAt: new Date("2023-05-31T01:01:29.087Z"),
      ownerId: "d3831dff-ec51-4632-80b0-c211a368db42",
      ownerType: "<value>",
      totalSize: 301598,
      nbDocuments: 262118,
      chunkSize: 456141,
    },
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `data`                                                           | [components.LibraryOut](../../models/components/libraryout.md)[] | :heavy_check_mark:                                               | N/A                                                              |