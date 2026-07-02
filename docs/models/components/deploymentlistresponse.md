# DeploymentListResponse

## Example Usage

```typescript
import { DeploymentListResponse } from "@mistralai/mistralai/models/components";

let value: DeploymentListResponse = {
  deployments: [],
  nextCursor: "<value>",
  workspaceId: "832a5de6-5c56-4e09-b154-0ec5ad842234",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `deployments`                                                                    | [components.DeploymentResponse](../../models/components/deploymentresponse.md)[] | :heavy_check_mark:                                                               | List of deployments                                                              |
| `nextCursor`                                                                     | *string*                                                                         | :heavy_check_mark:                                                               | Cursor for the next page of results                                              |
| `workspaceId`                                                                    | *string*                                                                         | :heavy_check_mark:                                                               | Workspace ID the results are scoped to                                           |