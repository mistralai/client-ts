# DocumentOut

## Example Usage

```typescript
import { DocumentOut } from "@mistralai/mistralai/models/components";

let value: DocumentOut = {
  id: "baffe13e-7139-4dca-9da9-6808efbb8966",
  libraryId: "f85c6cfe-ffba-4130-8350-eb7bc74cf318",
  hash: "<value>",
  mimeType: "<value>",
  extension: "jpe",
  size: 557590,
  name: "<value>",
  createdAt: new Date("2023-04-27T09:47:22.828Z"),
  processingStatus: "<value>",
  uploadedById: "a07ae014-de08-46b2-9005-78a53e12d7f6",
  uploadedByType: "<value>",
  tokensProcessingTotal: 554819,
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