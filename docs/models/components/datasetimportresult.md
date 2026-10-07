# DatasetImportResult

Source-agnostic counts for a completed dataset import.

## Example Usage

```typescript
import { DatasetImportResult } from "@mistralai/mistralai/models/components";

let value: DatasetImportResult = {
  requestedRecordCount: 790394,
  importedRecordCount: 358616,
  skippedRecordCount: 495826,
};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `requestedRecordCount` | *number*               | :heavy_check_mark:     | N/A                    |
| `importedRecordCount`  | *number*               | :heavy_check_mark:     | N/A                    |
| `skippedRecordCount`   | *number*               | :heavy_check_mark:     | N/A                    |