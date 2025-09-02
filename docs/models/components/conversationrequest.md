# ConversationRequest

## Example Usage

```typescript
import { ConversationRequest } from "@mistralai/mistralai/models/components";

let value: ConversationRequest = {
  inputs: [
    {
      object: "entry",
      type: "tool.execution",
      name: "web_search_premium",
      arguments: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `inputs`                                                                   | *components.ConversationInputs*                                            | :heavy_check_mark:                                                         | N/A                                                                        |
| `stream`                                                                   | *boolean*                                                                  | :heavy_minus_sign:                                                         | N/A                                                                        |
| `store`                                                                    | *boolean*                                                                  | :heavy_minus_sign:                                                         | N/A                                                                        |
| `handoffExecution`                                                         | [components.HandoffExecution](../../models/components/handoffexecution.md) | :heavy_minus_sign:                                                         | N/A                                                                        |
| `instructions`                                                             | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `tools`                                                                    | *components.Tools*[]                                                       | :heavy_minus_sign:                                                         | N/A                                                                        |
| `completionArgs`                                                           | [components.CompletionArgs](../../models/components/completionargs.md)     | :heavy_minus_sign:                                                         | N/A                                                                        |
| `name`                                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `description`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `agentId`                                                                  | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `model`                                                                    | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |