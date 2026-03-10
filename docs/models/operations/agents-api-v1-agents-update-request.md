# AgentsApiV1AgentsUpdateRequest

## Example Usage

```typescript
import { AgentsApiV1AgentsUpdateRequest } from "@mistralai/mistralai/models/operations";

let value: AgentsApiV1AgentsUpdateRequest = {
  agentId: "<id>",
  updateAgentRequest: {
    completionArgs: {
      responseFormat: {
        type: "text",
      },
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `agentId`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `updateAgentRequest`                                                             | [components.UpdateAgentRequest](../../models/components/update-agent-request.md) | :heavy_check_mark:                                                               | N/A                                                                              |