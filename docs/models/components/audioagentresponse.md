# AudioAgentResponse

## Example Usage

```typescript
import { AudioAgentResponse } from "@mistralai/mistralai/models/components";

let value: AudioAgentResponse = {
  id: "ee7de907-b29f-4b6d-9ae4-a56840f71c35",
  ownerId: "<id>",
  createdAt: new Date("2025-07-13T10:51:16.518Z"),
  updatedAt: new Date("2025-02-25T18:43:47.117Z"),
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                 | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `ownerId`                                                                                                            | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `name`                                                                                                               | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `description`                                                                                                        | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `createdAt`                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                        | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `updatedAt`                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                        | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `version`                                                                                                            | *number*                                                                                                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `configuration`                                                                                                      | [components.AudioAgentConfigurationResponseConfig](../../models/components/audioagentconfigurationresponseconfig.md) | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |