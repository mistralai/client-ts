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
      postChatCompletionEventJudgingInSchema: {
        judgeDefinition: {
          name: "<value>",
          description: "encode separately rubbery cheerfully",
          modelName: "<value>",
          output: {
            options: [
              {
                value: "<value>",
                description: "without indeed because",
              },
            ],
          },
          instructions: "<value>",
          tools: [
            "<value 1>",
            "<value 2>",
            "<value 3>",
          ],
        },
      },
    };
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `eventId`                                                                                                              | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `postChatCompletionEventJudgingInSchema`                                                                               | [components.PostChatCompletionEventJudgingInSchema](../../models/components/postchatcompletioneventjudginginschema.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |