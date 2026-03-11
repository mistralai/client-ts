# ConnectorsQueryFilters

## Example Usage

```typescript
import { ConnectorsQueryFilters } from "@mistralai/mistralai/models/components";

let value: ConnectorsQueryFilters = {};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `active`                                                                   | *boolean*                                                                  | :heavy_minus_sign:                                                         | Filter for active connectors for a given user, workspace and organization. |
| `fetchConnectionSecrets`                                                   | *boolean*                                                                  | :heavy_minus_sign:                                                         | Fetch connection secrets.                                                  |