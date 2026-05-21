# UpdateScheduleV1WorkflowsSchedulesScheduleIdPatchRequest

## Example Usage

```typescript
import { UpdateScheduleV1WorkflowsSchedulesScheduleIdPatchRequest } from "@mistralai/mistralai/models/operations";

let value: UpdateScheduleV1WorkflowsSchedulesScheduleIdPatchRequest = {
  scheduleId: "<id>",
  workflowScheduleUpdateRequest: {
    schedule: {},
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `scheduleId`                                                                                         | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `workflowScheduleUpdateRequest`                                                                      | [components.WorkflowScheduleUpdateRequest](../../models/components/workflowscheduleupdaterequest.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |