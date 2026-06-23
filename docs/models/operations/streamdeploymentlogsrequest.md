# StreamDeploymentLogsRequest

## Example Usage

```typescript
import { StreamDeploymentLogsRequest } from "@mistralai/mistralai/models/operations";

let value: StreamDeploymentLogsRequest = {
  name: "<value>",
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `name`                                                                                          | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `workerName`                                                                                    | *string*                                                                                        | :heavy_minus_sign:                                                                              | Filter logs by worker name                                                                      |
| `workflowName`                                                                                  | *string*                                                                                        | :heavy_minus_sign:                                                                              | Filter logs by workflow name                                                                    |
| `after`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)   | :heavy_minus_sign:                                                                              | Start a fresh stream at this timestamp (ignored when resuming via last_event_id)                |
| `lastEventIdQueryParameter`                                                                     | *string*                                                                                        | :heavy_minus_sign:                                                                              | Resume from this cursor (a prior response's SSE id)                                             |
| `lastEventID`                                                                                   | *string*                                                                                        | :heavy_minus_sign:                                                                              | Resume from this cursor (a prior response's SSE id). Takes precedence over the query parameter. |