# VoiceListPage

## Example Usage

```typescript
import { VoiceListPage } from "@mistralai/mistralai/models/components";

let value: VoiceListPage = {
  data: [
    {
      name: "<value>",
      id: "2fddee44-2cf4-432a-81b7-51105b2ecf36",
      createdAt: new Date("2024-10-19T01:07:47.924Z"),
      userId: "<id>",
      type: "preset",
    },
  ],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `data`                                                                 | [components.VoiceResponse](../../models/components/voiceresponse.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |
| `nextPageToken`                                                        | *string*                                                               | :heavy_minus_sign:                                                     | Cursor for the next page, null on the last page                        |