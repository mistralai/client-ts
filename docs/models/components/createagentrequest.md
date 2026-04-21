# CreateAgentRequest

## Example Usage

```typescript
import { CreateAgentRequest } from "@mistralai/mistralai/models/components";

let value: CreateAgentRequest = {
  completionArgs: {
    responseFormat: {
      type: "text",
    },
  },
  model: "Colorado",
  name: "<value>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `instructions`                                                             | *string*                                                                   | :heavy_minus_sign:                                                         | Instruction prompt the model will follow during the conversation.          |
| `tools`                                                                    | *components.CreateAgentRequestTool*[]                                      | :heavy_minus_sign:                                                         | List of tools which are available to the model during the conversation.    |
| `completionArgs`                                                           | [components.CompletionArgs](../../models/components/completionargs.md)     | :heavy_minus_sign:                                                         | White-listed arguments from the completion API                             |
| `guardrails`                                                               | [components.GuardrailConfig](../../models/components/guardrailconfig.md)[] | :heavy_minus_sign:                                                         | N/A                                                                        |
| `model`                                                                    | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `name`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `description`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `handoffs`                                                                 | *string*[]                                                                 | :heavy_minus_sign:                                                         | N/A                                                                        |
| `metadata`                                                                 | Record<string, *any*>                                                      | :heavy_minus_sign:                                                         | N/A                                                                        |
| `versionMessage`                                                           | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |