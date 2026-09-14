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
      type: "preset",
    },
  ],
  total: 76184,
  page: 410582,
  pageSize: 113184,
  totalPages: 622815,
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