# UsersApiListOrganizationsRequest

## Example Usage

```typescript
import { UsersApiListOrganizationsRequest } from "@mistralai/mistralai/models/operations";

let value: UsersApiListOrganizationsRequest = {};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               | Example                                                   |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `offset`                                                  | *number*                                                  | :heavy_minus_sign:                                        | Number of organizations to skip before returning results. | 0                                                         |
| `limit`                                                   | *number*                                                  | :heavy_minus_sign:                                        | Maximum number of organizations to return.                | 100                                                       |