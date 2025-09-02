# UploadFileOut

## Example Usage

```typescript
import { UploadFileOut } from "@mistralai/mistralai/models/components";

let value: UploadFileOut = {
  id: "497f6eca-6276-4993-bfeb-53cbbbba6f09",
  object: "file",
  sizeBytes: 13000,
  createdAt: 1716963433,
  filename: "files_upload.jsonl",
  purpose: "batch",
  sampleType: "batch_error",
  source: "repository",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `id`                                                             | *string*                                                         | :heavy_check_mark:                                               | The unique identifier of the file.                               | 497f6eca-6276-4993-bfeb-53cbbbba6f09                             |
| `object`                                                         | *string*                                                         | :heavy_check_mark:                                               | The object type, which is always "file".                         | file                                                             |
| `sizeBytes`                                                      | *number*                                                         | :heavy_check_mark:                                               | The size of the file, in bytes.                                  | 13000                                                            |
| `createdAt`                                                      | *number*                                                         | :heavy_check_mark:                                               | The UNIX timestamp (in seconds) of the event.                    | 1716963433                                                       |
| `filename`                                                       | *string*                                                         | :heavy_check_mark:                                               | The name of the uploaded file.                                   | files_upload.jsonl                                               |
| `purpose`                                                        | [components.FilePurpose](../../models/components/filepurpose.md) | :heavy_check_mark:                                               | N/A                                                              |                                                                  |
| `sampleType`                                                     | [components.SampleType](../../models/components/sampletype.md)   | :heavy_check_mark:                                               | N/A                                                              |                                                                  |
| `numLines`                                                       | *number*                                                         | :heavy_minus_sign:                                               | N/A                                                              |                                                                  |
| `mimetype`                                                       | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |                                                                  |
| `source`                                                         | [components.Source](../../models/components/source.md)           | :heavy_check_mark:                                               | N/A                                                              |                                                                  |
| `signature`                                                      | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |                                                                  |