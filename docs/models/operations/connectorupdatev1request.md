# ConnectorUpdateV1Request

## Example Usage

```typescript
import { ConnectorUpdateV1Request } from "@mistralai/mistralai/models/operations";

let value: ConnectorUpdateV1Request = {
  connectorId: "495a102f-9124-4519-908e-44cac0f3fd45",
  requestBody: {
    protocol: "http",
  },
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `connectorId`                         | *string*                              | :heavy_check_mark:                    | N/A                                   |
| `requestBody`                         | *operations.ConnectorUpdateV1Payload* | :heavy_check_mark:                    | N/A                                   |