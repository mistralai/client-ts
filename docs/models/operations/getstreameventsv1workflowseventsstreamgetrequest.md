# GetStreamEventsV1WorkflowsEventsStreamGetRequest

## Example Usage

```typescript
import { GetStreamEventsV1WorkflowsEventsStreamGetRequest } from "@mistralai/mistralai/models/operations";

let value: GetStreamEventsV1WorkflowsEventsStreamGetRequest = {};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `scope`                                                                        | [operations.Scope](../../models/operations/scope.md)                           | :heavy_minus_sign:                                                             | N/A                                                                            |
| `activityName`                                                                 | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `activityId`                                                                   | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `workflowName`                                                                 | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `workflowExecId`                                                               | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `rootWorkflowExecId`                                                           | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `parentWorkflowExecId`                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `stream`                                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `startSeq`                                                                     | *number*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `metadataFilters`                                                              | Record<string, *any*>                                                          | :heavy_minus_sign:                                                             | N/A                                                                            |
| `workflowEventTypes`                                                           | [components.WorkflowEventType](../../models/components/workfloweventtype.md)[] | :heavy_minus_sign:                                                             | N/A                                                                            |
| `lastEventId`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |