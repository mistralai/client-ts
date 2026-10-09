# AudioV2VoicesListResponse

## Example Usage

```typescript
import { AudioV2VoicesListResponse } from "@mistralai/mistralai/models/operations";

let value: AudioV2VoicesListResponse = {
  result: {
    data: [
      {
        name: "<value>",
        id: "2fddee44-2cf4-432a-81b7-51105b2ecf36",
        createdAt: new Date("2024-10-19T01:07:47.924Z"),
        userId: "<id>",
        type: "preset",
      },
    ],
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `result`                                                             | [components.VoiceListPage](../../models/components/voicelistpage.md) | :heavy_check_mark:                                                   | N/A                                                                  |