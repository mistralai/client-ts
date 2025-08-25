# DocumentURLChunk

## Example Usage

```typescript
import { DocumentURLChunk } from "@mistralai/mistralai-azure/models/components";

let value: DocumentURLChunk = {
  documentUrl: "https://elliptical-fog.org",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `documentUrl`                                                                      | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `documentName`                                                                     | *string*                                                                           | :heavy_minus_sign:                                                                 | The filename of the document                                                       |
| `type`                                                                             | [components.DocumentURLChunkType](../../models/components/documenturlchunktype.md) | :heavy_minus_sign:                                                                 | N/A                                                                                |