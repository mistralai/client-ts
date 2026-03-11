# JudgeChatCompletionEventV1ObservabilityChatCompletionEventsEventIdLiveJudgingPostRequest

## Example Usage

```typescript
import {
  JudgeChatCompletionEventV1ObservabilityChatCompletionEventsEventIdLiveJudgingPostRequest,
} from "@mistralai/mistralai/models/operations";

let value:
  JudgeChatCompletionEventV1ObservabilityChatCompletionEventsEventIdLiveJudgingPostRequest =
    {
      eventId: "ddcba39e-79b7-4634-9101-f125aad225fe",
      judgeChatCompletionEventRequest: {
        judgeDefinition: {
          name: "<value>",
          description: "wherever ha than",
          modelName: "<value>",
          output: {
            type: "REGRESSION",
            min: 0,
            minDescription: "<value>",
            max: 1,
            maxDescription: "<value>",
          },
          instructions: "<value>",
          tools: [],
        },
      },
    };
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `eventId`                                                                                                | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `judgeChatCompletionEventRequest`                                                                        | [components.JudgeChatCompletionEventRequest](../../models/components/judgechatcompletioneventrequest.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |