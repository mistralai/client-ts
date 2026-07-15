# AgentsApiV1AgentsListPagesResponse

## Example Usage

```typescript
import { AgentsApiV1AgentsListPagesResponse } from "@mistralai/mistralai/models/operations";

let value: AgentsApiV1AgentsListPagesResponse = {
  result: {
    data: [
      {
        completionArgs: {
          responseFormat: {
            type: "text",
          },
        },
        model: "Grand Caravan",
        name: "<value>",
        id: "<id>",
        version: 18912,
        versions: [
          514031,
          225694,
        ],
        createdAt: new Date("2024-06-26T21:04:00.097Z"),
        updatedAt: new Date("2026-03-25T22:28:44.753Z"),
        deploymentChat: true,
        source: "<value>",
      },
    ],
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `result`                                                             | [components.AgentListPage](../../models/components/agentlistpage.md) | :heavy_check_mark:                                                   | N/A                                                                  |