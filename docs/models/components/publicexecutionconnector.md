# PublicExecutionConnector

## Example Usage

```typescript
import { PublicExecutionConnector } from "@mistralai/mistralai/models/components";

let value: PublicExecutionConnector = {
  id: "7d3255b8-e6e8-4dd4-ad01-44268cd7288f",
  name: "<value>",
  connectionConfig: {
    type: "turbine",
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                     | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `name`                                                                                                   | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `connectionConfig`                                                                                       | [components.PublicExecutionConnectionConfig](../../models/components/publicexecutionconnectionconfig.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |