# PublicExecutionEnv

Credentials-free projection of ExecutionEnv for the public /connectors/mistral response.

## Example Usage

```typescript
import { PublicExecutionEnv } from "@mistralai/mistralai/models/components";

let value: PublicExecutionEnv = {
  tools: [],
  toolExecutionData: {
    integrations: [
      {
        id: "e0912c30-c8fa-4bee-b7a0-a5c189c8a3d7",
        name: "<value>",
        connectionConfig: {
          type: "turbine",
        },
      },
    ],
    tools: [
      {
        name: "<value>",
        integrationId: "3cf0c588-1697-4bfc-87d2-029326012f17",
        executionConfig: {
          type: "<value>",
        },
      },
    ],
  },
  errors: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `tools`                                                                                            | [components.Tool](../../models/components/tool.md)[]                                               | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `toolExecutionData`                                                                                | [components.PublicConnectorExecutionData](../../models/components/publicconnectorexecutiondata.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `errors`                                                                                           | *string*[]                                                                                         | :heavy_check_mark:                                                                                 | N/A                                                                                                |