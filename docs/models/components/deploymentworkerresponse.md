# DeploymentWorkerResponse

## Example Usage

```typescript
import { DeploymentWorkerResponse } from "@mistralai/mistralai/models/components";

let value: DeploymentWorkerResponse = {
  name: "<value>",
  createdAt: new Date("2025-02-21T16:42:19.535Z"),
  updatedAt: new Date("2025-05-28T08:17:34.838Z"),
  isActive: true,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | Worker name                                                                                   |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the worker first registered                                                              |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the worker last registered                                                               |
| `isActive`                                                                                    | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether this worker's liveness key is currently alive                                         |