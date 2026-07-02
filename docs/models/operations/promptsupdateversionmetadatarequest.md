# PromptsUpdateVersionMetadataRequest

## Example Usage

```typescript
import { PromptsUpdateVersionMetadataRequest } from "@mistralai/mistralai/models/operations";

let value: PromptsUpdateVersionMetadataRequest = {
  promptId: "<id>",
  version: 1,
  requestBody: {},
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `promptId`                                                                                     | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |                                                                                                |
| `version`                                                                                      | *number*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            | 1                                                                                              |
| `requestBody`                                                                                  | [operations.UpdatePromptVersionRequest](../../models/operations/updatepromptversionrequest.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |                                                                                                |