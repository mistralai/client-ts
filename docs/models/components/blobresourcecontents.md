# BlobResourceContents

Binary contents of a resource.

## Example Usage

```typescript
import { BlobResourceContents } from "@mistralai/mistralai/models/components";

let value: BlobResourceContents = {
  uri: "https://purple-status.biz/",
  blob: "<value>",
};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `uri`                  | *string*               | :heavy_check_mark:     | N/A                    |
| `mimeType`             | *string*               | :heavy_minus_sign:     | N/A                    |
| `meta`                 | Record<string, *any*>  | :heavy_minus_sign:     | N/A                    |
| `blob`                 | *string*               | :heavy_check_mark:     | N/A                    |
| `additionalProperties` | Record<string, *any*>  | :heavy_minus_sign:     | N/A                    |