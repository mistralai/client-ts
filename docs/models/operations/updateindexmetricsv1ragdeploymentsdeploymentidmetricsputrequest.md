# UpdateIndexMetricsV1RagDeploymentsDeploymentIdMetricsPutRequest

## Example Usage

```typescript
import { UpdateIndexMetricsV1RagDeploymentsDeploymentIdMetricsPutRequest } from "@mistralai/mistralai/models/operations";

let value: UpdateIndexMetricsV1RagDeploymentsDeploymentIdMetricsPutRequest = {
  deploymentId: "eb3764b6-45f4-45b4-8d33-d5e97dad59c6",
  requestBody: {
    status: "online",
    documentCount: 200112,
    indexMetrics: [
      {
        name: "<value>",
        documentCount: 818264,
      },
    ],
  },
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `deploymentId`           | *string*                 | :heavy_check_mark:       | N/A                      |
| `requestBody`            | *operations.MetricsData* | :heavy_check_mark:       | N/A                      |