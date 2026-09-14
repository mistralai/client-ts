# IngestDocumentsResponse

## Example Usage

```typescript
import { IngestDocumentsResponse } from "@mistralai/mistralai/models/components";

let value: IngestDocumentsResponse = {
  accepted: 31672,
  rejected: 611103,
  results: [
    {
      status: "accepted",
      position: 607991,
      documentId: "<id>",
      chunkCount: 915563,
    },
  ],
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `accepted`            | *number*              | :heavy_check_mark:    | N/A                   |
| `rejected`            | *number*              | :heavy_check_mark:    | N/A                   |
| `results`             | *components.Result*[] | :heavy_check_mark:    | N/A                   |