# FilesApiRoutesGetSignedUrlRequest

## Example Usage

```typescript
import { FilesApiRoutesGetSignedUrlRequest } from "@mistralai/mistralai/models/operations";

let value: FilesApiRoutesGetSignedUrlRequest = {
  fileId: "4f5167cf-de7b-4415-ab4d-c35d355c0196",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `fileId`                                                        | *string*                                                        | :heavy_check_mark:                                              | N/A                                                             |
| `expiry`                                                        | *number*                                                        | :heavy_minus_sign:                                              | Number of hours before the url becomes invalid. Defaults to 24h |