# ListDeploymentsV1WorkflowsDeploymentsGetRequest

## Example Usage

```typescript
import { ListDeploymentsV1WorkflowsDeploymentsGetRequest } from "@mistralai/mistralai/models/operations";

let value: ListDeploymentsV1WorkflowsDeploymentsGetRequest = {};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `activeOnly`                                                            | *boolean*                                                               | :heavy_minus_sign:                                                      | N/A                                                                     |
| `isHardened`                                                            | *boolean*                                                               | :heavy_minus_sign:                                                      | Filter deployments by hardened status                                   |
| `workflowName`                                                          | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     |
| `search`                                                                | *string*                                                                | :heavy_minus_sign:                                                      | Filter deployments by name or ID prefix                                 |
| `limit`                                                                 | *number*                                                                | :heavy_minus_sign:                                                      | Maximum number of deployments to return                                 |
| `cursor`                                                                | *string*                                                                | :heavy_minus_sign:                                                      | Cursor from a previous response for pagination                          |
| `workspaceId`                                                           | *string*                                                                | :heavy_minus_sign:                                                      | Workspace ID to scope the request to. Defaults to the caller's context. |