# WorkflowScheduleListResponse

## Example Usage

```typescript
import { WorkflowScheduleListResponse } from "@mistralai/mistralai/models/components";

let value: WorkflowScheduleListResponse = {
  schedules: [
    {
      input: "<value>",
      scheduleId: "<id>",
    },
  ],
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `schedules`                                                                                  | [components.ScheduleDefinitionOutput](../../models/components/scheduledefinitionoutput.md)[] | :heavy_check_mark:                                                                           | A list of workflow schedules                                                                 |