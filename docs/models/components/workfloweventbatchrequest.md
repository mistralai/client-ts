# WorkflowEventBatchRequest

Request model containing multiple workflow events.

## Example Usage

```typescript
import { WorkflowEventBatchRequest } from "@mistralai/mistralai/models/components";

let value: WorkflowEventBatchRequest = {
  events: [],
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `events`                                      | *components.WorkflowEventBatchRequestEvent*[] | :heavy_check_mark:                            | List of workflow events to send.              |