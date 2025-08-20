# ListLibraryOut

## Example Usage

```typescript
import { ListLibraryOut } from "@mistralai/mistralai/models/components";

let value: ListLibraryOut = {
  data: [
    {
      id: "9d182b69-2275-4fcb-9e18-9f4310eac491",
      name: "<value>",
      createdAt: new Date("2025-12-07T08:01:55.761Z"),
      updatedAt: new Date("2025-08-18T15:35:38.302Z"),
      ownerId: "5f3ffcad-4d90-452f-977a-52d3831dffec",
      ownerType: "<value>",
      totalSize: 81101,
      nbDocuments: 407241,
      chunkSize: 232234,
    },
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `data`                                                           | [components.LibraryOut](../../models/components/libraryout.md)[] | :heavy_check_mark:                                               | N/A                                                              |