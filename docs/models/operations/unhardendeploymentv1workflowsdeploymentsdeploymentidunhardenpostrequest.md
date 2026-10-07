# UnhardenDeploymentV1WorkflowsDeploymentsDeploymentIdUnhardenPostRequest

## Example Usage

```typescript
import { UnhardenDeploymentV1WorkflowsDeploymentsDeploymentIdUnhardenPostRequest } from "@mistralai/mistralai/models/operations";

let value:
  UnhardenDeploymentV1WorkflowsDeploymentsDeploymentIdUnhardenPostRequest = {
    deploymentId: "87be6024-2437-4002-9bf2-332d9cb7e852",
  };
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `deploymentId`                                                          | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `workspaceId`                                                           | *string*                                                                | :heavy_minus_sign:                                                      | Workspace ID to scope the request to. Defaults to the caller's context. |