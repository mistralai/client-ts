# ResponsesAnnotationContainerFileCitation

## Example Usage

```typescript
import { ResponsesAnnotationContainerFileCitation } from "@mistralai/mistralai/models/components";

let value: ResponsesAnnotationContainerFileCitation = {
  containerId: "<id>",
  endIndex: 153872,
  fileId: "<id>",
  filename: "example.file",
  startIndex: 668724,
  type: "container_file_citation",
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `containerId`               | *string*                    | :heavy_check_mark:          | N/A                         |
| `endIndex`                  | *number*                    | :heavy_check_mark:          | N/A                         |
| `fileId`                    | *string*                    | :heavy_check_mark:          | N/A                         |
| `filename`                  | *string*                    | :heavy_check_mark:          | N/A                         |
| `startIndex`                | *number*                    | :heavy_check_mark:          | N/A                         |
| `type`                      | *"container_file_citation"* | :heavy_check_mark:          | N/A                         |
| `additionalProperties`      | Record<string, *any*>       | :heavy_minus_sign:          | N/A                         |