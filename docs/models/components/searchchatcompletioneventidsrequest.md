# SearchChatCompletionEventIdsRequest

## Example Usage

```typescript
import { SearchChatCompletionEventIdsRequest } from "@mistralai/mistralai/models/components";

let value: SearchChatCompletionEventIdsRequest = {
  searchParams: {
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
| `searchParams`                                                       | [components.FilterPayload](../../models/components/filterpayload.md) | :heavy_check_mark:                                                   | N/A                                                                  |
| `extraFields`                                                        | *string*[]                                                           | :heavy_minus_sign:                                                   | N/A                                                                  |