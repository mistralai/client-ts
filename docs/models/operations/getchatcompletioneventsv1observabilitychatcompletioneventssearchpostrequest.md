# GetChatCompletionEventsV1ObservabilityChatCompletionEventsSearchPostRequest

## Example Usage

```typescript
import { GetChatCompletionEventsV1ObservabilityChatCompletionEventsSearchPostRequest } from "@mistralai/mistralai/models/operations";

let value:
  GetChatCompletionEventsV1ObservabilityChatCompletionEventsSearchPostRequest =
    {
      getChatCompletionEventsInSchema: {
        searchParams: {
          filters: {},
        },
      },
    };
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `pageSize`                                                                                               | *number*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `cursor`                                                                                                 | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `getChatCompletionEventsInSchema`                                                                        | [components.GetChatCompletionEventsInSchema](../../models/components/getchatcompletioneventsinschema.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |