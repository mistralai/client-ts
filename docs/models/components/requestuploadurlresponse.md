# RequestUploadUrlResponse

## Example Usage

```typescript
import { RequestUploadUrlResponse } from "@mistralai/mistralai/models/components";

let value: RequestUploadUrlResponse = {
  signedUrl: "https://excellent-yogurt.biz",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `signedUrl`                                                    | *string*                                                       | :heavy_check_mark:                                             | Temporary signed URL for uploading a document to blob storage. |