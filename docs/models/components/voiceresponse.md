# VoiceResponse

Schema for voice response

## Example Usage

```typescript
import { VoiceResponse } from "@mistralai/mistralai/models/components";

let value: VoiceResponse = {
  name: "<value>",
  id: "091a473e-e680-451e-b7bb-916ad9aab9f9",
  createdAt: new Date("2025-03-09T11:09:23.266Z"),
  userId: "<id>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `slug`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `languages`                                                                                   | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `gender`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `age`                                                                                         | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `tags`                                                                                        | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `color`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `retentionNotice`                                                                             | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `userId`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |