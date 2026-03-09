# ConnectorUpdateV1Request

## Example Usage

```typescript
import { ConnectorUpdateV1Request } from "@mistralai/mistralai/models/operations";

let value: ConnectorUpdateV1Request = {
  connectorId: "495a102f-9124-4519-908e-44cac0f3fd45",
  connectorMCPUpdate: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `connectorId`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `connectorMCPUpdate`                                                           | [components.ConnectorMCPUpdate](../../models/components/connectormcpupdate.md) | :heavy_check_mark:                                                             | N/A                                                                            |