# ConnectorGetV1Request

## Example Usage

```typescript
import { ConnectorGetV1Request } from "@mistralai/mistralai/models/operations";

let value: ConnectorGetV1Request = {
  connectorIdOrName: "1f32c738-f3bd-4166-b30b-6be5e8ac0f8d",
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `connectorIdOrName`                                                                     | *string*                                                                                | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `fetchUserData`                                                                         | *boolean*                                                                               | :heavy_minus_sign:                                                                      | Fetch the user-level data associated with the connector (e.g. connection credentials).  |
| `fetchCustomerData`                                                                     | *boolean*                                                                               | :heavy_minus_sign:                                                                      | Fetch the customer data associated with the connector (e.g. customer secrets / config). |