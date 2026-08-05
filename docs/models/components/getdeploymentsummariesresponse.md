# GetDeploymentSummariesResponse

## Example Usage

```typescript
import { GetDeploymentSummariesResponse } from "@mistralai/mistralai/models/components";

let value: GetDeploymentSummariesResponse = {
  deployments: [
    {
      id: "1e4a4a70-936f-447a-abe6-1065f8eda7db",
      name: "<value>",
      creatorId: "<id>",
      documentCount: 390941,
      status: "offline",
      createdAt: new Date("2026-02-16T09:09:34.198Z"),
      modifiedAt: new Date("2024-07-15T03:55:23.842Z"),
      deployment: {
        type: "vespa",
        indexes: [
          {
            id: "8f5ceb38-27a0-4899-9171-ed51864367d3",
            name: "<value>",
            documentCount: 796129,
          },
        ],
      },
    },
  ],
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `deployments`                                                                                                                | [components.GetDeploymentSummariesResponseDeployment](../../models/components/getdeploymentsummariesresponsedeployment.md)[] | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |