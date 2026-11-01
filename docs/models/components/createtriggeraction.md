# CreateTriggerAction

## Example Usage

```typescript
import { CreateTriggerAction } from "@mistralai/mistralai/models/components";

let value: CreateTriggerAction = {
  primitiveId: "<id>",
  type: "deploy_app",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `primitiveId`                                                                | *string*                                                                     | :heavy_check_mark:                                                           | ID of the target primitive (workflow, agent, or app)                         |
| `type`                                                                       | [components.TriggerActionType](../../models/components/triggeractiontype.md) | :heavy_check_mark:                                                           | N/A                                                                          |