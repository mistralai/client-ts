# FilesApiRoutesGetSignedUrlRequest

## Example Usage

```typescript
import { FilesApiRoutesGetSignedUrlRequest } from "@mistralai/mistralai/models/operations";

let value: FilesApiRoutesGetSignedUrlRequest = {
  fileId: "<id>",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `fileId`                                                        | *string*                                                        | :heavy_check_mark:                                              | N/A                                                             |
| `expiry`                                                        | *number*                                                        | :heavy_minus_sign:                                              | Number of hours before the url becomes invalid. Defaults to 24h |