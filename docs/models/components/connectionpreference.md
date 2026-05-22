# ConnectionPreference

## Example Usage

```typescript
import { ConnectionPreference } from "@mistralai/mistralai/models/components";

let value: ConnectionPreference = {
  name: "<value>",
  toolConfiguration: {},
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `name`                                                                                         | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `toolConfiguration`                                                                            | [components.ToolExecutionConfiguration](../../models/components/toolexecutionconfiguration.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `isDefault`                                                                                    | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `consumerType`                                                                                 | [components.ConsumerType](../../models/components/consumertype.md)                             | :heavy_minus_sign:                                                                             | N/A                                                                                            |