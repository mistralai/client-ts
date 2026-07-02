# StreamDeploymentLogsResponseBody

Stream of Server-Sent Events (SSE): `log` events carry a DeploymentLogRecord; `error` events carry a StreamError payload.

## Example Usage

```typescript
import { StreamDeploymentLogsResponseBody } from "@mistralai/mistralai/models/operations";

let value: StreamDeploymentLogsResponseBody = {};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `event`                                                                                      | [operations.StreamDeploymentLogsEvent](../../models/operations/streamdeploymentlogsevent.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `id`                                                                                         | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `data`                                                                                       | *operations.StreamDeploymentLogsData*                                                        | :heavy_minus_sign:                                                                           | N/A                                                                                          |