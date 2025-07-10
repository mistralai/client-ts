# DocumentOut

## Example Usage

```typescript
import { DocumentOut } from "@mistralai/mistralai/models/components";

let value: DocumentOut = {
  id: "47638458-c5ed-4047-915b-a9b35ae840b0",
  libraryId: "8e160594-319b-4af0-8a99-f0bd85c178b1",
  hash: "<value>",
  mimeType: "<value>",
  extension: "png",
  size: 623295,
  name: "<value>",
  createdAt: new Date("2025-08-30T02:36:59.001Z"),
  processingStatus: "<value>",
  uploadedById: "92fd8e8e-dfe0-426f-a42e-7e2a71b3000e",
  uploadedByType: "<value>",
  tokensProcessingTotal: 898063,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `libraryId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `hash`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `mimeType`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `extension`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `size`                                                                                        | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `summary`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `lastProcessedAt`                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `numberOfPages`                                                                               | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `processingStatus`                                                                            | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `uploadedById`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `uploadedByType`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `tokensProcessingMainContent`                                                                 | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `tokensProcessingSummary`                                                                     | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `tokensProcessingTotal`                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |