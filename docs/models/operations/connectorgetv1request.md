# ConnectorGetV1Request

## Example Usage

```typescript
import { ConnectorGetV1Request } from "@mistralai/mistralai/models/operations";

let value: ConnectorGetV1Request = {
  connectorIdOrName: "<value>",
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `fetchCustomerData`                                                                     | *boolean*                                                                               | :heavy_minus_sign:                                                                      | Fetch the customer data associated with the connector (e.g. customer secrets / config). |
| `fetchConnectionSecrets`                                                                | *boolean*                                                                               | :heavy_minus_sign:                                                                      | Fetch the general connection secrets associated with the connector.                     |
| `connectorIdOrName`                                                                     | *string*                                                                                | :heavy_check_mark:                                                                      | N/A                                                                                     |