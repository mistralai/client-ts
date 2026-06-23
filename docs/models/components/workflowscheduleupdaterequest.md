# WorkflowScheduleUpdateRequest

## Example Usage

```typescript
import { WorkflowScheduleUpdateRequest } from "@mistralai/mistralai/models/components";

let value: WorkflowScheduleUpdateRequest = {
  schedule: {},
};
```

## Fields

| Field                                                                                                                                                                                                                 | Type                                                                                                                                                                                                                  | Required                                                                                                                                                                                                              | Description                                                                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `schedule`                                                                                                                                                                                                            | [components.PartialScheduleDefinition](../../models/components/partialscheduledefinition.md)                                                                                                                          | :heavy_check_mark:                                                                                                                                                                                                    | Schedule definition for partial updates.<br/><br/>All fields are optional (inherited from _ScheduleRequestBase). Only explicitly-set<br/>fields are applied during an update; unset fields preserve the existing schedule values. |