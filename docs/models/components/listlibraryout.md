# ListLibraryOut

## Example Usage

```typescript
import { ListLibraryOut } from "@mistralai/mistralai/models/components";

let value: ListLibraryOut = {
  data: [
    {
      id: "189f4310-eac4-4917-8fe5-f3ffcad4d905",
      name: "<value>",
      createdAt: new Date("2025-12-12T02:02:24.972Z"),
      updatedAt: new Date("2024-06-08T07:03:09.203Z"),
      ownerId: "7a52d383-1dff-4ec5-b163-20b0c211a368",
      ownerType: "<value>",
      totalSize: 727044,
      nbDocuments: 270328,
      chunkSize: 131482,
    },
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `data`                                                           | [components.LibraryOut](../../models/components/libraryout.md)[] | :heavy_check_mark:                                               | N/A                                                              |