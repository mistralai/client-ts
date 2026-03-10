# GetChatCompletionEventsV1ObservabilityChatCompletionEventsSearchPostRequest

## Example Usage

```typescript
import { GetChatCompletionEventsV1ObservabilityChatCompletionEventsSearchPostRequest } from "@mistralai/mistralai/models/operations";

let value:
  GetChatCompletionEventsV1ObservabilityChatCompletionEventsSearchPostRequest =
    {
      searchChatCompletionEventsRequest: {
        searchParams: {
          filters: {},
        },
      },
    };
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `pageSize`                                                                                                   | *number*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `cursor`                                                                                                     | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `searchChatCompletionEventsRequest`                                                                          | [components.SearchChatCompletionEventsRequest](../../models/components/searchchatcompletioneventsrequest.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |