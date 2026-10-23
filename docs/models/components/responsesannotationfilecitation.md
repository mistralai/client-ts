# ResponsesAnnotationFileCitation

## Example Usage

```typescript
import { ResponsesAnnotationFileCitation } from "@mistralai/mistralai/models/components";

let value: ResponsesAnnotationFileCitation = {
  fileId: "<id>",
  filename: "example.file",
  index: 580219,
  type: "file_citation",
};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `fileId`               | *string*               | :heavy_check_mark:     | N/A                    |
| `filename`             | *string*               | :heavy_check_mark:     | N/A                    |
| `index`                | *number*               | :heavy_check_mark:     | N/A                    |
| `type`                 | *"file_citation"*      | :heavy_check_mark:     | N/A                    |
| `additionalProperties` | Record<string, *any*>  | :heavy_minus_sign:     | N/A                    |