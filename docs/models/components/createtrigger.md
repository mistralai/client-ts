# CreateTrigger

## Example Usage

```typescript
import { CreateTrigger } from "@mistralai/mistralai/models/components";

let value: CreateTrigger = {
  eventSourceId: "05bef136-6626-4f40-9426-0e486c0ba813",
  handler: "agents",
  action: {
    primitiveId: "<id>",
    type: "start_workflow",
  },
  ownerType: "workspace",
  title: "<value>",
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `eventSourceId`                                                                                   | *string*                                                                                          | :heavy_check_mark:                                                                                | ID of the event source that fires this trigger                                                    |
| `handler`                                                                                         | [components.TriggerHandler](../../models/components/triggerhandler.md)                            | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `action`                                                                                          | [components.CreateTriggerAction](../../models/components/createtriggeraction.md)                  | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `filters`                                                                                         | *string*                                                                                          | :heavy_minus_sign:                                                                                | jmespath expression to filter events, e.g. event_type == 'push' && repository.name == 'dashboard' |
| `ownerType`                                                                                       | [components.TriggersOwnerType](../../models/components/triggersownertype.md)                      | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `title`                                                                                           | *string*                                                                                          | :heavy_check_mark:                                                                                | Human-readable title of the trigger                                                               |