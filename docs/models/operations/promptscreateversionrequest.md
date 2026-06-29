# PromptsCreateVersionRequest

## Example Usage

```typescript
import { PromptsCreateVersionRequest } from "@mistralai/mistralai/models/operations";

let value: PromptsCreateVersionRequest = {
  promptId: "<id>",
  requestBody: {
    definition: {
      content: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `promptId`                                                                                     | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `requestBody`                                                                                  | [operations.CreatePromptVersionRequest](../../models/operations/createpromptversionrequest.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |