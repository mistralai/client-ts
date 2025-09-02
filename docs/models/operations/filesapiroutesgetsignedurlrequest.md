# FilesApiRoutesGetSignedUrlRequest

## Example Usage

```typescript
import { FilesApiRoutesGetSignedUrlRequest } from "@mistralai/mistralai/models/operations";

let value: FilesApiRoutesGetSignedUrlRequest = {
  fileId: "f8456e8d-d43e-4a71-826f-880d5d3ed423",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `fileId`                                                        | *string*                                                        | :heavy_check_mark:                                              | N/A                                                             |
| `expiry`                                                        | *number*                                                        | :heavy_minus_sign:                                              | Number of hours before the url becomes invalid. Defaults to 24h |