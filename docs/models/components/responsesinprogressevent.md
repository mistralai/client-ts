# ResponsesInProgressEvent

## Example Usage

```typescript
import { ResponsesInProgressEvent } from "@mistralai/mistralai/models/components";

let value: ResponsesInProgressEvent = {
  response: {
    id: "<id>",
    createdAt: 1930.59,
    model: "A4",
    object: "response",
    output: [
      {
        id: "<id>",
        content: [
          {
            refusal: "<value>",
            type: "refusal",
          },
        ],
        role: "assistant",
        status: "incomplete",
        type: "message",
        phase: null,
      },
    ],
    parallelToolCalls: false,
    toolChoice: "none",
    tools: [
      {
        name: "<value>",
        strict: null,
        type: "function",
        deferLoading: null,
        description: null,
      },
    ],
  },
  sequenceNumber: 922453,
  type: "response.in_progress",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `response`                                                                             | [components.CreateResponseResponse](../../models/components/createresponseresponse.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `sequenceNumber`                                                                       | *number*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `type`                                                                                 | *"response.in_progress"*                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `additionalProperties`                                                                 | Record<string, *any*>                                                                  | :heavy_minus_sign:                                                                     | N/A                                                                                    |