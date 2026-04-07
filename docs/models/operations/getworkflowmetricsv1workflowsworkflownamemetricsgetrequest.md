# GetWorkflowMetricsV1WorkflowsWorkflowNameMetricsGetRequest

## Example Usage

```typescript
import { GetWorkflowMetricsV1WorkflowsWorkflowNameMetricsGetRequest } from "@mistralai/mistralai/models/operations";

let value: GetWorkflowMetricsV1WorkflowsWorkflowNameMetricsGetRequest = {
  workflowName: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `workflowName`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `startTime`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Filter workflows started after this time (ISO 8601)                                           |
| `endTime`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Filter workflows started before this time (ISO 8601)                                          |