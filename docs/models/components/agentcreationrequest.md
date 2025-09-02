# AgentCreationRequest

## Example Usage

```typescript
import { AgentCreationRequest } from "@mistralai/mistralai/models/components";

let value: AgentCreationRequest = {
  model: "Accord",
  name: "<value>",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `instructions`                                                          | *string*                                                                | :heavy_minus_sign:                                                      | Instruction prompt the model will follow during the conversation.       |
| `tools`                                                                 | *components.AgentCreationRequestTools*[]                                | :heavy_minus_sign:                                                      | List of tools which are available to the model during the conversation. |
| `completionArgs`                                                        | [components.CompletionArgs](../../models/components/completionargs.md)  | :heavy_minus_sign:                                                      | White-listed arguments from the completion API                          |
| `model`                                                                 | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `name`                                                                  | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `description`                                                           | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     |
| `handoffs`                                                              | *string*[]                                                              | :heavy_minus_sign:                                                      | N/A                                                                     |