# ListFilesOut

## Example Usage

```typescript
import { ListFilesOut } from "@mistralai/mistralai/models/components";

let value: ListFilesOut = {
  data: [
    {
      id: "497f6eca-6276-4993-bfeb-53cbbbba6f09",
      object: "file",
      sizeBytes: 13000,
      createdAt: 1716963433,
      filename: "files_upload.jsonl",
      purpose: "batch",
      sampleType: "batch_request",
      source: "upload",
    },
  ],
  object: "<value>",
  total: 586784,
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `data`                                                           | [components.FileSchema](../../models/components/fileschema.md)[] | :heavy_check_mark:                                               | N/A                                                              |
| `object`                                                         | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `total`                                                          | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |