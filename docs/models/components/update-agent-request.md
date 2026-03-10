# UpdateAgentRequest

## Example Usage

```typescript
import { UpdateAgentRequest } from "@mistralai/mistralai/models/components";

let value: UpdateAgentRequest = {
  completionArgs: {
    responseFormat: {
      type: "text",
    },
  },
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `instructions`                                                              | *string*                                                                    | :heavy_minus_sign:                                                          | Instruction prompt the model will follow during the conversation.           |
| `tools`                                                                     | *components.UpdateAgentRequestTool*[]                                       | :heavy_minus_sign:                                                          | List of tools which are available to the model during the conversation.     |
| `completionArgs`                                                            | [components.CompletionArgs](../../models/components/completion-args.md)     | :heavy_minus_sign:                                                          | White-listed arguments from the completion API                              |
| `guardrails`                                                                | [components.GuardrailConfig](../../models/components/guardrail-config.md)[] | :heavy_minus_sign:                                                          | N/A                                                                         |
| `model`                                                                     | *string*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |
| `name`                                                                      | *string*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |
| `description`                                                               | *string*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |
| `handoffs`                                                                  | *string*[]                                                                  | :heavy_minus_sign:                                                          | N/A                                                                         |
| `deploymentChat`                                                            | *boolean*                                                                   | :heavy_minus_sign:                                                          | N/A                                                                         |
| `metadata`                                                                  | Record<string, *any*>                                                       | :heavy_minus_sign:                                                          | N/A                                                                         |
| `versionMessage`                                                            | *string*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |