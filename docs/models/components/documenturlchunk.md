# DocumentURLChunk

## Example Usage

```typescript
import { DocumentURLChunk } from "@mistralai/mistralai/models/components";

let value: DocumentURLChunk = {
  documentUrl: "https://other-reach.net",
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `type`                       | *"document_url"*             | :heavy_minus_sign:           | N/A                          |
| `documentUrl`                | *string*                     | :heavy_check_mark:           | N/A                          |
| `documentName`               | *string*                     | :heavy_minus_sign:           | The filename of the document |