# DeploymentResponse

## Example Usage

```typescript
import { DeploymentResponse } from "@mistralai/mistralai/models/components";

let value: DeploymentResponse = {
  id: "b71583e9-d8d1-4698-8624-ab3ef76d7c4e",
  name: "<value>",
  isActive: true,
  createdAt: new Date("2025-05-23T21:33:01.696Z"),
  updatedAt: new Date("2025-08-18T20:40:34.477Z"),
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