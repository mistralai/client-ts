# PromptsListResponse

## Example Usage

```typescript
import { PromptsListResponse } from "@mistralai/mistralai/models/operations";

let value: PromptsListResponse = {
  result: {
    data: [
      {
        version: 1,
        createdAt: new Date("1s"),
        updatedAt: new Date("1s"),
        latestVersion: 1,
      },
    ],
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `result`                                                                         | [components.ListPromptsResponse](../../models/components/listpromptsresponse.md) | :heavy_check_mark:                                                               | N/A                                                                              |