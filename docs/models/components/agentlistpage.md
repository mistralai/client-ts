# AgentListPage

## Example Usage

```typescript
import { AgentListPage } from "@mistralai/mistralai/models/components";

let value: AgentListPage = {
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
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `object`                                               | *"list"*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `data`                                                 | [components.Agent](../../models/components/agent.md)[] | :heavy_check_mark:                                     | N/A                                                    |
| `nextPageToken`                                        | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    |