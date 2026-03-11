# Document

## Example Usage

```typescript
import { Document } from "@mistralai/mistralai/models/components";

let value: Document = {
  id: "67b05821-2979-45f8-b725-57191c31b4f1",
  libraryId: "ba5d997b-6f84-4bed-93f8-2f42c6bb0e39",
  hash: "<value>",
  mimeType: "<value>",
  extension: "jpg",
  size: 387130,
  name: "<value>",
  createdAt: new Date("2024-09-30T16:25:05.740Z"),
  processStatus: "self_managed",
  uploadedById: "f1ffcedd-569c-4a62-aa78-701586fb3a01",
  uploadedByType: "<value>",
  processingStatus: "<value>",
  tokensProcessingTotal: 664736,
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
| `processStatus`                                                                               | [components.ProcessStatus](../../models/components/processstatus.md)                          | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `uploadedById`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `uploadedByType`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `tokensProcessingMainContent`                                                                 | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `tokensProcessingSummary`                                                                     | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `url`                                                                                         | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `attributes`                                                                                  | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `processingStatus`                                                                            | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `tokensProcessingTotal`                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |