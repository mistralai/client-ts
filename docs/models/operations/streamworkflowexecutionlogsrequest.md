# StreamWorkflowExecutionLogsRequest

## Example Usage

```typescript
import { StreamWorkflowExecutionLogsRequest } from "@mistralai/mistralai/models/operations";

let value: StreamWorkflowExecutionLogsRequest = {
  executionId: "<id>",
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `executionId`                                                                                   | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `runId`                                                                                         | *string*                                                                                        | :heavy_minus_sign:                                                                              | Filter logs by workflow run ID                                                                  |
| `activityId`                                                                                    | *string*                                                                                        | :heavy_minus_sign:                                                                              | Filter logs by activity ID                                                                      |
| `after`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)   | :heavy_minus_sign:                                                                              | Start a fresh stream at this timestamp (ignored when resuming via last_event_id)                |
| `lastEventIdQueryParameter`                                                                     | *string*                                                                                        | :heavy_minus_sign:                                                                              | Resume from this cursor (a prior response's SSE id)                                             |
| `lastEventID`                                                                                   | *string*                                                                                        | :heavy_minus_sign:                                                                              | Resume from this cursor (a prior response's SSE id). Takes precedence over the query parameter. |