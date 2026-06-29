# LibrariesDocumentsIngestFromBlobStorageV1Request

## Example Usage

```typescript
import { LibrariesDocumentsIngestFromBlobStorageV1Request } from "@mistralai/mistralai/models/operations";

let value: LibrariesDocumentsIngestFromBlobStorageV1Request = {
  libraryId: "53a07c33-a084-42e9-9e51-c0d94a4a38ae",
  ingestFromBlobStorageRequest: {
    filename: "example.file",
    signedUrl: "https://kosher-vein.com",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `libraryId`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `ingestFromBlobStorageRequest`                                                                     | [components.IngestFromBlobStorageRequest](../../models/components/ingestfromblobstoragerequest.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |