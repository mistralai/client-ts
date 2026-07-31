# ManagedDeploymentResponse

## Example Usage

```typescript
import { ManagedDeploymentResponse } from "@mistralai/mistralai/models/components";

let value: ManagedDeploymentResponse = {
  serviceId: "<id>",
  name: "<value>",
  spec: {
    githubUrl: "https://ignorant-archaeology.com/",
  },
  resources: {},
  status: {},
  createdAt: new Date("2026-11-02T00:08:28.143Z"),
  updatedAt: new Date("2024-08-01T19:24:54.169Z"),
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `serviceId`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `name`                                                                                             | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `spec`                                                                                             | [components.DeploymentWorkerSpecResponse](../../models/components/deploymentworkerspecresponse.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `resources`                                                                                        | [components.DeploymentResourceConfig](../../models/components/deploymentresourceconfig.md)         | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `status`                                                                                           | [components.DeploymentObservedState](../../models/components/deploymentobservedstate.md)           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `createdAt`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `updatedAt`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `stopped`                                                                                          | *boolean*                                                                                          | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `rolloutStatus`                                                                                    | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `createdBy`                                                                                        | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `updatedBy`                                                                                        | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `deployedBy`                                                                                       | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `deployedAt`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `isHardened`                                                                                       | *boolean*                                                                                          | :heavy_minus_sign:                                                                                 | N/A                                                                                                |