# DeploymentDetailResponse

## Example Usage

```typescript
import { DeploymentDetailResponse } from "@mistralai/mistralai/models/components";

let value: DeploymentDetailResponse = {
  id: "fda378b7-740e-4804-bb6c-020ecf47422c",
  name: "<value>",
  isActive: false,
  createdAt: new Date("2024-10-31T03:27:37.934Z"),
  updatedAt: new Date("2025-08-30T19:37:51.423Z"),
  workers: [],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique identifier of the deployment                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | Deployment name                                                                               |
| `isActive`                                                                                    | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether at least one worker is currently live                                                 |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the deployment was first registered                                                      |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the deployment was last updated                                                          |
| `location`                                                                                    | [components.DeploymentLocation](../../models/components/deploymentlocation.md)                | :heavy_minus_sign:                                                                            | Where the deployment is running                                                               |
| `workers`                                                                                     | [components.DeploymentWorkerResponse](../../models/components/deploymentworkerresponse.md)[]  | :heavy_check_mark:                                                                            | Workers registered for the deployment                                                         |