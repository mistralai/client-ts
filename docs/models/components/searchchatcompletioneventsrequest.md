# SearchChatCompletionEventsRequest

## Example Usage

```typescript
import { SearchChatCompletionEventsRequest } from "@mistralai/mistralai/models/components";

let value: SearchChatCompletionEventsRequest = {
  filterPayload: {
    filters: {
      field: "<value>",
      op: "len_eq",
      value: "<value>",
    },
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `filterPayload`                                                      | [components.FilterPayload](../../models/components/filterpayload.md) | :heavy_check_mark:                                                   | N/A                                                                  |
| `extraFields`                                                        | *string*[]                                                           | :heavy_minus_sign:                                                   | N/A                                                                  |