# DeploymentWorkerListResponse

## Example Usage

```typescript
import { DeploymentWorkerListResponse } from "@mistralai/mistralai/models/components";

let value: DeploymentWorkerListResponse = {
  workers: [],
  nextCursor: "<value>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `workers`                                                                                    | [components.DeploymentWorkerResponse](../../models/components/deploymentworkerresponse.md)[] | :heavy_check_mark:                                                                           | Workers registered for the deployment                                                        |
| `nextCursor`                                                                                 | *string*                                                                                     | :heavy_check_mark:                                                                           | Cursor for the next page of results                                                          |