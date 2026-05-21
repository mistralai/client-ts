# LibrariesDocumentsPatchV1Request

## Example Usage

```typescript
import { LibrariesDocumentsPatchV1Request } from "@mistralai/mistralai/models/operations";

let value: LibrariesDocumentsPatchV1Request = {
  libraryId: "17629922-e572-4adc-ba03-500833bc882c",
  documentId: "2dec75cf-7036-4a9d-b61a-38039000acc2",
  updateDocumentRequest: {},
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `libraryId`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `documentId`                                                                         | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `updateDocumentRequest`                                                              | [components.UpdateDocumentRequest](../../models/components/updatedocumentrequest.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |