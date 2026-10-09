# ReadRequest

## Example Usage

```typescript
import { ReadRequest } from "@mistralai/mistralai/models/components";

let value: ReadRequest = {
  sourceId: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `sourceId`         | *string*           | :heavy_check_mark: | N/A                |
| `startOffset`      | *number*           | :heavy_minus_sign: | N/A                |
| `endOffset`        | *number*           | :heavy_minus_sign: | N/A                |
| `topK`             | *number*           | :heavy_minus_sign: | N/A                |
| `contentType`      | *string*           | :heavy_minus_sign: | N/A                |