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
          description:
            "while runny briefly kaleidoscopic zowie yahoo nor nor above neglect",
          modelName: "<value>",
          output: {
            type: "CLASSIFICATION",
            options: [
              {
                value: "<value>",
                description:
                  "round whether like yet midst than inquisitively resource cafe",
              },
            ],
          },
          instructions: "<value>",
          tools: [
            "<value 1>",
          ],
        },
      },
    };
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `eventId`                                                                                                | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `judgeChatCompletionEventRequest`                                                                        | [components.JudgeChatCompletionEventRequest](../../models/components/judgechatcompletioneventrequest.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |