# ListPromptsResponse

## Example Usage

```typescript
import { ListPromptsResponse } from "@mistralai/mistralai/models/components";

let value: ListPromptsResponse = {
  data: [
    {
      createdAt: new Date("1s"),
      updatedAt: new Date("1s"),
    },
  ],
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `data`                                                   | [components.Prompt](../../models/components/prompt.md)[] | :heavy_minus_sign:                                       | N/A                                                      |
| `nextPageToken`                                          | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |