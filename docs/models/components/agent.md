# Agent

## Example Usage

```typescript
import { Agent } from "@mistralai/mistralai/models/components";

let value: Agent = {
  model: "CX-9",
  name: "<value>",
  id: "<id>",
  version: 4,
  createdAt: new Date("2024-02-15T02:10:01.786Z"),
  updatedAt: new Date("2024-05-23T01:53:16.665Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `instructions`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | Instruction prompt the model will follow during the conversation.                             |
| `tools`                                                                                       | *components.AgentTools*[]                                                                     | :heavy_minus_sign:                                                                            | List of tools which are available to the model during the conversation.                       |
| `completionArgs`                                                                              | [components.CompletionArgs](../../models/components/completionargs.md)                        | :heavy_minus_sign:                                                                            | White-listed arguments from the completion API                                                |
| `model`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `handoffs`                                                                                    | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `object`                                                                                      | [components.AgentObject](../../models/components/agentobject.md)                              | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `version`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |