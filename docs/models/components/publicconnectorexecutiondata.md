# PublicConnectorExecutionData

## Example Usage

```typescript
import { PublicConnectorExecutionData } from "@mistralai/mistralai/models/components";

let value: PublicConnectorExecutionData = {
  integrations: [
    {
      id: "e0912c30-c8fa-4bee-b7a0-a5c189c8a3d7",
      name: "<value>",
      connectionConfig: {
        type: "turbine",
      },
    },
  ],
  tools: [],
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `integrations`                                                                               | [components.PublicExecutionConnector](../../models/components/publicexecutionconnector.md)[] | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `tools`                                                                                      | [components.ExecutionTool](../../models/components/executiontool.md)[]                       | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `useConnectorsGateway`                                                                       | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | N/A                                                                                          |