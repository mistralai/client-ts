# GetDeploymentSummariesResponseDeployment

## Example Usage

```typescript
import { GetDeploymentSummariesResponseDeployment } from "@mistralai/mistralai/models/components";

let value: GetDeploymentSummariesResponseDeployment = {
  id: "be88f4ea-e7ad-40b4-bc43-a77f63311d80",
  name: "<value>",
  creatorId: "<id>",
  documentCount: 281572,
  status: "online",
  createdAt: new Date("2024-06-15T18:36:47.548Z"),
  modifiedAt: new Date("2026-01-22T21:40:23.443Z"),
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
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                   | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `name`                                                                                                                                 | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `creatorId`                                                                                                                            | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `documentCount`                                                                                                                        | *number*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `status`                                                                                                                               | [components.GetDeploymentSummariesResponseDeploymentStatus](../../models/components/getdeploymentsummariesresponsedeploymentstatus.md) | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `createdAt`                                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                          | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `modifiedAt`                                                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                          | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `deployment`                                                                                                                           | *components.GetDeploymentSummariesResponseDeploymentDeployment*                                                                        | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |