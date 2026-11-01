# TriggerAction

## Example Usage

```typescript
import { TriggerAction } from "@mistralai/mistralai/models/components";

let value: TriggerAction = {
  primitiveId: "<id>",
  type: "deploy_app",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `primitiveId`                                                                | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `type`                                                                       | [components.TriggerActionType](../../models/components/triggeractiontype.md) | :heavy_check_mark:                                                           | N/A                                                                          |