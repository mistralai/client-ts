# VoiceListResponse

Schema for voice list response

## Example Usage

```typescript
import { VoiceListResponse } from "@mistralai/mistralai/models/components";

let value: VoiceListResponse = {
  items: [
    {
      name: "<value>",
      id: "d735d76e-5507-4b39-9e54-59a59f0249d8",
      createdAt: new Date("2024-04-13T17:29:06.723Z"),
      userId: "<id>",
    },
  ],
  total: 38391,
  page: 76184,
  pageSize: 410582,
  totalPages: 113184,
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `items`                                                                | [components.VoiceResponse](../../models/components/voiceresponse.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |
| `total`                                                                | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `page`                                                                 | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `pageSize`                                                             | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `totalPages`                                                           | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |