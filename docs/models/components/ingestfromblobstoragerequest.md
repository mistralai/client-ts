# IngestFromBlobStorageRequest

Request body for ingesting a document from blob storage.

## Example Usage

```typescript
import { IngestFromBlobStorageRequest } from "@mistralai/mistralai/models/components";

let value: IngestFromBlobStorageRequest = {
  filename: "example.file",
  signedUrl: "https://yummy-fireplace.org/",
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `filename`                                                                                                                                   | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | Name of the file to be ingested.                                                                                                             |
| `signedUrl`                                                                                                                                  | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | Signed URL for ingesting a document from blob storage. You can get one via the /libraries/{library_id}/documents/signed-upload-url endpoint. |