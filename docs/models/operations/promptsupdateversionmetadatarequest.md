# PromptsUpdateVersionMetadataRequest

## Example Usage

```typescript
import { PromptsUpdateVersionMetadataRequest } from "@mistralai/mistralai/models/operations";

let value: PromptsUpdateVersionMetadataRequest = {
  promptId: "<id>",
  version: 43018,
  requestBody: {
    aliases: [
      "<value 1>",
      "<value 2>",
    ],
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `promptId`                                                                                     | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `version`                                                                                      | *number*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `requestBody`                                                                                  | [operations.UpdatePromptVersionRequest](../../models/operations/updatepromptversionrequest.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |