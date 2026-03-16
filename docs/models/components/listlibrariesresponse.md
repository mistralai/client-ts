# ListLibrariesResponse

## Example Usage

```typescript
import { ListLibrariesResponse } from "@mistralai/mistralai/models/components";

let value: ListLibrariesResponse = {
  data: [
    {
      id: "7c267ebe-fd02-4790-badc-425cdbfc753c",
      name: "<value>",
      createdAt: new Date("2024-12-24T19:40:55.864Z"),
      updatedAt: new Date("2026-04-17T03:51:05.329Z"),
      ownerId: "922a88b7-fb65-4690-8fd6-8b21f92559c1",
      ownerType: "<value>",
      totalSize: 599901,
      nbDocuments: 498384,
      chunkSize: 206852,
    },
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `data`                                                     | [components.Library](../../models/components/library.md)[] | :heavy_check_mark:                                         | N/A                                                        |