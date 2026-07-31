# ListDeploymentWorkersV1WorkflowsDeploymentsNameWorkersGetRequest

## Example Usage

```typescript
import { ListDeploymentWorkersV1WorkflowsDeploymentsNameWorkersGetRequest } from "@mistralai/mistralai/models/operations";

let value: ListDeploymentWorkersV1WorkflowsDeploymentsNameWorkersGetRequest = {
  name: "<value>",
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `name`                                                                                          | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `workerStatus`                                                                                  | [operations.WorkerStatus](../../models/operations/workerstatus.md)                              | :heavy_minus_sign:                                                                              | Filter by worker activity. active=only active, inactive=only inactive, None=no filter           |
| `limit`                                                                                         | *number*                                                                                        | :heavy_minus_sign:                                                                              | Maximum number of workers to return                                                             |
| `cursor`                                                                                        | *string*                                                                                        | :heavy_minus_sign:                                                                              | Cursor from a previous response's `next_cursor`. Resend `worker_status` unchanged alongside it. |